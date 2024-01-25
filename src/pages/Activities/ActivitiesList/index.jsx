import React, { useState } from 'react';
import { List, Card } from 'antd';
import { activitiesList } from '../../../utils/activities';
import './style.scss';
import { Outlet, useNavigate } from 'react-router';

const ActivitiesList = () => {
  const [activities, setActivities] = useState(activitiesList);
  const currentDate = new Date();
  const navigate = useNavigate();

  const getMonthName = (monthNumber) => {
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ];
    return months[monthNumber - 1];
  };

  const tasksHeader = (date) => {
    const [year, month, day] = date.split('-');
    const activityDate = new Date(date);

    if (activityDate.toDateString() === currentDate.toDateString()) {
      return 'Today';
    } else if (activityDate > currentDate) {
      return 'Upcoming';
    } else if (activityDate < currentDate) {
      return 'Passed';
    } else {
      return `${day} ${getMonthName(Number(month))} ${year}`;
    }
  };

  const groupedActivities = activities.reduce((acc, activity) => {
    acc[activity.date] = acc[activity.date] || [];
    acc[activity.date].push(activity);
    return acc;
  }, {});

  const handleActivity = (id,data) => {
    navigate(`/layout/activities/activity/${id}`,{state: data});
  };

  return (
    <div>
      <div>
        <h4 style={{ fontSize: '16px', marginBottom: '10px' }}>To Do List</h4>
      </div>
      {Object.entries(groupedActivities).map(([date, tasks]) => {
        const [year, month, day] = date.split('-');
        return (
          <div key={date} style={{ marginBottom: '16px' }}>
            <h2 style={{ fontSize: '14px', marginBottom: '8px' }}>
              {tasksHeader(date)}
            </h2>
            <List
              style={{ padding: 0 }}
              grid={{ gutter: 5, column: 1 }}
              dataSource={tasks}
              renderItem={(task) => (
                <List.Item style={{ padding: 0 }}>
                  <Card bordered={false} className="custom-card" onClick={() => handleActivity(task.id,task)}>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '20px', alignItems: 'center' }}>
                      <div className="date-container">
                        <span>{day}</span>
                        <span>{getMonthName(Number(month))}</span>
                      </div>
                      <div style={{ fontWeight: '600' }}>{task.title}</div>
                    </div>
                  </Card>
                </List.Item>
              )}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ActivitiesList;
