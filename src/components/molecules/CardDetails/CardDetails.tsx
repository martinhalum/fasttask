/**
 *
 * CardDetails
 *
 */

import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import Card from '@atoms/Card';
import TitleSubtitle from '@atoms/TitleSubtitle';
import PriorityMarker from '@atoms/PriorityMarker';
import {StackParamList} from '@navigation/stack/types';

import {SUBTITLE, TITLE} from './config';

import type {PropsType} from './types';

function CardDetails({todoData}: PropsType): React.ReactElement {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  const {title, dateDue, prio} = todoData;
  const isDone = prio === 'Done';

  const onPressHandler = () => {
    navigation.navigate('DetailPage', {data: todoData});
  };

  return (
    <Card isPrio={!isDone} onPress={onPressHandler}>
      <PriorityMarker label={prio} isPrio={!isDone} />
      <TitleSubtitle
        title={title}
        subtitle={dateDue}
        whiteFont={isDone}
        showIcon
      />
    </Card>
  );
}

CardDetails.defaultProps = {
  title: TITLE,
  subtitle: SUBTITLE,
};

export default CardDetails;
