/**
 *
 * SubtaskModalLayout
 *
 */

import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';

import SubtaskModalLayoutStyles from './styles';
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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={SubtaskModalLayoutStyles.container}>
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
      <View style={SubtaskModalLayoutStyles.bodyContainer}>
        <Text style={SubtaskModalLayoutStyles.inputLabel}>Title</Text>
        <TextInput
          style={SubtaskModalLayoutStyles.inputStyle}
          onChangeText={text => setSubTaskTitle(text)}
          placeholder="Subtask Title"
          value={subtaskTitle}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

SubtaskModalLayout.defaultProps = {};

export default SubtaskModalLayout;
