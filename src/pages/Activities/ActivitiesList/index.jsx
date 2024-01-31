import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Tooltip } from 'antd';
import { CheckCircleOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import './style.scss';
import profile from '../../../assets/profile.jpg';
import calender from '../../../assets/calender.png';

const ActivitiesList = () => {
  const [userActivities, setUserActivities] = useState([]);
  const currentDate = new Date();
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user')) || {};
    const userDetails = JSON.parse(localStorage.getItem('userDetails')) || [];

    const foundUser = userDetails.find(u => u.email === user.email || u.mobilenumber === user.mobilenumber);

    if (foundUser) {
      setUserActivities(foundUser.activities || []);
    }
  }, []);

  const getMonthName = (monthNumber) => {
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ];
    return months[monthNumber - 1];
  };

  const formatDateForParsing = (date) => {
    const [day, month, year] = date.split('-');
    return `${year}-${month}-${day}`;
  };

  const isSameDay = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  const isFutureDate = (date, currentDate) => {
    return date > currentDate;
  };

  const handleActivity = (id, data) => {
    navigate(`/layout/activities/activity/${id}`, { state: data });
  };

  const parseDate = (date) => {
    const [day, month, year] = date.split('-');
    return { day, month, year };
  };

  const renderTasks = (category, tasks) => {
    const columnCount = {
      xs: 1,
      sm: 2,
      lg: 3,
    };

    return (
      <div key={category} style={{ marginBottom: '16px' }}>
        <h2 style={{ fontSize: '14px', marginBottom: '8px' }}>{category}</h2>
        <Row gutter={8}>
          {tasks.map((task) => {
            const { day, month, year } = parseDate(task.date);

            return (
              <Col key={task.activityID} span={24 / columnCount.lg} xs={24} sm={24 / columnCount.sm} lg={24 / columnCount.lg} style={{ marginBottom: '10px' }}>
                <Card className="activity-card-content" style={{backgroundColor: task.completed ? 'lightgreen' : (!task.completed && task.skipped ) ? 'orange':''}} onClick={() => handleActivity(task.activityID, task)}>
                  <div className="activity-header-details">
                    <img alt={task.title} src={profile} className="activity-logo" />
                    <div>
                      <h4 className="activity-name">{task.title}</h4>
                      <div className="date-info">
                        <img alt="datePicker" src={calender} className="date-picker-image" />
                        <div className="card-date">
                          <span>{day}</span>
                          <span>{getMonthName(Number(month))}</span>
                          <span>{year}</span>
                        </div>
                      </div>
                      <p>Duration: {task.duration}</p>
                      {task.completed && <h4 style={{ color: 'green' }}><CheckCircleOutlined />Completed</h4>}
                      {!task.completed && task.skipped && <h4 style={{ color: 'purple' }}><InfoCircleOutlined />Skipped</h4>}
                    </div>
                  </div>
                  <div className="activity-card-body">
                    <p>{task.description}</p>
                  </div>
                </Card>
                {/* <Card bordered={false} className="custom-card" onClick={() => handleActivity(task.id, task)}>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '20px', alignItems: 'center' }}>
                      <div className="date-container">
                        <span>{day}</span>
                        <span>{getMonthName(Number(month))}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '90%', padding: '5px' }}>
                        <div style={{ fontWeight: '600' }}>{task.title}</div>
                        {task.completed && <h4 style={{ color: 'green', textAlign: 'center', marginRight: '10px' }}><CheckCircleOutlined />Completed</h4>}
                        {!task.completed && task.skipped && <h4 style={{ color: 'purple', textAlign: 'center', marginRight: '10px' }}><InfoCircleOutlined />Skipped</h4>}
                      </div>
                    </div>
                  </Card> */}
              </Col>
            );
          })}
        </Row>
      </div>
    );
  };

  const categorizeTasks = () => {
    const todayTasks = [];
    const upcomingTasks = [];
    const passedTasks = [];

    const sortedTasks = userActivities.sort((a, b) => {
      const dateA = new Date(formatDateForParsing(a.date));
      const dateB = new Date(formatDateForParsing(b.date));
      return dateA - dateB;
    });

    sortedTasks.forEach((activity) => {
      const formattedDate = formatDateForParsing(activity.date);
      const activityDate = new Date(formattedDate);

      if (isSameDay(activityDate, currentDate)) {
        todayTasks.push(activity);
      } else if (isFutureDate(activityDate, currentDate)) {
        upcomingTasks.push(activity);
      } else {
        passedTasks.push(activity);
      }
    });

    return { todayTasks, upcomingTasks, passedTasks };
  };

  const { todayTasks, upcomingTasks, passedTasks } = categorizeTasks();

  return (
    <div>
      <div>
        <h4 style={{ fontSize: '16px', marginBottom: '10px', color: '#1890ff' }}>To Do List</h4>
      </div>
      {renderTasks('Today', todayTasks)}
      {renderTasks('Upcoming', upcomingTasks)}
      {renderTasks('Passed', passedTasks)}
    </div>
  );
};

export default ActivitiesList;
