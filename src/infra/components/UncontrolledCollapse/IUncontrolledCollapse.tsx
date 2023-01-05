export default interface IUncontrolledCollapse {
    toggler: string;
    navbar?: boolean;
    className?: string;
    onExiting?: () => void;
    onExited?: () => void;
    children: any;
    otherProps?: any;
}