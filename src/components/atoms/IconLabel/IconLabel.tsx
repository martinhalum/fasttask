/**
 *
 * IconLabel
 *
 */

import React from 'react';
import {Appearance, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import IconLabelStyles from './styles';
import type {PropsType} from './types';

function IconLabel(props: PropsType): React.ReactElement {
  const {showIcon, subtitle, whiteFont, pillColor} = props;
  const isDark = Appearance.getColorScheme() === 'dark';

  return (
    <View style={IconLabelStyles.wrapper}>
      {showIcon && (
        <Icon
          name="calendar"
          size={12}
          color={whiteFont && isDark ? 'white' : 'black'}
        />
      )}
      <Text
        style={[
          whiteFont ? IconLabelStyles.nonPrioSub : IconLabelStyles.subtitle,
          {backgroundColor: pillColor},
        ]}>
        {subtitle}
      </Text>
    </View>
  );
}

IconLabel.defaultProps = {
  showIcon: true,
  subtitle: '',
};

export default IconLabel;
