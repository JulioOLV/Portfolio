import dynamic from 'next/dynamic';
import { Head } from '../../infra/components';
const Experience = dynamic(() => import('../../patterns/Experience'), {
  ssr: false,
});
const Greetings = dynamic(() => import('../../patterns/Greetings'), {
  ssr: false,
});
const Navigation = dynamic(() => import('../../patterns/Navigation'), {
  ssr: false,
});
const Proficiency = dynamic(() => import('../../patterns/Proficiency'), {
  ssr: false,
});
const Projects = dynamic(() => import('../../patterns/Projects'), {
  ssr: false,
});
const Skills = dynamic(() => import('../../patterns/Skills'), {
  ssr: false,
});
import IHome from './IHome';
import GithubProfileCard from '../../patterns/GithubProfileCard';

const Home = ({ data, githubRepoData, githubProfileData }: IHome) => {
  return (
    <>
      <Head />
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
