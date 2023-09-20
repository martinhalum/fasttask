/**
 *
 * HomePage
 *
 */

import React, {useEffect, useState} from 'react';
import {Modal, SafeAreaView} from 'react-native';

import HomePageLayout from '@layouts/HomePageLayout';
import TodoTaskModal from '@layouts/TodoTaskModal';
import useAppStore from '@providers/AppProvider';

import HomePageStyles from './styles';

function HomePage(): React.ReactElement {
  const {addTasks, fetchStorage} = useAppStore();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchStorage();
  });

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

export default HomePage;
