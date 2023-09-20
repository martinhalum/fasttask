import {TodoType} from '@organisms/CardGroup/types';

export type AppContextType = {
  todoTasks: TodoType[] | undefined;
  addTasks: () => void;
  addSubTasks: () => void;
  updateTasks: () => void;
  updateSubTasks: () => void;
};
