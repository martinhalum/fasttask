/**
 *
 * Button
 *
 */

import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import ButtonStyles from './styles';

import type {PropsType} from './types';

function OutlinedButton({
  label,
  type,
  onPress,
  disabled,
}: PropsType): React.ReactElement {
  return (
    <TouchableOpacity
      style={
        type === 'outlined'
          ? ButtonStyles.outlinedContainer
          : ButtonStyles.submitContainer
      }
      onPress={onPress}
      disabled={disabled}>
      <Text
        style={
          type === 'outlined'
            ? ButtonStyles.outlinedLabel
            : ButtonStyles.submitLabel
        }>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export default OutlinedButton;
