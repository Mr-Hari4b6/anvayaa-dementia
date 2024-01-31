import React, { useState, useEffect } from 'react';
import { Layout, theme, Radio, Select, Input, Form, DatePicker, Space, Row, Col, Button, message, Upload } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { SaveOutlined, UploadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';

const { Content } = Layout;
const { TextArea } = Input;

dayjs.extend(customParseFormat);

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

const EditProfile = () => {
  const { token } = theme.useToken();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(true);
  const [hasUserDetails, setHasUserDetails] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

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

  const beforeUpload = (file) => {
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      message.error('You can only upload image files!');
    }
    return isImage;
  };

  const handleChange = (info) => {
    if (info.file.status === 'done') {
      setImageUrl(info.file.response.url);
      setProfileDetails((prevDetails) => ({
        ...prevDetails,
        profileImg: imageUrl,
      }));
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
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
    navigate('/layout/profile/profileDetails')
  };

  return (
    <Content style={{ width: '100%', backgroundColor: '#F5F5F5' }}>
      <div style={{ padding: '5px', background: token.colorBgContainer, width: '100%' }}>

        <Row gutter={[8, 0]}>
          <Col xs={{ span: 12 }} md={{ span: 12 }}>
            <Upload
              name="image"
              listType="picture"
              headers='Upload Image'
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              <Button icon={<UploadOutlined />}>Upload Image</Button>
            </Upload>
          </Col>
          <Col xs={{ span: 12 }} md={{ span: 12 }}>
            <Button type="text" danger style={{ float: 'right', fontWeight: '500' }} icon={<SaveOutlined />} onClick={handleSave}>
               Save & Next
            </Button>
          </Col>
          {formFields.map((field) => (
            <Col key={field.key} xs={{ span: 24 }} md={{ span: 12 }}>
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
      </div>
    </Content>
  );
};

export default EditProfile;
