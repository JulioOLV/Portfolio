import { UncontrolledCollapse as ReactstrapUncontrolledCollapse } from 'reactstrap';
import IUncontrolledCollapse from './IUncontrolledCollapse';

const UncontrolledCollapse = ({
  toggler,
  navbar,
  className,
  onExiting,
  onExited,
  ...otherProps
}: IUncontrolledCollapse) => {
  return (
    <ReactstrapUncontrolledCollapse
      toggler={toggler}
      navbar={navbar}
      className={className}
      onExiting={onExiting}
      onExited={onExited}
      {...otherProps}
    >
      {otherProps.children}
    </ReactstrapUncontrolledCollapse>
  );
};

export default UncontrolledCollapse;
