/**
 *
 * PillBox
 *
 */

import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import PillBoxStyles from './styles';
import type {PropsType} from './types';

function PillBox({
  selectedItem,
  data,
  setSelectedItem,
}: PropsType): React.ReactElement {
  return (
    <View style={PillBoxStyles.container}>
      {data.map(item => {
        const isSelected = selectedItem.value === item.value;
        return (
          <TouchableOpacity
            key={item.value}
            style={
              isSelected
                ? PillBoxStyles.activeButton
                : PillBoxStyles.inactiveButton
            }
            onPress={() => setSelectedItem(item)}>
            <Text
              style={
                isSelected
                  ? PillBoxStyles.activeLabel
                  : PillBoxStyles.inactiveLabel
              }>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default PillBox;
