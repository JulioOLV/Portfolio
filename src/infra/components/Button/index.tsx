import { Button as ReactstrapButton } from 'reactstrap';
import IButton from './IButton';

const Button = ({ className, color, href, ...otherProps }: IButton) => {
  return (
    <ReactstrapButton
      className={className}
      color={color}
      href={href}
      {...otherProps}
    >
      {otherProps.children}
    </ReactstrapButton>
  );
};

export default Button;
