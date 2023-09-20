import {TodoType} from '@organisms/CardGroup/types';

export type PropsType = {
  headerShown?: boolean;
};

export type StackParamList = {
  HomePage: undefined;
  DetailPage: {
    data: TodoType;
  };
};
