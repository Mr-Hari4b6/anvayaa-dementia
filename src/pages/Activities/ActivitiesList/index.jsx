import React, { useState, useEffect } from 'react';
import { Card, Tooltip, Button } from 'antd';
import { CheckCircleOutlined, InfoCircleOutlined, EditOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import './style.scss';

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

  const renderTasks = (tasks) => {

    return (
      <div>
        {tasks.map((task) => {
          const [day, month] = task.date.split('-');
          return (
            <div key={task.date} style={{ marginBottom: '16px' }}>
              <Tooltip title={task.description}>
              <Card
                bordered={false}
                className="custom-card"
                style={{ backgroundColor: task.completed ? 'lightgreen' : (!task.completed && task.skipped) ? 'orange' : '' }}
                onClick={() => handleActivity(task.activityID, task)}
              >
                <div style={{ display: 'flex', justifyContent: 'flex-start', gap: 10, alignItems: 'center' }}>
                  <div className="date-container">
                    <span>{day}</span>
                    <span>{getMonthName(Number(month))}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', gap: 5, padding: '8px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>{task.title}</div>
                    <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                      {task.completed && <CheckCircleOutlined style={{ color: 'green' }} />}
                      {!task.completed && task.skipped && <InfoCircleOutlined style={{ color: 'purple' }} />}
                      {task.completed && <span style={{ color: 'green', fontWeight: 'bold' }}>Completed</span>}
                      {!task.completed && task.skipped && <span style={{ color: 'purple', fontWeight: 'bold' }}>Skipped</span>}
                    </div>
                  </div>
                </div>
              </Card>
              </Tooltip>
            </div>
          );
        })}
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
    <>
      <div style={{display:'flex', alignItems:'center',justifyContent:'space-between', marginBottom: '20px'}}>
        <h4 style={{ fontSize: '16px', }}>To Do List</h4>
        <Button type="text" style={{ float: 'right', fontWeight: 'bold',color:'purple' }}
          icon={<EditOutlined />}
          onClick={() => navigate('/layout/remainders')}
        >
          Add Activity
        </Button>
      </div>
      <div>
        <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>Today</h2>
        {renderTasks(todayTasks)}
      </div>
      <div>
        <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>Upcoming</h2>
        {renderTasks(upcomingTasks)}
      </div>
      <div>
        <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>Passed</h2>
        {renderTasks(passedTasks)}
      </div>
    </>
  );
};

export default ActivitiesList;
