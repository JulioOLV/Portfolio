export default interface INavLink {
    rel?: string;
    className?: string;
    href?: string;
    target?: React.HTMLAttributeAnchorTarget;
    children: React.ReactNode;
    otherProps?: any;
}