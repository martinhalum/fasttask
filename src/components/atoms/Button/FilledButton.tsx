/**
 *
 * Button
 *
 */

import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import ButtonStyles from './styles';
import type {PropsType} from './types';
import {MainTheme} from 'theme';

function FilledButton({
  label,
  leftIcon,
  rightIcon,
  type,
  onPress,
}: PropsType): React.ReactElement {
  const backgroundColor =
    leftIcon !== undefined ? MainTheme.colors.secondary : 'transparent';
  return (
    <TouchableOpacity
      style={
        type === 'primary'
          ? ButtonStyles.primaryContainer
          : ButtonStyles.secondaryContainer
      }
      onPress={onPress}>
      <View
        style={[
          ButtonStyles.iconContainer,
          {backgroundColor: backgroundColor},
        ]}>
        {leftIcon && <Icon name={leftIcon} />}
      </View>
      <Text>{label}</Text>
      <View style={ButtonStyles.iconContainer}>
        {rightIcon && <Icon name={rightIcon} size={15} />}
      </View>
    </TouchableOpacity>
  );
}

FilledButton.defaultProps = {};

export default FilledButton;
