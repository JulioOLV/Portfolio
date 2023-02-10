import dynamic from 'next/dynamic';

const Home = dynamic(() => import('../src/screens/Home'));

export async function getStaticProps() {
  const PORTFOLIO_INFO_PATH =
    'https://gist.githubusercontent.com/JulioOLV/5beedb1247535ed5fa98119b70973b43/raw/02fc77fba05d6e3e168cb7d9fe61343eec7ca6c9/portfolio_informations.json';
  const data = await fetch(PORTFOLIO_INFO_PATH)
    .then(async (response) => await response.json())
    .then((converted) => converted.data);

  const GITHUB_REPOS_URI =
    'https://api.github.com/search/repositories?q=user:JulioOLV%20topic:list-in-portfolio';
  const githubRepoData = await fetch(GITHUB_REPOS_URI)
    .then(async (response) => await response.json())
    .then((converted) => converted.items);

  const GITHUB_PROFILE_URI = 'https://api.github.com/users/JulioOLV';
  const githubProfileData = await fetch(GITHUB_PROFILE_URI).then(
    async (res) => await res.json()
  );

  return {
    props: {
      data,
      githubRepoData,
      githubProfileData,
    },
    revalidate: 60 * 60 * 24 * 7, // 7 days
  };
}

export default Home;
