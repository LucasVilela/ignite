import { Repository } from "./RepositoryList";

export function RepositoryItem({ repository }: { repository: Repository }) {
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description || "No description"}</p>
      <a href={repository.html_url} target="_blank">
        Acessar repositório
      </a>
    </li>
  );
}
