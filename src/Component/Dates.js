import React, { useEffect, useState } from "react";



const CalendarPage = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const isCurrentDate = (year, month, day) => {
    const today = new Date();
    return (
      today.getFullYear() === year &&
      today.getMonth() === month &&
      today.getDate() === day
    );
  };


  

  const daysInWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [selectedDates, setSelectedDates] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [clickedDate, setClickedDate] = useState(null);

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendar = () => {
    // const today = new Date();
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    ).getDay();
    const totalCells = daysInMonth + firstDay;
    const rows = Math.ceil(totalCells / 7);
    const calendar = [];

    let dayCounter = 1;

    for (let i = 0; i < rows; i++) {
      const row = [];

      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          row.push("");
        } else if (dayCounter <= daysInMonth) {
          row.push(dayCounter++);
        }else {
          row.push(""); // Empty cell for dates from future months
        }
      }

      calendar.push(row);
    }

    return calendar;
  };



  const handleDateClick = (day) => {
    const today = new Date();
    const clickedDate = new Date
    (currentDate.getFullYear(),
     currentDate.getMonth(), day);
   
    // Check if the clicked date is today or a future date
    if (clickedDate >= today) {
        const dateString = `${clickedDate.toLocaleString('default', { month: 'long' })} ${clickedDate.getDate()}, ${clickedDate.getFullYear()}`;
        setClickedDate(dateString);
        if (selectedDates.includes(day)) {
          setSelectedDates(selectedDates.filter((date) => date !== day));
        } else {
          setSelectedDates([...selectedDates, day]);
        }
      }
    };
  const isPastDate = (currentDate, day) => {
    const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    return clickedDate < new Date();
  };



  const handleContinuousClick = () => {
    if (selectedDates.length === 2) {
      const [start, end] = selectedDates;
      const range = [];

      for (let i = start + 1; i < end; i++) {
        range.push(i);
      }

      setSelectedDates([...selectedDates, ...range]);
    }
  };

  const handlePrevMonth = () => {
    const today = new Date();
  if (  currentDate.getFullYear() > today.getFullYear() ||
  (currentDate.getFullYear() === today.getFullYear() &&
    currentDate.getMonth() > today.getMonth())
) 
{   
   const prevMonthDate = new Date(currentDate);
   prevMonthDate.setMonth(prevMonthDate.getMonth() - 1);
   setCurrentDate(prevMonthDate);

  }

 };

  const handleNextMonth = () => {
    const nextMonthDate = new Date(currentDate);
    nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
    setCurrentDate(nextMonthDate);
  };

  const calendar = generateCalendar();

   
  useEffect(() => {
    console.log("Selected Dates:", selectedDates);
  }, [selectedDates]);



  
  return (
    <>
    <div className="App-Calendar">
      <div className="calendar">
        <div className="calendar-header2">
          <button onClick={handlePrevMonth}>&lt;</button>
          <h2>
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <button onClick={handleNextMonth}>&gt;</button>
        </div>
        <div className="calendar-days">
          {daysInWeek.map((day) => (
            <div key={day} className="calendar-day2">
              {day}
            </div>
          ))}
        </div>
        <div className="calendar-grid2">
          {calendar.map((row, rowIndex) => (
            <div key={rowIndex} className="calendar-row">
              {row.map((day, index) => (
                <div
                  key={index}
                  className={`calendar-cell ${
                    day ? "calendar-date" : "calendar-empty"
                  } ${selectedDates.includes(day) ? "selected" : ""}
                  ${
                    isCurrentDate(currentDate.getFullYear(), 
                    currentDate.getMonth(), day)
                      ? "active-date"
                      : ""
                  }
                 
                  ${
                    day && isPastDate(currentDate, day) ? "past-date" : "" 
                  }
                  `}
                  onClick={() => {
                    if (day) handleDateClick(day);
                  }}
                >
                  {day}
                </div>
              ))}
            </div>
          ))}
          
         
        </div>
        <button style={{width:'150px', color:'blue'}} onClick={handleContinuousClick}>Add Dates</button>
        {selectedDates.length > 0 && (
          <div className="selected-dates">
            <h3>Selected Dates:</h3>
            <ul>
              {selectedDates.map((day) => (
                <li key={day}>
                  {`${monthNames[currentDate.getMonth()]} ${day}, ${currentDate.getFullYear()}`}
                </li>
              ))}
            </ul>
          </div>
          )}
      </div>
    </div>
    </>
  );
};

export default CalendarPage;