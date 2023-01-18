import Navigation from '../../patterns/Navigation';
import Greetings from '../../patterns/Greetings';
import Skills from '../../patterns/Skills';
import Proficiency from '../../patterns/Proficiency';
import Experience from '../../patterns/Experience';
import Projects from '../../patterns/Projects';
import GithubProfileCard from '../../patterns/GithubProfileCard';
import IHome from './IHome';
import SEO from '../../components/SEO';

const Home = ({ data, githubRepoData, githubProfileData }: IHome) => {
  return (
    <>
      <SEO seoData={data.seoData} />
      <Navigation greetings={data.greetings} socialLinks={data.socialLinks} />
      <Greetings greetings={data.greetings} socialLinks={data.socialLinks} />
      <Skills skillsSection={data.skillsSection} />
      <Proficiency skillBars={data.skillBars} />
      <Experience experience={data.experience} />
      <Projects githubData={githubRepoData} />
      <GithubProfileCard profile={githubProfileData} />
    </>
  );
};

export default Home;
