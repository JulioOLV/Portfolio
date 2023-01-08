import Head from "../src/infra/components/Header";
import Navigation from "../src/patterns/Navigation";
import Greetings from "../src/patterns/Greetings";
import Skills from "../src/patterns/Skills";

const Home = () => {
    return (
        <>
            <Head />
            <Navigation />
            <Greetings />
            <Skills />
        </>
    )
}

export default Home