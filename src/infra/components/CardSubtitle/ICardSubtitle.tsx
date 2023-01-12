import { ElementType } from 'react';

export default interface ICardSubtitle {
  children: string;
  tag?: ElementType<any>;
  className?: string;
  otherProps?: any;
}
