import React, { useState } from "react";
import styles from "./calender.module.css"; 
import calender from "../../assets/icons/calender.png"; 

const Calendar = ({ onApply, onCancel }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [showYearSelect, setShowYearSelect] = useState(false);
  const [isEditingYear, setIsEditingYear] = useState(false);

  const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getStartDay = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const generateCalendar = () => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const daysInMonth = getDaysInMonth(month, year);
    const startDay = (getStartDay(month, year) + 6) % 7; 
    const days = [];
    const today = new Date(); // Add this line to get current date

    // Add previous month's trailing days
    const prevMonthDays = getDaysInMonth(month - 1, year);
    for (let i = startDay - 1; i >= 0; i--) {
      days.push({
        day: prevMonthDays - i,
        currentMonth: false,
      });
    }

    // Add current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        currentMonth: true,
        isToday:
          i === today.getDate() &&
          month === today.getMonth() &&
          year === today.getFullYear(),
      });
    }

    // Add next month's leading days
    const totalDays = days.length;
    const remainingDays = 42 - totalDays; // 6 rows * 7 columns
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        currentMonth: false,
      });
    }

    return days;
  };

  const handlePrevMonth = () => {
    const prevMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    );
    setCurrentDate(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );
    setCurrentDate(nextMonth);
  };

  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  const handleYearClick = () => {
    setShowYearSelect(!showYearSelect);
  };

  const handleYearSelect = (year) => {
    setCurrentDate(new Date(year, currentDate.getMonth(), 1));
    setShowYearSelect(false);
  };

  const handleDateSelect = (date) => {
    if (date.currentMonth) {
      setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), date.day));
    }
  };

  const handleYearEdit = (e) => {
    const year = parseInt(e.target.value);
    if (!isNaN(year) && year >= 1900 && year <= new Date().getFullYear()) {
      setCurrentDate(new Date(year, currentDate.getMonth(), 1));
    }
  };

  const handleApply = () => {
    if (selectedDate) {
      onApply(selectedDate);
    }
  };

  const days = generateCalendar();

  return (
    <div className={styles.datepicker}>
      <div className={styles.datepickerTop}>
        <div className={styles.monthSelector}>
          <button className={styles.arrow} onClick={handlePrevMonth}>
            <i className="material-icons">
              <img src={calender} alt="" className={styles.rotateIcon} />
            </i>
          </button>
          <span className={styles.monthName}>
            {currentDate.toLocaleString("default", { month: "long" })}{" "}
            {isEditingYear ? (
              <input
                type="number"
                className={styles.yearInput}
                value={currentDate.getFullYear()}
                onChange={handleYearEdit}
                onBlur={() => setIsEditingYear(false)}
                autoFocus
                min="1900"
                max={new Date().getFullYear()}
              />
            ) : (
              <span 
                className={styles.yearText}
                onClick={() => setIsEditingYear(true)}
              >
                {currentDate.getFullYear()}
              </span>
            )}
          </span>
          <button className={styles.arrow} onClick={handleNextMonth}>
            <i className="material-icons"><img src={calender} alt="" /></i>
          </button>
        </div>
        {showYearSelect && (
          <div className={styles.yearSelector}>
            {years.map(year => (
              <div
                key={year}
                className={styles.yearOption}
                onClick={() => handleYearSelect(year)}
              >
                {year}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={styles.datepickerCalendar}>
        {daysOfWeek.map((day) => (
          <span className={styles.day} key={day}>
            {day}
          </span>
        ))}
        {days.map((date, index) => (
          <button
            key={index}
            className={`${styles.date} 
              ${!date.currentMonth ? styles.faded : ''} 
              ${date.isToday ? styles.currentDay : ''}
              ${selectedDate && date.currentMonth && 
                date.day === selectedDate.getDate() && 
                currentDate.getMonth() === selectedDate.getMonth() && 
                currentDate.getFullYear() === selectedDate.getFullYear() 
                ? styles.selectedDate : ''}`}
            onClick={() => handleDateSelect(date)}
          >
            {date.day}
          </button>
        ))}
      </div>
      <div className={styles.buttons}>
        <button className={styles.cancel} onClick={onCancel}>Cancel</button>
        <button className={styles.Apply} onClick={handleApply}>Apply</button>
      </div>
    </div>
  );
};

export default Calendar;
