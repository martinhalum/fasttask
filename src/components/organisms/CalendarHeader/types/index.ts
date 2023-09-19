/**
 *
 * CalendarHeader Types
 *
 */

export type WeekType = {
  dayLabel: String;
  dateLabel: String;
};

export type PropsType = {
  monthTitle: String;
  weekData: WeekType[];
  currentDate: String;
};
