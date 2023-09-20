/**
 *
 * Button
 *
 */

import React from 'react';

import FilledButton from './FilledButton';

import type {PropsType} from './types';
import OutlinedButton from './OutlinedButton';

function Button({
  label,
  leftIcon,
  rightIcon,
  type,
  disabled,
  onPress,
}: PropsType): React.ReactElement {
  switch (type) {
    case 'primary':
      return (
        <FilledButton
          label={label}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          type={type}
          onPress={onPress}
          disabled={disabled}
        />
      );
    case 'outlined':
      return (
        <OutlinedButton
          label={label}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          type={type}
          onPress={onPress}
          disabled={disabled}
        />
      );
    case 'submit':
      return (
        <OutlinedButton
          label={label}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          type={type}
          onPress={onPress}
          disabled={disabled}
        />
      );
    default:
      return (
        <FilledButton
          label={label}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          type={type}
          onPress={onPress}
          disabled={disabled}
        />
      );
  }
}

Button.defaultProps = {};

export default Button;
