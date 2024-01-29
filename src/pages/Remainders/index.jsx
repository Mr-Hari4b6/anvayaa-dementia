import React, { useState, useEffect } from 'react';
import { Card, Input, Row, Col, DatePicker,Image } from 'antd';
import './style.scss'; // Make sure to import or include your style file
import walk from '../../assets/walk.png';
import moment from 'moment';
import calender from '../../assets/calender.png';
import bellring from '../../assets/bellring.png';
import dinner from '../../assets/dinner.png';
import medicine from '../../assets/medicine.png';
import runaway from '../../assets/runaway.png';
import yogapose from '../../assets/yogapose.png';
import sleep from '../../assets/sleep.png';
import skipping from '../../assets/skipping.png';


const { Search } = Input;
const Remainders = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedDate, setSelectedDate] = useState(moment());

  useEffect(() => {
    // Fetch data from local storage on component mount
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const handleSearch = (value) => {
    // Filter tasks based on search value
    const filteredTasks = tasks.filter((task) =>
      task.toLowerCase().includes(value.toLowerCase())
    );
    setTasks(filteredTasks);
  };
  const cardImages = [
    walk,
    yogapose,
    medicine,
    runaway,
    dinner,
    dinner,
    skipping,
    dinner,
    sleep,
    
    // Add other images here for each card
  ];
  const cardNames = [
    'Go For Walk',
    'Do yoga',
    'Take Medicine',
    'Go For Running',
    'Take Break Fast',
    ' TakeLunch',
    'Do Walk',
    ' Take Dinner',
    ' Go For Sleep',  
  ];

 
const cardComponents = cardNames.map((name, index) => (
    <Col key={index} span={6}>
      {index < tasks.length ? (
        <Card className={`card-content card-${index + 1}`}>
              <div className="card-header">
            <h5 className="card-heading">{name}</h5>
            <p>Date: {selectedDate.format('DD-MM-YYYY')}</p>
            <p>Time: {getTaskTiming(index)}</p>
          </div>
        </Card>
      ) : (
        <Card className="card-content">
            <div>
            <img alt={name} src={cardImages[index]} className="image" />
            </div>
         <div>
       
       <img  alt={name} src={bellring} className="bell-image" />
       <img alt="datePicker" src={calender} className="date-picker-image"  />
       </div>
          <div className="empty-card">
            {name}
            <br/> 
            {/* {selectedDate.format('DD-MM-YYYY')} */}
          </div>
          <div className="Select-date">{selectedDate.format('DD-MM-YYYY ,   hh:mm')}</div>
        </Card>
      )}
    </Col>
  ));
  const getTaskTiming = (index) => {
    const baseHour = 8; // Set a base hour for demonstration purposes
    const hoursApart = 2; // Set the hours apart for demonstration purposes
    const startTime = moment(selectedDate)
      .set('hour', baseHour)
      .add(index * hoursApart, 'hours');
    const endTime = moment(startTime).add(hoursApart, 'hours');
    console.log("@@@@@",startTime)
    return `${startTime.format('HH:mm')} - ${endTime.format('HH:mm')}`;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date || moment());
  };
  return (
    <div>
      <Search
        placeholder="Search"
        onSearch={handleSearch}
        className="search-bar"
      />
 <DatePicker
  defaultValue={moment()}
  onChange={handleDateChange}
  className="customDatePicker"
  style={{ marginBottom: '4px' }}
 />
  {tasks.length === 0 && (
 <Row gutter={16} className="card-container">
  {cardComponents}
 </Row>
  )}
</div>
  );
};
export default Remainders;
