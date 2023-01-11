import { CardSubtitle as ReactstrapCardSubtitle } from 'reactstrap'
import ICardSubtitle from './ICardSubtitle'

const CardSubtitle = ({ tag, className, ...otherProps } : ICardSubtitle) => {
    return (
        <ReactstrapCardSubtitle
            tag={tag}
            className={className}
            {...otherProps}
        >
            {otherProps.children}
        </ReactstrapCardSubtitle>
    )
}

export default CardSubtitle