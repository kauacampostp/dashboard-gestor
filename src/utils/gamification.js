export function calcularNivel(pontos) {
  if (pontos < 500) return 1;
  if (pontos < 1000) return 2;
  if (pontos < 2000) return 3;
  if (pontos < 3500) return 4;
  return 5;
}

export function progressoNivel(pontos) {
  let piso;
  let teto;

  if (pontos < 500) {
    piso = 0;
    teto = 500;
  } else if (pontos >= 500 && pontos < 1000) {
    piso = 500;
    teto = 1000;
  } else if (pontos >= 1000 && pontos < 2000) {
    piso = 1000;
    teto = 2000;
  } else if (pontos >= 2000 && pontos < 3500) {
    piso = 2000;
    teto = 3500;
  } else if (pontos >= 3500) {
    return 100;
  }

  const pontosConquistados = pontos - piso;
  const proximaEtapa = teto - piso;

  let porcetagem = (pontosConquistados / proximaEtapa) * 100;

  return Math.floor(porcetagem);
}

export function ordenarRanking(motoristas) {
  let listaMot = [...motoristas];

  listaMot.sort((a, b) => b.pontos - a.pontos);

  const motoristasComPosicao = listaMot.map((motorista, index) => {
    return {
      ...motorista, // Copia tudo: id, nome, avatar, pontos, etc.
      posicao: index + 1, // Cria a nova propriedade baseada no índice
    };
  });

  return motoristasComPosicao; 
}
