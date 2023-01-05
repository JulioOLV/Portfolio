import { ColumnProps } from 'reactstrap/es/Col';

export default interface ICol {
    className?: string;
    xs?: ColumnProps;
    children: any;
    otherProps?: any;
}