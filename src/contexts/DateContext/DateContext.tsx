import {createContext} from 'react';
import {
  DEFAULT_DATE,
  DEFAULT_MONTH,
  DEFAULT_WEEK,
} from '@organisms/CalendarHeader/config';

const initialState = {
  currentDate: DEFAULT_DATE,
  currentMonth: DEFAULT_MONTH,
  currentWeek: DEFAULT_WEEK,
  initDone: false,
  initDate: () => {},
};

const DateContext = createContext(initialState);

export default DateContext;
