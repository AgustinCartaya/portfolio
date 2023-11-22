const fetchDataFromGithubApi = async apiUrl => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const paths = data.map(item => item.path);
    return paths;
    
  } catch (error) {
    throw new Error('Oops, an error occurred: ' + error);
  }
};

export { fetchDataFromGithubApi };
