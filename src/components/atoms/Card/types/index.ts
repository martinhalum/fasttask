/**
 *
 * Card Types
 *
 */

import {ReactNode} from 'react';

export type PropsType = {
  onPress?: () => void;
  isPrio?: Boolean;
  children: ReactNode;
};
