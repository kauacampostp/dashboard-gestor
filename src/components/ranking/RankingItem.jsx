export function RankingItem({ motorista, posicao }) {
  // Lógica condicional do Tailwind para destacar o pódio (Top 3)
  let corPosicao = "bg-slate-100 text-slate-500 border-slate-200"; 
  
  if (posicao === 1) corPosicao = "bg-yellow-100 text-yellow-700 border-yellow-300 ring-2 ring-yellow-100";
  if (posicao === 2) corPosicao = "bg-slate-200 text-slate-700 border-slate-400";
  if (posicao === 3) corPosicao = "bg-orange-100 text-orange-700 border-orange-300";

  return (
    <li className="flex items-center justify-between p-3 md:p-4 rounded-xl border border-slate-100 bg-white hover:bg-slate-50 transition-colors shadow-sm">
      
      <div className="flex items-center gap-4">
        {/* Ícone numérico da posição */}
        <span className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold border ${corPosicao}`}>
          {posicao}º
        </span>
        
        {/* Dados do motorista */}
        <div>
          <p className="font-semibold text-slate-800 text-lg">
            {motorista.nome}
          </p>
        </div>
      </div>

      {/* Bloco de pontuação alinhado à direita */}
      <div className="text-right">
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