/**
 *
 * Card
 *
 */

import React from 'react';
import {TouchableOpacity} from 'react-native';

import CardStyles from './styles';

import type {PropsType} from './types';

function Card({onPress, isPrio, children}: PropsType): React.ReactElement {
  return (
    <TouchableOpacity
      style={isPrio ? CardStyles.prioContainer : CardStyles.nonPrioContainer}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}

Card.defaultProps = {
  isPrio: true,
};

export default Card;
