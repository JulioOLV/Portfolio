import Home from '../src/screens/Home';

export async function getStaticProps() {
  const PORTFOLIO_INFO_PATH =
    'https://gist.githubusercontent.com/JulioOLV/5beedb1247535ed5fa98119b70973b43/raw/ce3bf560164269ab606742799446a29d325228a8/portfolio_informations.json';
  const data = await fetch(PORTFOLIO_INFO_PATH)
    .then(async (response) => await response.json())
    .then((converted) => converted.data);

  const GITHUB_URI =
    'https://api.github.com/search/repositories?q=user:JulioOLV%20topic:list-in-portfolio';
  const githubRepoData = await fetch(GITHUB_URI)
    .then(async (response) => await response.json())
    .then((converted) => converted.items);

  const githubProfileData = await fetch(
    'https://api.github.com/users/JulioOLV'
  ).then((res) => res.json());

  return {
    props: {
      data,
      githubRepoData,
      githubProfileData,
    },
  };
}

export default Home;
