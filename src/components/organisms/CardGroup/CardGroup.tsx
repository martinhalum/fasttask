/**
 *
 * CardGroup
 *
 */

import React from 'react';
import {View} from 'react-native';

import CardDetails from '@molecules/CardDetails';

import {DEFAULT_CARDS} from './config';

import CardGroupStyles from './styles';
import type {PropsType} from './types';

function CardGroup({cardData}: PropsType): React.ReactElement {
  return (
    <View>
      {cardData.map((value, index) => {
        const {title, dateDue, prio} = value;
        return (
          <View key={index.toString()} style={CardGroupStyles.wrapper}>
            <CardDetails
              title={title}
              subtitle={dateDue}
              prio={prio}
              isPrio={prio === 'High'}
            />
          </View>
        );
      })}
    </View>
  );
}

CardGroup.defaultProps = {
  cardData: DEFAULT_CARDS,
};

export default CardGroup;
