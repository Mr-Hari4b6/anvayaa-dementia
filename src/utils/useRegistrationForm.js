import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

const useRegistrationForm = () => {
    const navigate = useNavigate();
    const initialUserDetails = {
        username: '',
        mobilenumber: '',
        email: '',
        newpassword: '',
        confirmpassword: '',
    };

    const [userDetails, setUserDetails] = useState([]);

    useEffect(() => {
        try {
            const storedUserDetails = JSON.parse(localStorage.getItem('userDetails')) || [initialUserDetails];
            setUserDetails(storedUserDetails);
        } catch (error) {
            message.error('Error loading user details from local storage:', error);
            setUserDetails([initialUserDetails]);
        }
    }, []);

    const generateUserId = () => {
        const lastUserId = userDetails[userDetails.length - 1]?.userID;
        const lastNumber = lastUserId ? parseInt(lastUserId.substr(6)) : 0;
        const nextNumber = lastNumber + 1;
        const paddedUserId = nextNumber.toString().padStart(2, '0');
        return 'ANVDEM' + paddedUserId;
    };


    const isEmailExists = (email) => {
        return userDetails.some(user => user.email === email);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prevUserDetails) => {
            if (Array.isArray(prevUserDetails) && prevUserDetails.length > 0) {
                const updatedArray = [...prevUserDetails];
                updatedArray[prevUserDetails.length - 1] = {
                    userID: generateUserId(),
                    ...updatedArray[prevUserDetails.length - 1],
                    [name]: value,
                };
                return updatedArray;
            }
            return prevUserDetails;
        });
    };

    const handleSignUp = (e) => {
        e.preventDefault();

        if (isEmailExists(initialUserDetails.email)) {
            message.error("Email already exists");
            return;
        }
        const newUser = {
            userID: generateUserId(),
            ...initialUserDetails,
        };
        setUserDetails((prevUserDetails) => [...prevUserDetails, newUser]);
        localStorage.setItem('userDetails', JSON.stringify([...userDetails, newUser]));
        navigate('/');
    };


    return { userDetails, handleChange, handleSignUp };
};

export default useRegistrationForm;
