/**
 *
 * Custom AsyncStorage Functions
 *
 */

import AsyncStorage from '@react-native-async-storage/async-storage';

import {PERSISTENT_STORAGE_KEY} from './config';

export const setItem = (data: string) => {
  AsyncStorage.setItem(PERSISTENT_STORAGE_KEY, data);
};

export const getItem = async () => AsyncStorage.getItem(PERSISTENT_STORAGE_KEY);

export const clearStorage = () => {
  AsyncStorage.clear();
};
