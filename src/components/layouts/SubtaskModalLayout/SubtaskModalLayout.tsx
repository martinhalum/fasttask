/**
 *
 * SubtaskModalLayout
 *
 */

import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import SubtaskModalLayoutStyles from '@layouts/TodoTaskModal/styles';
import type {PropsType} from './types';

function SubtaskModalLayout({
  leftButtonLabel,
  leftButtonHandler,
  label,
  rightButtonLabel,
  rightButtonHandler,
}: PropsType): React.ReactElement {
  const [subtaskTitle, setSubTaskTitle] = useState('');

  const handleRightButton = () => {
    rightButtonHandler(subtaskTitle);
    setSubTaskTitle('');
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={'padding'}
        style={SubtaskModalLayoutStyles.subtaskContainer}>
        <View style={SubtaskModalLayoutStyles.headerWrapper}>
          <TouchableOpacity onPress={leftButtonHandler}>
            <Text style={SubtaskModalLayoutStyles.navButton}>
              {leftButtonLabel}
            </Text>
          </TouchableOpacity>
          <Text style={SubtaskModalLayoutStyles.headerLabel}>{label}</Text>
          <TouchableOpacity
            onPress={handleRightButton}
            disabled={subtaskTitle === ''}>
            <Text style={SubtaskModalLayoutStyles.navButton}>
              {rightButtonLabel}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={SubtaskModalLayoutStyles.subtaskBodyContainer}>
          <Text style={SubtaskModalLayoutStyles.inputLabel}>Title</Text>
          <TextInput
            style={SubtaskModalLayoutStyles.inputStyle}
            onChangeText={text => setSubTaskTitle(text)}
            placeholder="Subtask Title"
            value={subtaskTitle}
          />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

export default SubtaskModalLayout;
