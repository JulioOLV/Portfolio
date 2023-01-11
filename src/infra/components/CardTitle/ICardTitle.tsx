import { ElementType } from 'react'

export default interface ICardTitle {
    tag?: ElementType<any>;
    className: string;
    children: string;
    otherProps?: any;
}