/**
 *
 * DetailPage
 *
 */

import React, {useState} from 'react';
import {Modal, SafeAreaView} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';

import DetailPageLayout from '@layouts/DetailPageLayout';
import SubtaskModalLayout from '@layouts/SubtaskModalLayout';
import {StackParamList} from '@navigation/stack/types';

import DetailPageStyles from './styles';
import useAppStore from 'providers/AppProvider/AppProvider';

function DetailPage(): React.ReactElement {
  const [showModal, setShowModal] = useState(false);
  const route = useRoute<RouteProp<StackParamList>>();
  const {addSubTasks} = useAppStore();
  const details = route.params?.data;

  const showModalHandler = () => {
    setShowModal(true);
  };

  const saveSubtaskHandler = (data: any) => {
    addSubTasks(details, data);
    setShowModal(false);
  };

  return (
    <SafeAreaView style={DetailPageStyles.container}>
      <DetailPageLayout details={details} setShowModal={showModalHandler} />
      <Modal animationType="slide" transparent={true} visible={showModal}>
        <SubtaskModalLayout
          leftButtonLabel="Cancel"
          leftButtonHandler={() => setShowModal(false)}
          label="Add a subtask"
          rightButtonLabel="Done"
          rightButtonHandler={saveSubtaskHandler}
        />
      </Modal>
    </SafeAreaView>
  );
}

export default DetailPage;
