/**
 *
 * CalendarHeader
 *
 */

import React from 'react';
import {Text, View} from 'react-native';

import CalendarItem from '@molecules/CalendarItem';

import {DEFAULT_DATE, DEFAULT_MONTH, DEFAULT_WEEK} from './config';

import CalendarHeaderStyles from './styles';

import type {PropsType} from './types';

function CalendarHeader({
  MonthTitle,
  WeekData,
  CurrentDate,
}: PropsType): React.ReactElement {
  return (
    <View style={CalendarHeaderStyles.Container}>
      <Text style={CalendarHeaderStyles.HeadingLabel}>{MonthTitle}</Text>
      <View style={CalendarHeaderStyles.ItemContainer}>
        {WeekData.map((value, index) => {
          const {DateLabel, DayLabel} = value;

          return (
            <CalendarItem
              key={index.toString()}
              dayLabel={DayLabel}
              dateLabel={DateLabel}
              isCurrent={DateLabel === CurrentDate}
            />
          );
        })}
      </View>
    </View>
  );
}

CalendarHeader.defaultProps = {
  MonthTitle: DEFAULT_MONTH,
  WeekData: DEFAULT_WEEK,
  CurrentDate: DEFAULT_DATE,
};

export default CalendarHeader;
