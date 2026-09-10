import { RankingItem } from './RankingItem';

export function RankingList({ motoristas }) {
  // Prevenção de erro caso a API retorne vazio
  if (!motoristas || motoristas.length === 0) {
    return <p>Nenhum motorista encontrado.</p>;
  }

  return (
    <div>
      <h2>Ranking</h2>
      <ul>
        {motoristas.map((motorista) => (
          // A propriedade "key" é obrigatória no React sempre que você usa o .map()
          // Ela ajuda o React a identificar qual item mudou, foi adicionado ou removido.
          <RankingItem key={motorista.id} motorista={motorista} />
        ))}
      </ul>
    </div>
  );
}