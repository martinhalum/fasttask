/**
 *
 * CardGroup
 *
 */

import React from 'react';
import {Text, View} from 'react-native';

import CardDetails from '@molecules/CardDetails';

import {DEFAULT_CARDS} from './config';

import CardGroupStyles from './styles';
import type {PropsType} from './types';

function CardGroup({cardData}: PropsType): React.ReactElement {
  return (
    <View>
      {cardData.map((value, index) => {
        return (
          <View key={index.toString()} style={CardGroupStyles.wrapper}>
            <CardDetails todoData={value} />
          </View>
        );
      })}
      {cardData.length === 0 && (
        <View style={CardGroupStyles.emptyContainer}>
          <Text style={CardGroupStyles.emptyLabel}>No Tasks Yet</Text>
        </View>
      )}
    </View>
  );
}

CardGroup.defaultProps = {
  cardData: DEFAULT_CARDS,
};

export default CardGroup;
