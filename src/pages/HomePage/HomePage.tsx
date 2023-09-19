/**
 *
 * HomePage
 *
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import HomePageLayout from '@layouts/HomePageLayout';

// import HomePageConfig from './config';

// import HomePageStyles from './styles';

import type {PropsType} from './types';

function HomePage({}: PropsType): React.ReactElement {
  return (
    <SafeAreaView>
      <HomePageLayout />
    </SafeAreaView>
  );
}

HomePage.defaultProps = {};

export default HomePage;
