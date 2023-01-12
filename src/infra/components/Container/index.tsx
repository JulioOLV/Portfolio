import { Container as ReactstrapContainer } from 'reactstrap';
import IContainer from './IContainer';

const Container = ({ ...otherProps }: IContainer) => {
  return (
    <ReactstrapContainer {...otherProps}>
      {otherProps.children}
    </ReactstrapContainer>
  );
};

export default Container;
