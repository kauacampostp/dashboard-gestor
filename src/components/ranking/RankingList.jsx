import { RankingItem } from './RankingItem';
import { ordenarRanking } from '../../utils/gamification';

export function RankingList({ motoristas }) {
  // Prevenção de erro caso a API retorne vazio
  if (!motoristas || motoristas.length === 0) {
    return <p>Nenhum motorista encontrado.</p>;
  }

  const motoristasRanqueados = ordenarRanking(motoristas);

  return (
    <div>
      <h2>Ranking</h2>
      <ul>
        {motoristasRanqueados.map((motorista) => (
          // A propriedade "key" é obrigatória no React sempre que você usa o .map()
          // Ela ajuda o React a identificar qual item mudou, foi adicionado ou removido.
          <RankingItem key={motorista.id} motorista={motorista} posicao={motorista.posicao} />
        ))}
      </ul>
    </div>
  );
}