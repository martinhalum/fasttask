/**
 *
 * DetailPage
 *
 */

import React, {useState} from 'react';
import {Modal, SafeAreaView} from 'react-native';

import DetailPageLayout from '@layouts/DetailPageLayout';
import SubtaskModalLayout from '@layouts/SubtaskModalLayout';
import useAppStore from '@providers/AppProvider';

import DetailPageStyles from './styles';

function DetailPage(): React.ReactElement {
  const [showModal, setShowModal] = useState(false);
  const {addSubTasks, selectedItem} = useAppStore();

  const showModalHandler = () => {
    setShowModal(true);
  };

  const saveSubtaskHandler = (data: any) => {
    addSubTasks(selectedItem, data);
    setShowModal(false);
  };

  return (
    <SafeAreaView style={DetailPageStyles.container}>
      <DetailPageLayout
        details={selectedItem}
        setShowModal={showModalHandler}
      />

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
