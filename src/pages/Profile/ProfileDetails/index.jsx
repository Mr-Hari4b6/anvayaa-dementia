import React, { useState } from 'react';
import { Card, Divider, Space, Typography, Row, Col, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import './style.scss';
import moment from 'moment/moment';
import { useNavigate } from 'react-router';

const { Title, Text } = Typography;

const ProfileDetails = () => {

  const navigate = useNavigate();
  const storedUserDetails = JSON.parse(localStorage.getItem('userDetails')) || [];
  const currentUser = storedUserDetails.find(user => user.mobilenumber === JSON.parse(localStorage.getItem('user')).mobilenumber);

  const hasProfileDetails = !!currentUser?.profileDetails;
  const [user, setUser] = useState(hasProfileDetails ? currentUser.profileDetails : {});

  const renderPWDProfileDetails = () => {
    return (
      <div>
        <Divider className="pwd-profile-divider" />
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <Title className="pwd-profile-title" level={4}>PWD Profile Details</Title>
          {hasProfileDetails &&
            <Button  type="text" style={{ float: 'right', fontWeight: 'bold'}} 
             icon={<EditOutlined />} 
             onClick={() => navigate('/layout/profile/editProfile')}
             >
              Edit
            </Button>
          }
        </div>
        <Row gutter={[10, 10]} className="pwd-profile-section">
          <Col xs={24} sm={24} md={12} lg={12}>
            <Space className="pwd-profile-text" direction="vertical">
              <Text strong>PWD Name: <span className='pwd-values'>{user.pwdName}</span></Text>
              <Text strong>Age: <span className='pwd-values'>{user.age}</span></Text>
              <Text strong>Gender: <span className='pwd-values'>{user.gender}</span></Text>
              <Text strong>Date of Birth: <span className='pwd-values'>{moment(user.dob).format('DD/MM/YYYY')}</span></Text>
              <Text strong>Occupation: <span className='pwd-values'>{user.occupation}</span></Text>
            </Space>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Space className="pwd-profile-text" direction="vertical">
              <Text strong>Responder Name: <span className='pwd-values'>{user.responderName}</span></Text>
              <Text strong>Responder Relation: <span className='pwd-values'>{user.responderRelation}</span></Text>
              <Text strong>Primary Caregiver Name: <span className='pwd-values'>{user.primaryCareGiverName}</span></Text>
              <Text strong>Home Care Attender: <span className='pwd-values'>{user.homeCareAttender}</span></Text>
              <Text strong>Selected Language: <span className='pwd-values'>{user.selectedLanguage}</span></Text>
              <Text strong>Address: <span className='pwd-values'>{user.address}</span></Text>
            </Space>
          </Col>
        </Row>
      </div>
    );
  };

  return (
    <Card className="user-card" title="User Details">
      <Row gutter={[10, 10]}>
        <Col xs={24} sm={24} md={8} lg={6}>
          <Space direction="vertical" align="center" style={{ width: '100%' }}>
            <Title level={4} style={{ color: 'purple' }}>{currentUser.username}</Title>
          </Space>
        </Col>
        <Col xs={24} sm={24} md={16} lg={18}>
          <Divider className="contact-info-divider" orientation="left">Contact Information</Divider>
          <Space className="contact-info" direction="vertical" style={{ width: '100%' }}>
            <Text strong>Mobile Number: {currentUser.mobilenumber}</Text>
            <Text strong>Email: {currentUser.email}</Text>
          </Space>
        </Col>
      </Row>
      {hasProfileDetails ? renderPWDProfileDetails() : (
        <div>
          <Divider className="pwd-profile-divider" />
          <Button type="primary" className="add-pwd-details-button" onClick={() => navigate('/layout/profile/editProfile')}>
            Add PWD Details
          </Button>
        </div>
      )}
    </Card>
  );
};

export default ProfileDetails;
