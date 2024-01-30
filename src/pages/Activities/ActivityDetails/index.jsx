import React from "react";
import { Button, Card, Image, List, message } from "antd";
import { useLocation } from "react-router";
import './style.scss';

const ActivityDetails = () => {
  const activityDetails = useLocation();
  const handleSkip = () => {
    try {
      const userDetails = JSON.parse(localStorage.getItem('userDetails')) || [];
      const user = JSON.parse(localStorage.getItem('user')) || {};
      const foundUser = userDetails.find(u => u.mobilenumber === user.mobilenumber);

      if (foundUser) {
        foundUser.activities = foundUser.activities.map(activity => {
          if (activity.activityID === activityDetails.state.activityID) {
            activity.skipped = true;
          }
          return activity;
        });

        localStorage.setItem('userDetails', JSON.stringify(userDetails));
      }
    }
    catch (error) {
      console.error('Error while skipping activity:', error);
      message.error('Error occurred while skipping activity. Please try again.');
    }
  };

  const handleMarkAsCompleted = () => {
    try {
      const userDetails = JSON.parse(localStorage.getItem('userDetails')) || [];
      const user = JSON.parse(localStorage.getItem('user')) || {};
      const foundUser = userDetails.find(u => u.mobilenumber === user.mobilenumber);

      if (foundUser) {
        foundUser.activities = foundUser.activities.map(activity => {
          if (activity.activityID === activityDetails.state.activityID) {
            activity.completed = true;
          }
          return activity;
        });

        localStorage.setItem('userDetails', JSON.stringify(userDetails));
      }
    } catch (error) {
      console.error('Error while marking activity as completed:', error);
      message.error('Error occurred while marking activity as completed. Please try again.');
    }
  };

  return (
    <div>
      <h2>
        Activity Details</h2>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', padding: '5px' }}>
        <Button style={{ backgroundColor: 'yellow' }} onClick={handleSkip}>Skip</Button>
        <Image className="activity-image" src={activityDetails.state.mainImage} width={200} height={150} preview={false} />
        <Button style={{ backgroundColor: 'navy', color: 'white' }} onClick={handleMarkAsCompleted}>Mark as completed</Button>
      </div>
      <div>
        <Card className="activity-description" bordered>
          <h3>{activityDetails.state.title}</h3>
          <h5>{activityDetails.state.description}</h5>

        </Card>
      </div>
      <div style={{ marginTop: '20px' }}>
        <List
          style={{ padding: 0 }}
          grid={{ gutter: 5, column: 3 }}
          dataSource={activityDetails.state.steps}
          renderItem={(task, index) => (
            <List.Item style={{ padding: 0 }}>
              <Card bordered={false} className="steps-card">
                <div className="steps-card">
                  <div style={{}}>
                    <h5 style={{ color: '#a26fcb' }}>Step: {index + 1}</h5>
                    <p>{task}</p>
                  </div>
                  <div style={{ fontWeight: '600' }}>{task.title}</div>
                </div>
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  )
}

export default ActivityDetails;