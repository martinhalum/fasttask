/**
 *
 * HomePageLayout
 *
 */

import React from 'react';
import {View} from 'react-native';

import CalendarHeader from '@organisms/CalendarHeader';

// import HomePageLayoutConfig from './config';

import HomePageLayoutStyles from './styles';
import type {PropsType} from './types';

function HomePageLayout({}: PropsType): React.ReactElement {
  return (
    <View style={HomePageLayoutStyles.container}>
      <CalendarHeader />
    </View>
  );
}

HomePageLayout.defaultProps = {};

export default HomePageLayout;
