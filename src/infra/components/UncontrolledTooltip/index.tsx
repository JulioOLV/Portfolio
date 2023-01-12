import { UncontrolledTooltip as ReactstrapUncontrolledTooltip } from 'reactstrap';

const UncontrolledTooltip = ({ delay, placement, target, ...otherProps }) => {
  return (
    <ReactstrapUncontrolledTooltip
      delay={delay}
      placement={placement}
      target={target}
      {...otherProps}
    >
      {otherProps.children}
    </ReactstrapUncontrolledTooltip>
  );
};

export default UncontrolledTooltip;
