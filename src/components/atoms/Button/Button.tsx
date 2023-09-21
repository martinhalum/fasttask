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
  leftAlign,
  leftIcon,
  rightIcon,
  type,
  customColor,
  textColor,
  disabled,
  onPress,
}: PropsType): React.ReactElement {
  switch (type) {
    case 'outlined':
    case 'submit':
      return (
        <OutlinedButton
          label={label}
          leftAlign={leftAlign}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          type={type}
          onPress={onPress}
          customColor={customColor}
          textColor={textColor}
          disabled={disabled}
        />
      );
    default:
      return (
        <FilledButton
          label={label}
          leftAlign={leftAlign}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          type={type}
          onPress={onPress}
          customColor={customColor}
          textColor={textColor}
          disabled={disabled}
        />
      );
  }
}

export default Button;
