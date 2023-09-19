import React, {useContext, useState} from 'react';
import {format, getDate, startOfISOWeek} from 'date-fns';

import DateContext from '@contexts/DateContext';
import {WeekType} from '@organisms/CalendarHeader/types';

import {DAY_NAME, DEFAULT_WEEK} from './config';

const DateProvider = ({children}) => {
  const [currentDate, setCurrentDate] = useState('');
  const [currentMonth, setCurrentMonth] = useState('');
  const [currentWeek, setCurrentWeek] = useState(DEFAULT_WEEK);
  const [initDone, setInitDone] = useState(false);

  const initDate = () => {
    const nowDate = new Date();
    const date = getDate(nowDate);
    const monthName = format(nowDate, 'MMMM');
    const startOfWeek = startOfISOWeek(nowDate).getDate() - 1;
    const weekData: WeekType[] = [];

    for (let ctr = 0; ctr < 7; ctr++) {
      weekData.push({
        dayLabel: DAY_NAME[ctr],
        dateLabel: (startOfWeek + ctr).toString(),
      });
    }

    setCurrentDate(date.toString());
    setCurrentMonth(monthName);
    setCurrentWeek(weekData);
    setInitDone(true);
  };

  return (
    <DateContext.Provider
      value={{
        currentDate,
        currentMonth,
        currentWeek,
        initDone,
        initDate,
      }}>
      {children}
    </DateContext.Provider>
  );
};

export const useDateContext = () => {
  return useContext(DateContext);
};

export default DateProvider;
