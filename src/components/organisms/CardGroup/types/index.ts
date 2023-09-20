/**
 *
 * CardGroup Types
 *
 */

export type SubtaskType = {
  title: string;
  done: boolean;
};

export type TodoType = {
  title: string;
  description: string;
  dateDue: string;
  subtask?: SubtaskType[];
  prio: string;
};

export type PropsType = {
  cardData: TodoType[];
};
