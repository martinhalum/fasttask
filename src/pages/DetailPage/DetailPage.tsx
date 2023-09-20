/**
 *
 * DetailPage
 *
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';

import DetailPageLayout from '@layouts/DetailPageLayout';
import {StackParamList} from '@navigation/stack/types';

import DetailPageStyles from './styles';

function DetailPage(): React.ReactElement {
  const route = useRoute<RouteProp<StackParamList>>();
  const details = route.params?.data;

  return (
    <SafeAreaView style={DetailPageStyles.container}>
      <DetailPageLayout details={details} />
    </SafeAreaView>
  );
}

export default DetailPage;
