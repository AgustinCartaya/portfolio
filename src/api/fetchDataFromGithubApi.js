const fetchDataFromGithubApi = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const paths = data.map(item => item.path);
    return paths;
  } catch (error) {
    new Error('Oops, an error occurred: ' + error);
  }
};

export default fetchDataFromGithubApi;
