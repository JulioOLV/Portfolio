import { ElementType } from 'react';

export default interface ICardText {
  children: React.ReactNode;
  tag: ElementType<any>;
  className: string;
  otherProps?: any;
}
