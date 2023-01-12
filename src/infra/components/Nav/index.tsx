import { Nav as ReactstrapNav } from 'reactstrap';
import INav from './INav';

const Nav = ({ className, navbar, ...otherProps }: INav) => {
  return (
    <ReactstrapNav className={className} navbar={navbar} {...otherProps}>
      {otherProps.children}
    </ReactstrapNav>
  );
};

export default Nav;
