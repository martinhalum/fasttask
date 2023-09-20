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

import useAppStore from '@providers/AppProvider';
import {StackParamList} from '@navigation/stack/types';

import DetailPageLayoutStyles from './styles';

import type {PropsType} from './types';

function DetailPageLayout({
  details,
  setShowModal,
}: PropsType): React.ReactElement {
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  const {updateTasks} = useAppStore();

  const onPressDone = () => {
    updateTasks(details);
    navigation.goBack();
  };
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
            <ButtonGroup task={details} data={details.subtask} />
            <Button
              label="Add a subtask"
              type="outlined"
              onPress={setShowModal}
              disabled={
                details.subtask?.length === 3 || details.prio === 'Done'
              }
            />
          </View>
          <View style={DetailPageLayoutStyles.submitContainer}>
            {details.prio !== 'Done' && (
              <Button label="Done" type="submit" onPress={onPressDone} />
            )}
          </View>
        </ScrollView>
      </View>
    </>
  );
}

export default DetailPageLayout;
