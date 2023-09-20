/**
 *
 * DetailPageLayout
 *
 */

import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import Button from '@atoms/Button';
import NavButtons from '@atoms/NavButtons';
import TitleSubtitle from '@atoms/TitleSubtitle';
import ButtonGroup from '@molecules/ButtonGroup';

import {DEFAULT_CARDS} from '@organisms/CardGroup/config';

import {StackParamList} from '@navigation/stack/types';

import DetailPageLayoutStyles from './styles';

import type {PropsType} from './types';

function DetailPageLayout({details}: PropsType): React.ReactElement {
  const navigation = useNavigation<NavigationProp<StackParamList>>();

  return (
    <>
      <View style={DetailPageLayoutStyles.headerContainer}>
        <NavButtons onLeftPress={() => navigation.goBack()} />
        <TitleSubtitle
          title={details.title}
          subtitle={details.dateDue}
          showIcon
          whiteFont={false}
        />
      </View>
      <View style={DetailPageLayoutStyles.bodyContainer}>
        <ScrollView
          contentContainerStyle={DetailPageLayoutStyles.bodyWrapper}
          contentInset={DetailPageLayoutStyles.spacer}
          showsVerticalScrollIndicator={false}>
          <View style={DetailPageLayoutStyles.descriptionWrapper}>
            <Text style={DetailPageLayoutStyles.descriptionLabel}>
              Description
            </Text>
            <Text style={DetailPageLayoutStyles.descriptionBody}>
              {details.description}
            </Text>
          </View>
          <View>
            <Text style={DetailPageLayoutStyles.subtaskLabel}>Subtasks</Text>
            <ButtonGroup data={details.subtask} />
          </View>
          <View style={DetailPageLayoutStyles.submitContainer}>
            <Button label="Done" type="submit" />
          </View>
        </ScrollView>
      </View>
    </>
  );
}

DetailPageLayout.defaultProps = {
  details: DEFAULT_CARDS[0],
};

export default DetailPageLayout;
