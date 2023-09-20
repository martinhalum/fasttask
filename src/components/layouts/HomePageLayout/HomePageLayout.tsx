/**
 *
 * HomePageLayout
 *
 */

import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';

import CalendarHeader from '@organisms/CalendarHeader';

import HomePageLayoutStyles from './styles';
import type {PropsType} from './types';
import {useDateContext} from '@providers/DateProvider/DateProvider';
import CardGroup from 'components/organisms/CardGroup';

function HomePageLayout({}: PropsType): React.ReactElement {
  const {currentMonth, currentDate, currentWeek, initDone, initDate} =
    useDateContext();

  useEffect(() => {
    if (!initDone) {
      initDate();
    }
  }, [initDone, initDate]);

  return (
    <ScrollView
      style={HomePageLayoutStyles.container}
      contentInset={HomePageLayoutStyles.spacer}
      showsVerticalScrollIndicator={false}>
      <CalendarHeader
        monthTitle={currentMonth}
        currentDate={currentDate}
        weekData={currentWeek}
      />
      <CardGroup />
    </ScrollView>
  );
}

HomePageLayout.defaultProps = {};

export default HomePageLayout;
