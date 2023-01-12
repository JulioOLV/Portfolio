import { CardBody as ReactstrapCardBody } from 'reactstrap';
import ICardBody from './ICardBody';

const CardBody = ({ ...otherProps }: ICardBody) => {
  return (
    <ReactstrapCardBody {...otherProps}>
      {otherProps.children}
    </ReactstrapCardBody>
  );
};

export default CardBody;
