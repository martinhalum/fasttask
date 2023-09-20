import React, {useContext, useState} from 'react';
import AppContext from 'contexts/AppContext';
import {SubtaskType, TodoType} from '@organisms/CardGroup/types';
import {create} from 'zustand';
import {AppContextType} from './types';

const useAppStore = create<AppContextType>()(set => ({
  todoTasks: [],
  addTasks: (data?: TodoType) => {
    set(state => {
      const newTodoData = state.todoTasks;

      if (data !== undefined) {
        newTodoData.push({
          ...data,
        });
      }

      return {todoTasks: newTodoData};
    });
  },
  addSubTasks: (details?: TodoType, data?: string) => {
    const newSubTask = details?.subtask === undefined ? [] : details.subtask;

    if (data !== undefined && details !== undefined) {
      newSubTask.push({
        id: newSubTask.length,
        title: data,
        done: false,
      });

      details.subtask = newSubTask;
    }

    set(state => {
      state.todoTasks.forEach((value, index) => {
        const {id} = value;

        if (details?.id === id) {
          state.todoTasks[index] = details;
        }
      });

      return {todoTasks: state.todoTasks};
    });
  },
  updateTasks: (data?: TodoType) => {
    set(state => {
      const newTasks = [...state.todoTasks];
      if (data !== undefined) {
        data.prio = 'Done';

        newTasks.forEach((value, index) => {
          if (value.id === data.id) {
            newTasks[index] = data;
          }
        });
      }
      return {todoTasks: newTasks};
    });
  },
  updateSubTasks: (
    details?: TodoType,
    subtasks?: SubtaskType[],
    data?: SubtaskType,
  ) => {
    if (subtasks !== undefined && data !== undefined && details !== undefined) {
      data.done = true;

      subtasks.forEach((value, index) => {
        if (data.id === value.id) {
          subtasks[index] = data;
        }
      });

      details.subtask = subtasks;
    }

    set(state => {
      state.todoTasks.forEach((value, index) => {
        const {id} = value;

        if (details?.id === id) {
          state.todoTasks[index] = details;
        }
      });

      return {todoTasks: state.todoTasks};
    });
  },
}));

export default useAppStore;
