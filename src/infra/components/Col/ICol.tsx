import { ColumnProps } from 'reactstrap/es/Col';

export default interface ICol {
  className?: string;
  xs?: ColumnProps;
  lg?: ColumnProps;
  children: React.ReactNode;
  otherProps?: any;
}
