import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

const useLoginForm = () => {
    const navigate = useNavigate();
    const [loginDetails, setLoginDetails] = useState({
        mobilenumber: '',
        newpassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginDetails((prevLoginDetails) => ({
            ...prevLoginDetails,
            [name]: value,
        }));
    };

    const handleLogin = (e) => {
        e.preventDefault();
        try {
            const storedUserDetails = JSON.parse(localStorage.getItem('userDetails')) || [];

            const foundUser = storedUserDetails.find(
                (user) => user.mobilenumber === loginDetails.mobilenumber && user.newpassword === loginDetails.newpassword
            );
            if (foundUser) {
                e.preventDefault();
                localStorage.setItem('isLoggedIn', true);
                localStorage.setItem('user', JSON.stringify(foundUser));
                navigate('/layout/profile');
                message.success('Login successful:');
            } else {
                message.error('Login failed: User not found or incorrect credentials');
            }
        } catch (error) {
            message.error('Error while logging in:', error);
        }
    };

    return { loginDetails, handleChange, handleLogin };
};

export default useLoginForm;
