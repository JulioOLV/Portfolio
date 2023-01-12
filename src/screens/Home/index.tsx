import { Head } from '../../infra/components';
import Experience from '../../patterns/Experience';
import Greetings from '../../patterns/Greetings';
import Navigation from '../../patterns/Navigation';
import Proficiency from '../../patterns/Proficiency';
import Projects from '../../patterns/Projects';
import Skills from '../../patterns/Skills';

const Home = ({ data, githubData }) => {
  return (
    <>
      <Head />
      <Navigation greetings={data.greetings} socialLinks={data.socialLinks} />
      <Greetings greetings={data.greetings} socialLinks={data.socialLinks} />
      <Skills skillsSection={data.skillsSection} />
      <Proficiency skillBars={data.skillBars} />
      <Experience experience={data.experience} />
      <Projects githubData={githubData} />
    </>
  );
};

export default Home;
