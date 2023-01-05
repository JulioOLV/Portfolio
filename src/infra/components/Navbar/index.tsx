import {
    Navbar as ReactstrapNavbar,
} from 'reactstrap';
import INavbar from './INavbar';

const Navbar = ({ className, expand, id, ...otherProps } : INavbar) => {
    return (
        <ReactstrapNavbar
            className={className}
            expand={expand}
            id={id}
        >
            {otherProps.children}
        </ReactstrapNavbar>
    )
}

export default Navbar