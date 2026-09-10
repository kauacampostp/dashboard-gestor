import { useFetch } from "../hooks/useFetch";
import { getConquistas, getIndicadores, getMotoristas } from "../api/api";
import { RankingList } from "../components/ranking/RankingList";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import IndicatorCard from "../components/IndicatorCard";
import AchievementBadge from "../components/AchivementBadge";
import IndicatorChart from "../IndicatorChart";

export function Dashboard() {
  // Renomeamos "data" para "motoristas" para deixar o código mais claro
  const {
    data: motoristas,
    loading: loadMot,
    error: errMot,
  } = useFetch(getMotoristas);
  const {
    data: indicadores,
    loading: loadInd,
    error: errInd,
  } = useFetch(getIndicadores);
  const {
    data: conquistas,
    loading: loadConq,
    error: errConq,
  } = useFetch(getConquistas);

  const isLoading = loadMot || loadInd || loadConq;
  const hasError = errMot || errInd || errConq;

  // Tratamento de estados antes de tentar renderizar a lista
  if (isLoading) return <Loader />;
  if (hasError) return <ErrorMessage mensagem={hasError} />;

  return (
    <main>
      <IndicatorCard titulo={"Total de motoristas"} valor={motoristas.length} />
      <h1>Painel do Gestor — Logística</h1>
      {/* Passamos o array de motoristas como prop para o RankingList */}

      <IndicatorChart dados={indicadores} />

      <RankingList motoristas={motoristas} />

      {conquistas.map((conquista) => (
        <AchievementBadge key={conquista.id} conquista={conquista} />
      ))}
    </main>
  );
}
