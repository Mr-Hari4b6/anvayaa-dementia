import React from "react";
import { Button, Card, Image,List } from "antd";
import { useLocation } from "react-router";
import './style.scss';

const ActivityDetails = () => {
  const activityDetails = useLocation();
  console.log('activityDetails', activityDetails)
  return (
    <div>
      <h2>Activity Details</h2>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '5px' }}>
        <Button style={{ backgroundColor: 'yellow', fontWeight: 'bold' }}>Skip</Button>
        <Image src={activityDetails.state.mainImage} width={200} height={150} style={{ borderRadius: '50px', padding: '10px' }} />
        <Button style={{ backgroundColor:'#a26fcb', fontWeight: 'bold', color: 'white' }}>Mark as completed</Button>
      </div>
      <div>
        <Card bordered style={{ color: 'whitesmoke', border: '1px solid purple', borderRadius: '10px', padding: '10px', marginTop: '10px', backgroundColor: 'crimson' }}>
          <h3>{activityDetails.state.title}</h3>
          <h5>{activityDetails.state.description}</h5>

        </Card>
      </div>
      <div style={{marginTop:'20px'}}>
        <List
          style={{ padding: 0 }}
          grid={{ gutter: 5, column: 3 }}
          dataSource={activityDetails.state.steps}
          renderItem={(task,index) => (
            <List.Item style={{ padding: 0 }}>
              <Card bordered={false} className="steps-card">
                <div className="steps-card">
                  <div style={{}}>
                    <h5 style={{color:'#a26fcb'}}>Step: {index + 1}</h5>
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