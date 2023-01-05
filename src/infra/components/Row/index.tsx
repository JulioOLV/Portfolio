import {
    Row as ReactstrapRow,
} from 'reactstrap';
import IRow from './IRow';

const Row = ({ ...otherProps } : IRow) => {
    return (
        <ReactstrapRow
            {...otherProps}
        >
            {otherProps.children}
        </ReactstrapRow>
    )
}

export default Row