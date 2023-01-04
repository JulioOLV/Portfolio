import Head from "../src/infra/components/Header";
import Navigation from "../src/patterns/Navigation";

const Home = () => {
    return (
        <div>
            <Head />
            <Navigation />
            <h1>Home</h1>
        </div>
    )
}

export default Home