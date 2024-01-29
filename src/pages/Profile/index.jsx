import React, { useState, useEffect } from 'react';
import { Layout, theme, Radio, Select, Input, Form, DatePicker, Space, Row, Col, Button, message } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { EditOutlined, SaveOutlined } from '@ant-design/icons';
import ImageUpload from '../../components/ImageUploader';

const { Content } = Layout;
const { TextArea } = Input;

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];

const formFields = [
  { label: 'PWD Name', key: 'pwdName', type: 'text' },
  { label: 'Age', key: 'age', type: 'text' },
  { label: 'Gender', key: 'gender', type: 'radio', options: ['Male', 'Female'] },
  { label: 'Date of Birth', key: 'dob', type: 'datePicker' },
  { label: 'Occupation', key: 'occupation', type: 'text' },
  { label: 'Responder Name', key: 'responderName', type: 'text' },
  { label: 'Responder Relation', key: 'responderRelation', type: 'text' },
  { label: 'Primary Care Giver Name', key: 'primaryCareGiverName', type: 'text' },
  { label: 'Current Home Care Attender', key: 'homeCareAttender', type: 'text' },
  { label: 'Select Languages', key: 'selectedLanguage', type: 'select', options: ['Telugu', 'Hindi', 'English'] },
  { label: 'Address', key: 'address', type: 'textarea' },
];

const Profile = () => {
  const { token } = theme.useToken();
  const [isEditing, setIsEditing] = useState(false);
  const [hasUserDetails, setHasUserDetails] = useState(false);

  const storedUserDetails = JSON.parse(localStorage.getItem('userDetails')) || [];
  const currentUser = storedUserDetails.find((user) => user.mobilenumber === JSON.parse(localStorage.getItem('user')).mobilenumber);

  const hasProfileDetails = !!currentUser?.profileDetails;
  const [profileDetails, setProfileDetails] = useState(hasProfileDetails ? currentUser.profileDetails : {});

  useEffect(() => {
    setHasUserDetails(hasProfileDetails);
  }, [hasProfileDetails]);

  const handleFieldChange = (fieldName, value) => {
    setProfileDetails((prevDetails) => ({
      ...prevDetails,
      [fieldName]: value,
    }));
  };
  const onImageChange = (imageUrl) => {
    setProfileDetails((prevDetails) => ({
      ...prevDetails,
      imageURL: imageUrl
    }));
  }
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);

    if (hasProfileDetails) {
      currentUser.profileDetails = profileDetails;
      localStorage.setItem('userDetails', JSON.stringify(storedUserDetails));
      message.success('Profile details updated successfully!');
    } else {
      currentUser.profileDetails = profileDetails;
      localStorage.setItem('userDetails', JSON.stringify(storedUserDetails));
      setHasUserDetails(true);
      message.success('Profile details added successfully!');
    }
  };

  const handleAddDetails = () => {
    setIsEditing(true);
    setProfileDetails({});
  };

  return (
    <Content style={{ width: '100%', backgroundColor: '#F5F5F5' }}>
      <div style={{ padding: '10px', background: token.colorBgContainer, width: '100%' }}>
        <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ color: ' #9c58d4', fontSize: '22px', marginBottom: '16px' }}>
            <span style={{ color: 'black' }}>Welcome</span> {hasProfileDetails ? `Mr.${profileDetails.pwdName}` : 'Guest'}
          </h1>
          {isEditing && (
            <Button type="text" danger style={{ float: 'right', fontWeight: '500' }} icon={<SaveOutlined />} onClick={handleSave}>
              Save & Next
            </Button>
          )}
          {hasUserDetails && !isEditing && (
            <Button type="text" style={{ color: '#a26fcb', fontWeight: '500' }} icon={<EditOutlined />} onClick={handleEdit}>
              Edit
            </Button>
          )}
        </div>
        {isEditing && !hasProfileDetails ? (
          <Row gutter={[8, 0]}>
             <Col span={24}>
              <ImageUpload onImageChange={onImageChange}></ImageUpload>
              </Col>
              <br />
            {formFields.map((field) => (
              <Col key={field.key} span={12}>
                <Form labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
                  <Form.Item label={field.label} style={{ color: 'purple', fontWeight: 'bold' }}>
                    {field.type === 'textarea' ? (
                      <TextArea
                        rows={4}
                        placeholder={field.label}
                        value={profileDetails[field.key]}
                        onChange={(e) => handleFieldChange(field.key, e.target.value)}
                        style={{ borderRadius: 0 }}
                      />
                    ) : field.type === 'datePicker' ? (
                      <Space direction="vertical" size={12}>
                        <DatePicker
                          defaultValue={profileDetails[field.key] ? dayjs(profileDetails[field.key]) : null}
                          format={dateFormatList}
                          onChange={(date) => handleFieldChange(field.key, date)}
                          disabled={!isEditing}
                          style={{ borderRadius: 0, width: '100%' }}
                        />

                      </Space>
                    ) : field.type === 'radio' ? (
                      <Radio.Group
                        options={field.options}
                        onChange={(e) => handleFieldChange(field.key, e.target.value)}
                        value={profileDetails[field.key]}
                      />
                    ) : field.type === 'select' ? (
                      <Select
                        placeholder={`Select ${field.label}`}
                        value={profileDetails[field.key]}
                        onChange={(value) => handleFieldChange(field.key, value)}
                      >
                        {field.options?.map((option) => (
                          <Select.Option key={option} value={option}>
                            {option}
                          </Select.Option>
                        ))}
                      </Select>
                    ) : (
                      <Input
                        placeholder={field.label}
                        value={profileDetails[field.key]}
                        onChange={(e) => handleFieldChange(field.key, e.target.value)}
                        style={{ borderRadius: 0 }}
                      />
                    )}
                  </Form.Item>
                </Form>
              </Col>
            ))}
          </Row>
        ) : !hasUserDetails ? (
          <Button type="primary" onClick={handleAddDetails}>
            Add PWD Details
          </Button>
        ) :
          (hasProfileDetails &&
            (<Row gutter={[8, 0]}>
              {formFields.map((field) => (
                <Col key={field.key} span={12}>
                  <Form labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
                    <Form.Item label={field.label} style={{ color: 'purple', fontWeight: 'bold' }}>
                      {field.type === 'textarea' ? (
                        <TextArea
                          rows={4}
                          placeholder={field.label}
                          value={profileDetails[field.key]}
                          onChange={(e) => handleFieldChange(field.key, e.target.value)}
                          disabled={!isEditing}
                          style={{ borderRadius: 0 }}
                        />
                      ) : field.type === 'datePicker' ? (
                        <Space direction="vertical" size={12}>
                          <DatePicker
                            defaultValue={profileDetails[field.key] ? dayjs(profileDetails[field.key]) : null}
                            format={dateFormatList}
                            onChange={(date) => handleFieldChange(field.key, date)}
                            disabled={!isEditing}
                            style={{ borderRadius: 0, width: '100%' }}
                          />

                        </Space>
                      ) : field.type === 'radio' ? (
                        <Radio.Group
                          options={field.options}
                          onChange={(e) => handleFieldChange(field.key, e.target.value)}
                          value={profileDetails[field.key]}
                          disabled={!isEditing}
                        />
                      ) : field.type === 'select' ? (
                        <Select
                          placeholder={`Select ${field.label}`}
                          value={profileDetails[field.key]}
                          onChange={(value) => handleFieldChange(field.key, value)}
                          disabled={!isEditing}
                        >
                          {field.options?.map((option) => (
                            <Select.Option key={option} value={option}>
                              {option}
                            </Select.Option>
                          ))}
                        </Select>
                      ) : (
                        <Input
                          placeholder={field.label}
                          value={profileDetails[field.key]}
                          onChange={(e) => handleFieldChange(field.key, e.target.value)}
                          disabled={!isEditing}
                          style={{ borderRadius: 0 }}
                        />
                      )}
                    </Form.Item>
                  </Form>
                </Col>
              ))}
            </Row>)

          )}
      </div>
    </Content>
  );
};

export default Profile;
