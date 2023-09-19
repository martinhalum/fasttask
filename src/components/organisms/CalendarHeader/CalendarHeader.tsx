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
  monthTitle,
  weekData,
  currentDate,
}: PropsType): React.ReactElement {
  return (
    <View style={CalendarHeaderStyles.Container}>
      <Text style={CalendarHeaderStyles.HeadingLabel}>{monthTitle}</Text>
      <View style={CalendarHeaderStyles.ItemContainer}>
        {weekData.map((value, index) => {
          const {dayLabel, dateLabel} = value;

          return (
            <CalendarItem
              key={index.toString()}
              dayLabel={dayLabel}
              dateLabel={dateLabel}
              isCurrent={dateLabel === currentDate}
            />
          );
        })}
      </View>
    </View>
  );
}

CalendarHeader.defaultProps = {
  monthTitle: DEFAULT_MONTH,
  weekData: DEFAULT_WEEK,
  currentDate: DEFAULT_DATE,
};

export default CalendarHeader;
