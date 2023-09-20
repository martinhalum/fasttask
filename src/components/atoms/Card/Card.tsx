/**
 *
 * Card
 *
 */

import React from 'react';
import {TouchableOpacity} from 'react-native';

import CardStyles from './styles';

import type {PropsType} from './types';

function Card({children, isPrio}: PropsType): React.ReactElement {
  return (
    <TouchableOpacity
      style={isPrio ? CardStyles.prioContainer : CardStyles.nonPrioContainer}>
      {children}
    </TouchableOpacity>
  );
}

Card.defaultProps = {
  isPrio: true,
};

export default Card;
