import {createContext} from 'react';
import {AppContextType} from './types';

const initialState: AppContextType = {
  todoTasks: undefined,
  addTasks: () => {},
  addSubTasks: () => {},
  updateTasks: () => {},
  updateSubTasks: () => {},
};

const AppContext = createContext(initialState);

export default AppContext;
