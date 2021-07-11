import { useState, useEffect } from "react";

import "../assets/styles/repository.scss";
import { RepositoryItem } from "./RepositoryItem";

export interface Repository {
  name: string;
  description: string;
  html_url: string;
}
const RepositoryList = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <div>
      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.name} repository={repository} />
        ))}
      </ul>
    </div>
  );
};

export default RepositoryList;
