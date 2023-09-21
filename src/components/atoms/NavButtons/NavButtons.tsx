/**
 *
 * NavButtons
 *
 */

import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity, View} from 'react-native';

import NavButtonsStyles from './styles';

import type {PropsType} from './types';

function NavButtons({
  onLeftPress,
  onRightPress,
}: PropsType): React.ReactElement {
  return (
    <View style={NavButtonsStyles.wrapper}>
      <TouchableOpacity onPress={onLeftPress}>
        <Icon name="chevron-left" size={18} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onRightPress}>
        <Icon name="edit" size={18} />
      </TouchableOpacity>
    </View>
  );
}

export default NavButtons;
