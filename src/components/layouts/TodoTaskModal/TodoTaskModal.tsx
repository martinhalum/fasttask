/**
 *
 * TodoTaskModal
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

import Button from '@atoms/Button';
import PillBox from '@molecules/PillBox';

import {MainTheme} from 'theme';
import SubtaskModalLayoutStyles from './styles';

import type {PropsType} from './types';
import {DEFAULT_PRIORITY, PILLBOX_SELECTION} from './config';
import DatePicker from 'react-native-date-picker';
import {format} from 'date-fns';

function TodoTaskModal({
  leftButtonLabel,
  leftButtonHandler,
  label,
  rightButtonLabel,
  rightButtonHandler,
}: PropsType): React.ReactElement {
  const dateNow = new Date();
  const [open, setOpen] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dateDue, setDateDue] = useState('');
  const [priority, setPriority] = useState(DEFAULT_PRIORITY);

  const handleRightButton = () => {
    const data = {
      id: Math.random(),
      title: taskTitle,
      description: description,
      dateDue: dateDue,
      prio: priority.value,
    };
    rightButtonHandler(data);
    setTaskTitle('');
  };

  const handleSelectPriority = selectedItem => {
    setPriority(selectedItem);
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
          disabled={taskTitle === ''}>
          <Text style={SubtaskModalLayoutStyles.navButton}>
            {rightButtonLabel}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={SubtaskModalLayoutStyles.bodyContainer}>
        <View>
          <Text style={SubtaskModalLayoutStyles.inputLabel}>Title</Text>
          <TextInput
            style={SubtaskModalLayoutStyles.inputStyle}
            onChangeText={text => setTaskTitle(text)}
            placeholder="Enter Task Title"
            value={taskTitle}
          />
        </View>
        <View>
          <Text style={SubtaskModalLayoutStyles.inputLabel}>Description</Text>
          <TextInput
            style={SubtaskModalLayoutStyles.descriptionStyle}
            onChangeText={text => setDescription(text)}
            placeholder="Enter Task Title"
            value={description}
            multiline={true}
          />
        </View>
        <View>
          <Text style={SubtaskModalLayoutStyles.inputLabel}>Date Due</Text>
          <Button
            label={dateDue || 'Select Date'}
            rightIcon="calendar"
            customColor={MainTheme.colors.nonPrioCard}
            textColor={MainTheme.colors.dateLabel}
            onPress={() => setOpen(true)}
            leftAlign
          />
          <DatePicker
            modal
            open={open}
            mode="date"
            date={dateNow}
            onConfirm={date => {
              const due = format(date, 'MMMM dd');
              setOpen(false);
              setDateDue(due);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </View>
        <View>
          <Text style={SubtaskModalLayoutStyles.inputLabel}>Priority</Text>
          <PillBox
            selectedItem={priority}
            setSelectedItem={handleSelectPriority}
            data={PILLBOX_SELECTION}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

TodoTaskModal.defaultProps = {};

export default TodoTaskModal;
