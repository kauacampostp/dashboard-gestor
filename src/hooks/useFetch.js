import { useState, useEffect } from "react";

export function useFetch(fetchFunction) {
  // Hook criado manualmente
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Esse hook permite fazer algo sem precisar renderizar novamente. Ele não aceita função async, logo contruimos dentro de outra função
    const fetchData = async () => {
      try {
        setLoading(true); // Saber se está em loading. Usar para renderizar "Carregando..."
        const result = await fetchFunction(); // Recebe o resultado da API
        setData(result);
        setError(null);
      } catch (err) {
        setError(err.message || "Ocorreu um erro desconhecido.");
      } finally {
        setLoading(false);
      }
    };
    fetchData(); // Chama a função criada
  }, [fetchFunction]); // [fetchFunction] serve para indicar que o useEffect deve ser chamado sempre que o fetchFunction mudar (por padrão, ele chama sempre que a renderização finaliza)

  return { data, loading, error };
}
