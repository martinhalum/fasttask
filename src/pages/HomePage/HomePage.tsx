/**
 *
 * HomePage
 *
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import HomePageLayout from '@layouts/HomePageLayout';

import HomePageStyles from './styles';

import type {PropsType} from './types';

function HomePage({}: PropsType): React.ReactElement {
  return (
    <SafeAreaView style={HomePageStyles.Container}>
      <HomePageLayout />
    </SafeAreaView>
  );
}

HomePage.defaultProps = {};

export default HomePage;
