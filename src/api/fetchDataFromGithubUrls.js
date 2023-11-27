import fetchDataFromGithubApi from '../api/fetchDataFromGithubApi';

const username = 'AgustinCartaya';
const repo = 'portfolio';
const rawUrl = `https://raw.githubusercontent.com/${username}/${repo}/main/`;

 const fetchDataFromUrls = async (relativePath) => {
  try {
    const apiUrl = `https://api.github.com/repos/${username}/${repo}/contents/${relativePath}`;
    const projectUrls = await fetchDataFromGithubApi(apiUrl)
    const responses = await Promise.all(projectUrls.map(url => fetch(`${rawUrl}${url}/description.json`)));
    const data = await Promise.all(
      responses.map(async response => {
        try {
          const res = await response.json();
          return res;
        } catch (parseError) {
          throw new Error('Failed to parse JSON:', parseError);
        }
      })
    );
    return data;
  } catch (error) {
    throw new Error(`Oops, an error occurred: ${error}`)
  }
};

export default fetchDataFromUrls