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
import useAppStore from '@providers/AppProvider';

import HomePageLayoutStyles from './styles';
import type {PropsType} from './types';

/**
 * Renders the layout for the home page of an application.
 *
 * @param onPressAdd - Function that handles the action when the add button in the footer is pressed.
 * @returns A React-Native element representing the layout of the home page.
 */
function HomePageLayout({
  onPressAdd,
  todoTasksData,
}: PropsType): React.ReactElement {
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
          testId="calendar-header"
          monthTitle={currentMonth}
          currentDate={currentDate}
          weekData={currentWeek}
        />
        <CardGroup cardData={todoTasksData || todoTasks} />
      </ScrollView>
      <Footer onPressAdd={onPressAdd} />
    </View>
  );
}

export default HomePageLayout;
