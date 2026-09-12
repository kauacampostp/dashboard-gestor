const BASE_URL = "https://dashboard-gestor.onrender.com/";

async function fetchWrapper(endpoint) { // Agrupa a verificação da requisição
  const response = await fetch(`${BASE_URL}${endpoint}`);

  if(!response.ok){ // Verifica a requisição. A propriedade ok é gerada automaticamente pelo fetch
    throw new Error(`Falha na requisição para ${endpoint}. Status: ${response.status}`);
  }

  return response.json(); // Devolve a string no formato JSON para manipulação
}

// Chamadas especificas
export const getMotoristas = () => {
  return fetchWrapper('/motoristas');
}

export const getConquistas = () => {
  return fetchWrapper('/conquistas');
}

export const getIndicadores = () => {
  return fetchWrapper('/indicadoresMensais');
}