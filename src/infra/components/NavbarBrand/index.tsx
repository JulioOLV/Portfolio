import { NavbarBrand as ReactstrapNavbarBrand } from 'reactstrap';
import INavbarBrand from './INavbarBrand';

const NavbarBrand = ({ className, href, ...otherProps }: INavbarBrand) => {
  return (
    <ReactstrapNavbarBrand className={className} href={href} {...otherProps}>
      {otherProps.children}
    </ReactstrapNavbarBrand>
  );
};

export default NavbarBrand;
