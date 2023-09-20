import React, {useContext, useState} from 'react';
import AppContext from 'contexts/AppContext';

const AppProvider = ({children}) => {
  const [todoTasks, setTodoTasks] = useState([]);
  const [subTasks, setSubTasks] = useState([]);

  const addTasks = () => {};
  const addSubTasks = () => {};
  const updateTasks = () => {};
  const updateSubTasks = () => {};

  return (
    <AppContext.Provider
      value={{
        todoTasks,
        addTasks,
        addSubTasks,
        updateTasks,
        updateSubTasks,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
