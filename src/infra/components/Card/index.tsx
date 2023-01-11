import { Card as ReactstrapCard } from 'reactstrap'
import ICard from './ICard'

const Card = ({ style, className, ...otherProps } : ICard) => {
    return (
        <ReactstrapCard
            style={style}
            className={className}
            {...otherProps}
        >
            {otherProps.children}
        </ReactstrapCard>
    )
}

export default Card