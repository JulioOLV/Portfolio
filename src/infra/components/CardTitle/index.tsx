import { CardTitle as ReactstrapCardTitle } from 'reactstrap';
import ICardTitle from './ICardTitle';

const CardTitle = ({ tag, className, ...otherProps }: ICardTitle) => {
  return (
    <ReactstrapCardTitle tag={tag} className={className} {...otherProps}>
      {otherProps.children}
    </ReactstrapCardTitle>
  );
};

export default CardTitle;
