/**
 *
 * ButtonGroup
 *
 */

import React from 'react';
import {View} from 'react-native';

import Button from '@atoms/Button';

import ButtonGroupStyles from './styles';
import type {PropsType} from './types';

function ButtonGroup({data}: PropsType): React.ReactElement {
  return (
    <View>
      {data &&
        data.map((value, index) => {
          const {title, done} = value;
          return (
            <View
              key={index.toString()}
              style={ButtonGroupStyles.buttonsContainer}>
              <Button
                label={title}
                leftIcon={done ? 'check' : undefined}
                type={done ? 'primary' : 'secondary'}
              />
            </View>
          );
        })}
      <Button
        label="Add a subtask"
        type="outlined"
        disabled={data?.length === 3}
      />
    </View>
  );
}

ButtonGroup.defaultProps = {};

export default ButtonGroup;
