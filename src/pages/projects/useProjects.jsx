import { useState, useEffect } from 'react';
import { fetchDataFromGithubApi } from './api';

const useProjects = () => {
  const username = 'AgustinCartaya';
  const repo = 'portfolio';
  const relativePath = 'src/my_projects';
  const apiUrl = `https://api.github.com/repos/${username}/${repo}/contents/${relativePath}`;
  const rawUrl = `https://raw.githubusercontent.com/${username}/${repo}/main/`;
  const [jsonData, setJsonData] = useState([]);

  const fetchDataFromUrls = async () => {
    try {
      const urls = await fetchDataFromGithubApi(apiUrl);
      const responses = await Promise.all(urls.map(url => fetch(`${rawUrl}${url}/description.json`)));
      const data = await Promise.all(
        responses.map(async response => {
          try {
            const res = await response.json();
            return res
          } catch (parseError) {
            console.error('Failed to parse JSON:', parseError);
          }
        })
      );
      setJsonData(data)

    } catch (error) {
      console.error(`Oops, an error occurred: ${error}`);
      throw error;
    }
  };

  useEffect(() => {
    fetchDataFromUrls();
  }, []);

  return { jsonData };
};

export default useProjects;
