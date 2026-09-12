import { useFetch } from "../hooks/useFetch";
import { getIndicadores, getMotoristas } from "../api/api";
import { RankingList } from "../components/ranking/RankingList";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import IndicatorCard from "../components/IndicatorCard";
import AchievementBadge from "../components/AchivementBadge";
import IndicatorChart from "../components/IndicatorChart";

export function Dashboard() {
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

  const isLoading = loadMot || loadInd;
  const hasError = errMot || errInd;

  if (isLoading) return <Loader />;
  if (hasError) return <ErrorMessage mensagem={hasError} />;

  // Captura o último dado de indicador para os cards superiores
  const mesAtual = indicadores[indicadores.length - 1] || {
    entregas: 0,
    eficienciaMedia: 0,
  };

  // Conquistas agora vêm aninhadas em cada motorista
  const conquistas = motoristas.flatMap((motorista) =>
    (motorista.conquistas || []).map((conquista) => ({
      ...conquista,
      motoristaNome: motorista.nome,
    })),
  );

  return (
    // Contêiner principal da página: fundo claro, altura mínima da tela, padding.
    <main className="min-h-screen bg-slate-50 p-6 md:p-10 font-sans text-slate-800">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Painel do Gestor — Logística
        </h1>
      </header>

      {/* Grid Principal: 1 coluna no mobile, 3 colunas em telas médias+ */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Linha 1: Indicadores  */}
        <IndicatorCard titulo="Total de motoristas" valor={motoristas.length} />
        <IndicatorCard
          titulo="Entregas (Mês Atual)"
          valor={mesAtual.entregas}
        />
        <IndicatorCard
          titulo="Eficiência Média"
          valor={`${mesAtual.eficienciaMedia}%`}
        />

        {/* Linha 2: Gráfico (col-span-3 faz ocupar a largura total do grid) */}
        <div className="md:col-span-3 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <IndicatorChart dados={indicadores} />
        </div>

        {/* Linha 3, Coluna Esquerda: Ranking (ocupa 2 terços da tela) */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <RankingList motoristas={motoristas} />
        </div>

        {/* Linha 3, Coluna Direita: Conquistas (ocupa 1 terço da tela) */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h2 className="text-xl font-semibold mb-4 text-slate-800">
            Conquistas Recentes
          </h2>
          <div className="flex flex-wrap gap-3">
            {conquistas.length === 0 ? (
              <p className="text-slate-500 text-sm">
                Nenhuma conquista registrada ainda.
              </p>
            ) : (
              conquistas.map((conquista) => (
                <AchievementBadge key={conquista.id} conquista={conquista} />
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
