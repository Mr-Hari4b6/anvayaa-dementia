import React, { useState, useEffect } from 'react';
import { Card, Input, Row, Col, DatePicker } from 'antd';
import './style.scss';
import moment from 'moment';
import calender from '../../assets/calender.png';
import bellring from '../../assets/bellring.png';
import runaway from '../../assets/runaway.png';

const { Search } = Input;

const Remainders = () => {
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

  return (
    <div>
      <Row justify="space-between" align="center">
        <Col xs={24} sm={12} md={8} lg={6}>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <span style={{fontWeight:'bold'}}>Search Activity:</span>
          <Search placeholder="Search" onChange={handleSearchChange} className="search-bar" />
        </Col>
      </Row>

      {filteredTasks.length === 0 && (
        <Row gutter={[10, 16]} className="card-container">
          {dementiaActivities.map((activity, index) => (
            <Col key={index} xs={24} sm={12} md={6}>
              <Card className="card-content">
                <div className="header-details">
                  <img alt={activity.title} src={runaway} className="image" />
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
                  <img alt={activity.title} src={runaway} className="image" />
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
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Remainders;
