import { Fade as RevealFade } from 'react-reveal'
import IFade from './IFade'

const Fade = ({ right, left, duration, ...otherProps } : IFade) => {
    return (
        <RevealFade
            right={right}
            left={left}
            duration={duration}
            {...otherProps}
        >
            {otherProps.children}
        </RevealFade>
    )
}

export default Fade