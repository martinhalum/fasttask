/**
 *
 * CalendarHeader Types
 *
 */

export type WeekType = {
  DayLabel: String;
  DateLabel: String;
};

export type PropsType = {
  MonthTitle: String;
  WeekData: WeekType[];
  CurrentDate: String;
};
