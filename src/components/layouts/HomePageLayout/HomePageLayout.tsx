/**
 *
 * HomePageLayout
 *
 */

import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';

import CalendarHeader from '@organisms/CalendarHeader';
import CardGroup from '@organisms/CardGroup';
import Footer from '@organisms/Footer';

import useDateStore from '@providers/DateProvider';

import HomePageLayoutStyles from './styles';
import type {PropsType} from './types';
import useAppStore from 'providers/AppProvider/AppProvider';

function HomePageLayout({onPressAdd}: PropsType): React.ReactElement {
  const {currentMonth, currentDate, currentWeek, initDone, initDate} =
    useDateStore();
  const {todoTasks} = useAppStore();

  useEffect(() => {
    if (!initDone) {
      initDate();
    }
  }, [initDone, initDate]);

  return (
    <View style={HomePageLayoutStyles.wrapper}>
      <ScrollView
        style={HomePageLayoutStyles.container}
        contentInset={HomePageLayoutStyles.spacer}
        showsVerticalScrollIndicator={false}>
        <CalendarHeader
          monthTitle={currentMonth}
          currentDate={currentDate}
          weekData={currentWeek}
        />
        {/* <CardGroup /> */}
        <CardGroup cardData={todoTasks} />
      </ScrollView>
      <Footer onPressAdd={onPressAdd} />
    </View>
  );
}

export default HomePageLayout;
