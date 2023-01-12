import { NavLink as ReactstrapNavLink } from 'reactstrap';
import INavLink from './INavLink';

const NavLink = ({ rel, target, href, className, ...otherProps }: INavLink) => {
  return (
    <ReactstrapNavLink
      rel={rel}
      target={target}
      href={href}
      className={className}
      {...otherProps}
    >
      {otherProps.children}
    </ReactstrapNavLink>
  );
};

export default NavLink;
