import { CardText as ReactstrapCardText } from 'reactstrap';
import ICardText from './ICardText';

const CardText = ({ tag, className, ...otherProps }: ICardText) => {
  return (
    <ReactstrapCardText tag={tag} className={className} {...otherProps}>
      {otherProps.children}
    </ReactstrapCardText>
  );
};

export default CardText;
