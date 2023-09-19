/**
 *
 * CalendarItem
 *
 */

import React from 'react';
import {Text, View} from 'react-native';

import CalendarItemStyles from './styles';

import type {PropsType} from './types';

function CalendarItem({
  dayLabel,
  dateLabel,
  isCurrent,
}: PropsType): React.ReactElement {
  return (
    <View
      style={
        isCurrent
          ? CalendarItemStyles.currentContainerStyle
          : CalendarItemStyles.containerStyle
      }>
      <Text
        style={
          isCurrent
            ? CalendarItemStyles.currentDayLabelStyle
            : CalendarItemStyles.dayLabelStyle
        }>
        {dayLabel}
      </Text>
      <Text
        style={
          isCurrent
            ? CalendarItemStyles.currentDateLabelStyle
            : CalendarItemStyles.dateLabelStyle
        }>
        {dateLabel}
      </Text>
    </View>
  );
}

CalendarItem.defaultProps = {};

export default CalendarItem;
