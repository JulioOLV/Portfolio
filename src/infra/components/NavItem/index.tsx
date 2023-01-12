import { NavItem as ReactstrapNavItem } from 'reactstrap';
import INavItem from './INavItem';

const NavItem = ({ ...otherProps }: INavItem) => {
  return (
    <ReactstrapNavItem {...otherProps}>{otherProps.children}</ReactstrapNavItem>
  );
};

export default NavItem;
