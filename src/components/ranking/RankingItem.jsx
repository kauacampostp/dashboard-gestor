import { calcularNivel, progressoNivel } from "../../utils/gamification";

export function RankingItem({ motorista, posicao }) {
  let corPosicao = "bg-slate-100 text-slate-500 border-slate-200";

  if (posicao === 1)
    corPosicao =
      "bg-yellow-100 text-yellow-700 border-yellow-300 ring-2 ring-yellow-100";
  if (posicao === 2)
    corPosicao = "bg-slate-200 text-slate-700 border-slate-400";
  if (posicao === 3)
    corPosicao = "bg-orange-100 text-orange-700 border-orange-300";

  // Nível e progresso calculados dinamicamente a partir dos pontos
  const nivel = calcularNivel(motorista.pontos);
  const progresso = progressoNivel(motorista.pontos);

  return (
    <li className="flex items-center justify-between p-3 md:p-4 rounded-xl border border-slate-100 bg-white hover:bg-slate-50 transition-colors shadow-sm">
      <div className="flex items-center gap-4 flex-1 min-w-0">
        {/* Ícone numérico da posição */}
        <span
          className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold border shrink-0 ${corPosicao}`}
        >
          {posicao}º
        </span>

        {/* Dados do motorista */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <p className="font-semibold text-slate-800 text-lg truncate">
              {motorista.nome}
            </p>
            <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full uppercase tracking-wide shrink-0">
              Nível {nivel}
            </span>
          </div>

          {/* Barra de progresso até o próximo nível */}
          <div className="w-full max-w-[180px] h-1.5 bg-slate-100 rounded-full mt-1.5 overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-all"
              style={{ width: `${progresso}%` }}
            />
          </div>
        </div>
      </div>

      {/* Bloco de pontuação alinhado à direita */}
      <div className="text-right shrink-0 pl-3">
        <span className="block text-xl font-bold text-blue-600">
          {motorista.pontos}
        </span>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          Pontos
        </span>
      </div>
    </li>
  );
}
