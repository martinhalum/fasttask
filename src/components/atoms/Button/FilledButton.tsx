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
  leftAlign,
  leftIcon,
  rightIcon,
  type,
  customColor,
  textColor,
  disabled,
  onPress,
}: PropsType): React.ReactElement {
  const backgroundColor =
    leftIcon !== undefined ? MainTheme.colors.secondary : 'transparent';

  const containerStyle =
    type === 'primary'
      ? ButtonStyles.primaryContainer
      : ButtonStyles.secondaryContainer;
  return (
    <TouchableOpacity
      style={
        customColor === undefined
          ? containerStyle
          : {...containerStyle, backgroundColor: customColor}
      }
      onPress={onPress}
      disabled={disabled}>
      {!leftAlign && (
        <View
          style={[
            ButtonStyles.iconContainer,
            {backgroundColor: backgroundColor},
          ]}>
          {leftIcon && <Icon name={leftIcon} />}
        </View>
      )}
      <Text style={{color: textColor}}>{label}</Text>
      <View style={ButtonStyles.iconContainer}>
        {rightIcon && (
          <Icon name={rightIcon} size={15} style={{color: textColor}} />
        )}
      </View>
    </TouchableOpacity>
  );
}

FilledButton.defaultProps = {};

export default FilledButton;
