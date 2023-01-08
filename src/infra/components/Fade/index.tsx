import { Fade as RevealFade } from 'react-reveal'
import IFade from './IFade'

const Fade = ({ right, left, top, bottom, duration, ...otherProps } : IFade) => {
    return (
        <RevealFade
            right={right}
            left={left}
            top={top}
            bottom={bottom}
            duration={duration}
            {...otherProps}
        >
            {otherProps.children}
        </RevealFade>
    )
}

export default Fade