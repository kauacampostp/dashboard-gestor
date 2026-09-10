export function RankingItem({ motorista }) {
  return (
    <li>
      {motorista.nome} — {motorista.pontos} pontos
    </li>
  );
}