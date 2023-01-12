export default interface IButton {
  className?: string;
  color?: string;
  href?: string;
  children: React.ReactNode;
  rel?: string;
  target?: string;
  otherProps?: any;
}
