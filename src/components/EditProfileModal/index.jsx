import React, { useEffect, useState } from "react";
import { Modal, Input } from "antd";

export const EditProfileModal = ({ visible, setVisible }) => {
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem('user'))
    setUserDetails(userdata);
  }, []);

  const handleOk = () => {
    const storedUserDetails = JSON.parse(localStorage.getItem('userDetails')) || [];
    const index = storedUserDetails.findIndex(user => user.mobilenumber === userDetails.mobilenumber);

    if (index !== -1) {
      const updatedUserDetails = [...storedUserDetails];
      updatedUserDetails[index] = userDetails;
      localStorage.setItem('userDetails', JSON.stringify(updatedUserDetails));
    }

    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [name]: value,
    }));
  };

  return (
    <div>
      <Modal
        title="Edit Profile"
        visible={visible}
        onOk={handleOk}
        okText="Update"
        onCancel={handleCancel}
      >
        <label htmlFor="username">Username:</label>
        <Input
          type="text"
          id="username"
          name="username"
          value={userDetails.username}
          onChange={handleChange}
        />

        <label htmlFor="email">Mobile Number:</label>
        <Input
          type="number"
          id="mobilenumber"
          name="mobilenumber"
          value={userDetails.mobilenumber}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>

        <Input
          name="email"
          type="email"
          value={userDetails.email}
          onChange={handleChange}
          placeholder="Enter Email"
        />
        <label htmlFor="email">Password:</label>

        <Input
          className="LoginInput"
          name="newpassword"
          readOnly
          value={userDetails.newpassword}
          onChange={handleChange}
          type="password"
          placeholder="Enter new Password"
        />
      </Modal>
    </div>
  );
};
