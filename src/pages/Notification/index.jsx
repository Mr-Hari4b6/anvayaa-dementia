import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { notification, Card, Button } from 'antd';
import { RightCircleOutlined } from '@ant-design/icons'; // Import the chevron right icon
import bell from '../../assets/bell.png';
import './style.scss';
import walk from '../../assets/walk.png';
import yogapose from '../../assets/yogapose.png';
import runaway from '../../assets/runaway.png';

const Notification = () => {
  const [api, contextHolder] = notification.useNotification();
  const [currentIndex, setCurrentIndex] = useState(0);


  const navigate = useNavigate()
  const notificationData = [
    {
      image: walk,
      title: 'Go For a Walk',
      description: 'Take a leisurely walk in the park.',
      time: '1hour',
    },
    {
      image: runaway,
      title: 'Go For a Run',
      description: 'Put on your running shoes and hit the track.',
    },
    {
      image: yogapose,
      title: 'Yoga Meditation ',
      description: 'Time for a do yoga.',
    },

  ];

  const openNotification = () => {
    const descriptionClassName = 'custom-description';
    const currentData = notificationData[currentIndex];


    notificationData.forEach((currentData, index) => {
      notification.open({
        message: (
          <div className="custom-title-container" style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'flex-start', justifyContent: 'space-between', height: '20px' }}>
            <div>{currentData.title}</div>
            <img className="custom-image" alt={currentData.title} src={currentData.image} />
          </div>
        ),
        key: index.toString(), // Set a unique key for each notification
        description: (
          <div className={descriptionClassName}>
            <h5>{currentData.description}</h5>
          </div>
        ),
        duration: 0,

        btn: (
          <Button
            type="link"
            icon={<RightCircleOutlined />}
            style={{ display: 'flex', alignItems: 'center', marginTop: '-10px' }}
            onClick={() => {
              navigate('/layout/activities/activitiesList')
              console.log('Navigate to remainder screen');
            }}
          />
        ),
      });
    });

    // notification.open({
    //   message: (
    //     <div className="custom-title-container">
    //       {currentData.title}
    //       <img className="custom-image" alt={currentData.title} src={currentData.image} />

    //     </div>
    //   ),

    //   description: (
    //     <div className={descriptionClassName}>
    //       <p>{currentData.description}</p>
    //     </div>
    //   ),
    //   duration: 0,

    //   btn: (
    //     <Button
    //       type="link"
    //       icon={<RightCircleOutlined />}
    //       style={{ display: 'flex', alignItems: 'center', marginTop:'-10px' }}
    //       onClick={() => {
    //         navigate('/remainders/Remainders')
    //          console.log('Navigate to remainder screen');
    //       }}
    //     />
    //   ),
    // });
    setCurrentIndex((prevIndex) => (prevIndex + 1) % notificationData.length);
  };

  return (
    <>
      
      <div className="Notification">
        <img alt="bell" src={bell} onClick={openNotification} />
        {contextHolder}
      </div>
    </>
  );
};

export default Notification;
