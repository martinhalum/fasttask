/**
 *
 * HomePage
 *
 */

import React, {useState} from 'react';
import {Modal, SafeAreaView} from 'react-native';

import HomePageLayout from '@layouts/HomePageLayout';

import HomePageStyles from './styles';

import type {PropsType} from './types';
import TodoTaskModal from 'components/layouts/TodoTaskModal';
import useAppStore from 'providers/AppProvider/AppProvider';

function HomePage({}: PropsType): React.ReactElement {
  const {addTasks} = useAppStore();
  const [showModal, setShowModal] = useState(false);

  const saveTodoTaskHandler = data => {
    setShowModal(false);
    addTasks(data);
  };

  return (
    <SafeAreaView style={HomePageStyles.Container}>
      <HomePageLayout onPressAdd={() => setShowModal(true)} />
      <Modal animationType="slide" transparent={true} visible={showModal}>
        <TodoTaskModal
          leftButtonLabel="Cancel"
          leftButtonHandler={() => setShowModal(false)}
          label="New Task"
          rightButtonLabel="Done"
          rightButtonHandler={saveTodoTaskHandler}
        />
      </Modal>
    </SafeAreaView>
  );
}

HomePage.defaultProps = {};

export default HomePage;
