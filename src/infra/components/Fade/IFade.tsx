export default interface IFade {
    right?: boolean;
    left?: boolean;
    top?: boolean;
    bottom?: boolean;
    duration?: number;
    children?: React.ReactNode;
    otherProps?: any;
}