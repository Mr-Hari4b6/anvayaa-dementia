import React, { useState, useEffect } from 'react';
import { Card, Input, Row, Col, Tooltip, message } from 'antd';
import './style.scss';
import calender from '../../assets/calender.png';
import bellring from '../../assets/bellring.png';
import runaway from '../../assets/runaway.png';
import plus from '../../assets/plus.png';


const { Search } = Input;
const SearchActivities = () => {
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [dementiaActivities, setDementiaActivities] = useState([]);

  useEffect(() => {
    const storedDementiaActivities = JSON.parse(localStorage.getItem('dementiaActivities')) || [];
    setDementiaActivities(storedDementiaActivities);
  }, []);

  const handleSearch = (value) => {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
      setFilteredTasks(dementiaActivities);
      return;
    }

    let filteredBySearch = dementiaActivities;

    if (trimmedValue) {
      filteredBySearch = dementiaActivities.filter((activity) =>
        activity.title.toLowerCase().includes(trimmedValue.toLowerCase())
      );
    }

    setFilteredTasks(filteredBySearch);
  };
  const handleSearchChange = (e) => {
    handleSearch(e.target.value);
  };
  const handleAddClick = (activity) => {
    try {
      const userDetails = JSON.parse(localStorage.getItem('userDetails')) || {};
      const currentUser = JSON.parse(localStorage.getItem('user')) || {};
 
      const foundUser = userDetails.find((user) => user.mobilenumber === currentUser.mobilenumber);
      if (foundUser) {
        if (!foundUser.activities) {
          foundUser.activities = [];
        }
        const activityExists = foundUser.activities && foundUser?.activities.find(
          (userActivity) => userActivity.activityID === activity.activityID
        );

        if (!activityExists || foundUser.activities === undefined) {
          foundUser.activities = [...foundUser.activities, activity];
          userDetails.user = foundUser;
          localStorage.setItem('userDetails', JSON.stringify(userDetails));
          message.success('Activity added successfully!');
        } else {
          message.error('Activity already exists for the user.');
        }
      } else {
        message.error('User not found in userDetails.');
      }
    } catch (error) {
      message.error('An error occurred while handling the click:', error.message);
    }
  };
  

  return (
    <div>
      <Row justify="space-between" align="center">
        <Col xs={24} sm={12} md={8} lg={6}>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <span style={{ fontWeight: 'bold' }}>Search Activity:</span>
          <Search placeholder="Search" onChange={handleSearchChange} className="search-bar" />
        </Col>
      </Row>

      {filteredTasks.length === 0 && (
        <Row gutter={[10, 16]} className="card-container">
          {dementiaActivities.map((activity, index) => (
            <Col key={index} xs={24} sm={12} md={6}>
              <Card className="card-content">
                <div className="header-details">
                  <img alt={activity.title} src={runaway} className="logos" />
                  <h4 className="activity-name">{activity.title}</h4>
                  <div className="activity-info">
                    <img alt={activity.title} src={bellring} className="bell-image" />
                  </div>
                </div>
                <div className="card-body">
                  <div className="date-info">
                    <img alt="datePicker" src={calender} className="date-picker-image" />
                    <span>{activity.date}</span>
                  </div>
                  <p>{activity.description}</p>
                  <p>Duration: {activity.duration}</p>
                </div>
                <Tooltip title="Add" placement="bottom">
                  <img
                    alt="Add"
                    src={plus}
                    width={30}
                    height={30}
                    className="add-icon"
                    style={{ position: 'absolute', bottom: '5px', right: '5px', cursor: 'pointer' }}
                    onClick={() => handleAddClick(activity)}
                  />
                </Tooltip>
              </Card>
            </Col>
          ))}
        </Row>
      )}
      {filteredTasks.length > 0 && (
        <Row gutter={[10, 16]} className="card-container">
          {filteredTasks.map((activity, index) => (
            <Col key={index} xs={24} sm={12} md={6}>
              <Card className="card-content">
                <div className="header-details">
                  <img alt={activity.title} src={runaway} className="logos" />
                  <h4 className="activity-name">{activity.title}</h4>
                  <div className="activity-info">
                    <img alt={activity.title} src={bellring} className="bell-image" />
                  </div>
                </div>
                <div className="card-body">
                  <div className="date-info">
                    <img alt="datePicker" src={calender} className="date-picker-image" />
                    <span>{activity.date}</span>
                  </div>
                  <p>{activity.description}</p>
                  <p>Duration: {activity.duration}</p>
                </div>
                <Tooltip title="Add" placement="bottom">
                  <img
                    alt="Add"
                    src={runaway}
                    width={20}
                    height={20}
                    className="add-icon"
                    style={{ position: 'absolute', bottom: '5px', right: '5px', cursor: 'pointer' }}
                    onClick={() => handleAddClick(activity)}
                  />
                </Tooltip>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default SearchActivities;
