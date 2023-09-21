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
import useAppStore from 'providers/AppProvider/AppProvider';
import {SubtaskType} from 'components/organisms/CardGroup/types';

function ButtonGroup({task, data}: PropsType): React.ReactElement {
  const {updateSubTasks} = useAppStore();

  const handleDone = (value: SubtaskType) => {
    updateSubTasks(task, data, value);
  };
  return (
    <>
      {data !== undefined &&
        data.map((value, index) => {
          const {title, done} = value;
          return (
            <View
              key={index.toString()}
              style={ButtonGroupStyles.buttonsContainer}>
              <Button
                label={title}
                leftIcon={done ? 'check' : undefined}
                type={done ? 'secondary' : 'primary'}
                textColor={done ? 'black' : 'white'}
                onPress={() => handleDone(value)}
                disabled={done}
              />
            </View>
          );
        })}
    </>
  );
}

export default ButtonGroup;
