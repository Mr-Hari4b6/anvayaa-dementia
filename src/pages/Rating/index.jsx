import React, { useState } from 'react';
import { Radio, Space ,message} from 'antd';
import { Input } from 'antd';
import './style.scss';
import smile from '../../assets/smile.png';
import { Button } from 'antd';
import { useNavigate } from 'react-router';
const { TextArea } = Input;

const Feedback = () => {
  const [value, setValue] = useState(0);
  const [allowReply, setAllowReply] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleRadioChange = (e) => {
    setAllowReply(e.target.value === 4);
  };

  const handleButtonClick = () => {
    console.log('Submit button clicked');
    setTimeout(() => {
      setIsSubmitted(true);
      message.success('Your response is successful. Thanks for the feedback!');
      navigate('/layout/activities/activitiesList')
    }, 1000);
  }
  return (
    <div className="maincontainer">
    <div className="feedback-container">
      <div className="left-side">
      <img alt='Smile' src={smile} className="smile-image" />
          <div className="content">
            <h3 className="heading1" style={{ color: 'black',marginTop:'10px' }}>
            That's great ! 
            </h3>
          <h5 className="heading2" style={{ color: 'black',marginTop:'5px'  }}>Tell us what we got right.</h5>
          </div>
          <div className="Radio-Button">    
        <Radio.Group onChange={onChange} value={value}>
          <Space direction="vertical">
            <Radio value={1}>Can Do More</Radio>
            <div className="line" /> 
            <Radio value={2}>Can send You Notifications</Radio>
            <div className="line" /> 
            <Radio value={4}>Remind Me</Radio>
            <div className="line" />
            <Radio value={5}>Others</Radio>
            <div className="line" /> 
          </Space>
        </Radio.Group>
      </div>
      </div>
      <div className="middle-divider"></div>
      <div className="right-side">
        <div  className="text">
        <TextArea rows={6} className="textarea"  placeholder='Let Us Know More...' disabled={!allowReply} />
        <div  className="radio2">
        <Radio value={4}  onChange={handleRadioChange}> Allow Us to Reply</Radio>
        <br />
        </div>
        </div>
        <div className="custom-button">
      <Button
        type="primary"
        onClick={handleButtonClick}
        disabled={isSubmitted}
      >
        Submit
      </Button>
    </div>
       
      </div>
    </div>
    </div>
  );
};
export default Feedback;

