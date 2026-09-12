import { RankingItem } from "./RankingItem";
import { ordenarRanking } from "../../utils/gamification";

export function RankingList({ motoristas }) {
  if (!motoristas || motoristas.length === 0) {
    return (
      <p className="text-slate-500 py-6 text-center bg-slate-50 rounded-lg">
        Nenhum motorista encontrado.
      </p>
    );
  }

  const motoristasRanqueados = ordenarRanking(motoristas);

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-4 text-slate-800">
        Ranking de Desempenho
      </h2>
      <ul className="flex flex-col gap-3">
        {motoristasRanqueados.map((motorista) => (
          <RankingItem
            key={motorista.id}
            motorista={motorista}
            posicao={motorista.posicao}
          />
        ))}
      </ul>
    </div>
  );
}
