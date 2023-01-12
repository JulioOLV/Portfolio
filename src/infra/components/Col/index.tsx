import { Col as ReactstrapCol } from 'reactstrap';
import ICol from './ICol';

const Col = ({ className, xs, ...otherProps }: ICol) => {
  return (
    <ReactstrapCol className={className} xs={xs} {...otherProps}>
      {otherProps.children}
    </ReactstrapCol>
  );
};

export default Col;
