/**
 *
 * HomePageLayout
 *
 */

import React, {useEffect} from 'react';
import {View} from 'react-native';

import CalendarHeader from '@organisms/CalendarHeader';

import HomePageLayoutStyles from './styles';
import type {PropsType} from './types';
import {useDateContext} from '@providers/DateProvider/DateProvider';

function HomePageLayout({}: PropsType): React.ReactElement {
  const {currentMonth, currentDate, currentWeek, initDone, initDate} =
    useDateContext();

  useEffect(() => {
    if (!initDone) {
      initDate();
    }
  }, [initDone, initDate]);

  return (
    <View style={HomePageLayoutStyles.container}>
      <CalendarHeader
        monthTitle={currentMonth}
        currentDate={currentDate}
        weekData={currentWeek}
      />
    </View>
  );
}

HomePageLayout.defaultProps = {};

export default HomePageLayout;
