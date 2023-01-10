import { Head } from '../../infra/components'
import Greetings from '../../patterns/Greetings'
import Navigation from '../../patterns/Navigation'
import Proficiency from '../../patterns/Proficiency'
import Skills from '../../patterns/Skills'

const Home = ({ data }) => {
    return (
        <>
            <Head />
            <Navigation
                greetings={data.greetings}
                socialLinks={data.socialLinks}
            />
            <Greetings
                greetings={data.greetings}
                socialLinks={data.socialLinks}
            />
            <Skills skillsSection={data.skillsSection} />
            <Proficiency skillBars={data.skillBars} />
        </>
    )
}

export default Home