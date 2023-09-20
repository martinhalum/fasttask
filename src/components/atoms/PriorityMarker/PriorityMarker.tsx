/**
 *
 * PriorityMarker
 *
 */

import React from 'react';
import {Text, View} from 'react-native';

import {DEFAULT_LABEL} from './config';

import PriorityMarkerStyles from './styles';
import type {PropsType} from './types';

function PriorityMarker({label, isPrio}: PropsType): React.ReactElement {
  return (
    <View
      style={
        isPrio
          ? PriorityMarkerStyles.prioWrapper
          : PriorityMarkerStyles.nonPrioWrapper
      }>
      <Text
        style={
          isPrio
            ? PriorityMarkerStyles.label
            : PriorityMarkerStyles.nonPrioLabel
        }>
        {label}
      </Text>
    </View>
  );
}

PriorityMarker.defaultProps = {
  label: DEFAULT_LABEL,
};

export default PriorityMarker;
