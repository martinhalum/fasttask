/**
 *
 * Button Types
 *
 */

export type PropsType = {
  label: string;
  leftIcon?: string;
  rightIcon?: string;
  type?: 'primary' | 'secondary' | 'outlined' | 'submit';
  disabled?: boolean;
  onPress?: () => void;
};
