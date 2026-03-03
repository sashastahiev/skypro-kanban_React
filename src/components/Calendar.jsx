import React, { useState, useEffect } from 'react';

const Calendar = ({currentDateMonth}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const currentDate = currentDateMonth;
  const [calendarDays, setCalendarDays] = useState([]);
  const weekDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  // Генерация календаря
  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const startDayOfWeek = firstDayOfMonth.getDay();
    const adjustedStartDay = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1;

    const days = [];

    const prevMonthLastDays = new Date(year, month, 0).getDate();
    for (let i = adjustedStartDay - 1; i >= 0; i--) {
      days.push({
        day: prevMonthLastDays - i,
        isCurrentMonth: false,
        date: new Date(year, month - 1, prevMonthLastDays - i)
      });
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const dayOfWeek = date.getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6; 
      const isToday = date.toDateString() === new Date().toDateString();
      days.push({
        day,
        isCurrentMonth: true,
        isWeekend,
        isToday,
        date
      });
    }

    const remainingCells = 7 - (days.length % 7);
    if (remainingCells < 7) {
      for (let i = 1; i <= remainingCells; i++) {
        days.push({
          day: i,
          isCurrentMonth: false,
          date: new Date(year, month + 1, i)
        });
      }
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCalendarDays(days);
  }, [currentDate]);

  const handleDayClick = (dayData) => {
    if (!dayData.isCurrentMonth) return;

    setSelectedDate(dayData.date);
  };

  // Форматирование даты для отображения
  const formatDateForDisplay = (date) => {
    if (!date) return 'Не выбрана';

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);

    return `${day}.${month}.${year}`;
  };

  // Форматирование полной даты для скрытого поля
  const formatFullDate = (date) => {
    if (!date) return '';

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  };

  return (
    <div>
      <div className="calendar__content">
        <div className="calendar__days-names">
          {weekDays.map((day, index) => (
            <div
              key={index}
              className={`calendar__day-name${index >= 5 ? ' -weekend-' : ''}`}
            >
              {day}
            </div>
          ))}
        </div>

        <div className="calendar__cells">
          {calendarDays.map((dayData, index) => {
            const isActive = selectedDate &&
              dayData.date.toDateString() === selectedDate.toDateString();
            const classes = ['calendar__cell'];

            if (!dayData.isCurrentMonth) {
              classes.push('_other-month');
            } else {
              classes.push('_cell-day');
              if (dayData.isWeekend) classes.push('_weekend');
              if (dayData.isToday) classes.push('_current');
              if (isActive) classes.push('_active-day');
            }

            return (
              <div
                key={index}
                className={classes.join(' ')}
                onClick={() => handleDayClick(dayData)}
              >
                {dayData.day}
              </div>
            );
          })}
        </div>
      </div>

      <input
        type="hidden"
        id="datepick_value"
        value={formatFullDate(selectedDate)}
      />

      <div className="calendar__period">
        <p className="calendar__p date-end">
          Срок исполнения:{" "}
          <span className="date-control">
            {formatDateForDisplay(selectedDate)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Calendar;
