import { Head } from '../../infra/components'
import Greetings from '../../patterns/Greetings'
import Navigation from '../../patterns/Navigation'
import Proficiency from '../../patterns/Proficiency'
import Skills from '../../patterns/Skills'

const Home = () => {
    return (
        <>
            <Head />
            <Navigation />
            <Greetings />
            <Skills />
            <Proficiency />
        </>
    )
}

export default Home