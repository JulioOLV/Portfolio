export default interface IUncontrolledCollapse {
  toggler: string;
  navbar?: boolean;
  className?: string;
  onExiting?: () => void;
  onExited?: () => void;
  children: React.ReactNode;
  otherProps?: any;
}
