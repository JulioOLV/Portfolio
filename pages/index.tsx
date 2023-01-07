import Head from "../src/infra/components/Header";
import Navigation from "../src/patterns/Navigation";
import Greetings from "../src/patterns/Greetings";

const Home = () => {
    return (
        <>
            <Head />
            <Navigation />
            <Greetings />
        </>
    )
}

export default Home