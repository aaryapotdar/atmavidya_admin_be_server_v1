import React, { useState } from 'react';

const Weeks = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const dayofcalendar = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const [selectedWeek, setSelectedWeek] = useState(''); // State to manage selected week
  const [showCalendar,setCalendar1] = useState(false);
  const [date, setDate] = useState(new Date());

 // Helper function to check if two dates are the same
  const isSameDay = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };


  const toggleCalendar2 = () => {
    setCalendar2(!ShowCalendar2);
   };
 
 const toggleCalendar = () => {
    setCalendar1(!showCalendar);
   };
 
   const [ShowCalendar2,setCalendar2] = useState(false);
   const [Date2, setDate2] = useState(new Date());
   const differentDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
 
   const getDifferentDaysInMonth = (year, month) => {
     return new Date(year, month + 1, 0).getDate();
   };
 
   const getDifferentFirstDayOfMonth = (year, month) => {
     return new Date(year, month, 1).getDay();
   };
 
   const handleDifferentPrevMonth = () => {
     setDate2(new Date(Date2.getFullYear(), Date2.getMonth() - 1, 1));
   };
 
   const handleDifferentNextMonth = () => {
     setDate2(new Date(Date2.getFullYear(), Date2.getMonth() + 1, 1));
   };
 
 const handleSubmit = () => {
     // Here you can handle the submitted schedule data
     console.log('Selected Days  ', selectedDays);
   };
 
   const handleWeekChange = (event) => {
     setSelectedWeek(event.target.value); // Update the selected week
     // Perform actions based on the selected week if needed
   };
 
   const [selectedDays, setSelectedDays] = useState([]);
   const toggleDaySelection = (day) => {
     const isSelected = selectedDays.includes(day);
     if (isSelected) {
       setSelectedDays(selectedDays.filter((selected) => selected !== day));
     } else {
       setSelectedDays([...selectedDays, day]);
     }
   };
 

//start date (CAlENDAR 1)
    const [startDate, setstartDate] = useState(false); // State to control visibility of selected date
    const handlestartDate = () => {
        setstartDate(!startDate); // Toggle visibility of selected date
        setCalendar1(false); // Hide the calendar when Set button is clicked
    };
  const [selectedStartDate, setSelectedStartDate] = useState(null); // State to store selected start date
        const handleStartDateClick = (date) => {
        setSelectedStartDate(date); // Update the selected start date
    };

const renderCalendar1 = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    const calendar1Days = [];
    for (let i = 0; i < firstDay; i++) {
      calendar1Days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isSelected = selectedStartDate && isSameDay(selectedStartDate, date);
    
      calendar1Days.push(
        <div
        key={day}
        className={`calendar-day ${isSelected ? 'selected-start' : ''}`}
        onClick={() => handleStartDateClick(date)} // Update the selected start date on click
      >
        {day}
      </div>
         
      );
    }
    return calendar1Days;
  };
    
 //end date (CALENDAR 2)
      const [endDate, setendDate] = useState(false); // State to control visibility of selected date
      const handleEndtDate = () => {
        setendDate(!endDate); // Toggle visibility of selected date
        setCalendar2(false); // Hide the calendar when Set button is clicked
     };
   const [selectedEndDate, setSelectedEndtDate] = useState(null); // State to store selected start date
      const handleEndDateClick = (date) => {
      console.log("SELECT DATE MARK1: ", date);
      setSelectedEndtDate(date); // Update the selected start date
    };

const renderCalendar2 = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = getDifferentDaysInMonth (year, month);
    const firstDay = getDifferentFirstDayOfMonth(year, month);

    const calendar2Days = [];

    for (let i = 0; i < firstDay; i++) {
      calendar2Days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isSelected = selectedEndDate && isSameDay(selectedEndDate, date);

     calendar2Days.push(
        <div
        key={day}
        className={`calendar-day ${isSelected ? 'selected-start' : ''}`}
        onClick={() => handleEndDateClick(date)} // Update the selected end date on click
      >
        {day}
      </div>
         
      );
    }
  
    return calendar2Days;
  };
  
  
  return (
    <div className="page-container"> 
    <div className="schedule-component">
      <div className="dropdown-container">
        <label htmlFor="weekSelector">Select Week:</label>
        <select id="weekSelector" value={selectedWeek} onChange={handleWeekChange} style={{width:"300px", marginLeft:"10%"}}>
          <option value="Week 1">Week 1</option>
          <option value="Week 2">Week 2</option>
          <option value="Week 3">Week 3</option>
          <option value="Week 4">Week 4</option>
        </select>
      
       


   {/* START DATE */}
  <div className="custom-calendar">
      <div className="calendar-input" >
        <span className="calendar-symbol" onClick={toggleCalendar}>
            Start Date
            🗓️
            {startDate && (
          <div className="selected-dates-container">
          <p>{selectedStartDate ? selectedStartDate.toLocaleDateString() : 'Not selected'}</p>
          </div>
        )}  
          </span>
      </div>
      
      {showCalendar && (
        <div className="calendar-container">
        <div className="calendar-header">
          <button onClick={handlePrevMonth}>Previous</button>
          <h2>{date.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
          <button onClick={handleNextMonth}>Next</button>
        </div>
        <div className="calendar-grid">
          {dayofcalendar.map((day, index) => (
            <div key={index} className="calendar-day">
              {day}
            
            </div>
          ))}
          {renderCalendar1()}
          </div>
          <button onClick={handlestartDate} style={{width:"150px", marginLeft:"35%"}}>Set</button>
          </div>
        )}
  </div>    
       
          
    
  


    {/* END DATE */}
    <div className="different-calendar">
      <div className="different-calendar-input" >
          <span className="different-calendar-symbol" onClick={toggleCalendar2}>
              End Date
              🗓️
              {endDate  && (
            <div className="selected-dates-container">
            <p>{selectedEndDate ? selectedEndDate.toLocaleDateString() : 'Not selected'}</p>
          </div>
            )} 
          </span>   
       </div> 
      
       
      
      {ShowCalendar2  && (
         <div className="different-calendar-container">
         <div className="different-calendar-header">
            <button onClick={handleDifferentPrevMonth}>Previous</button>
            <h2>{Date2.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
            <button onClick={handleDifferentNextMonth}>Next</button>
          </div>
          <div className="different-calendar-grid">
            {differentDays.map((day, index) => (
              <div key={index} className="different-calendar-day">
                {day}
             
              </div>
            ))}
             {renderCalendar2()}
             </div>
             <button onClick={ handleEndtDate} style={{width:"150px", marginLeft:"35%"}}>Set</button>
             </div>
              )}
              </div>
        </div>
 
        <div className="schedule-columns">
          {days.map((day, index) => (
            <div
              key={index}
              className={`column ${selectedDays.includes(day) ? 'selected' : ''}`}
              onClick={() => toggleDaySelection(day)}
            >
              {day}
            </div>
          ))}
        </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  </div>
  );
};

export default Weeks
     





   