import { useFetch } from "../hooks/useFetch";
import { getMotoristas } from "../api/api";
import { RankingList } from "../components/ranking/RankingList";

export function Dashboard() {
  // Renomeamos "data" para "motoristas" para deixar o código mais claro
  const { data: motoristas, loading, error } = useFetch(getMotoristas);

  // Tratamento de estados antes de tentar renderizar a lista
  if (loading) return <p>Carregando motoristas...</p>;
  if (error) return <p>Erro ao carregar: {error}</p>;

  return (
    <main>
      <h1>Painel do Gestor — Logística</h1>
      {/* Passamos o array de motoristas como prop para o RankingList */}
      <RankingList motoristas={motoristas} />
    </main>
  );
}
