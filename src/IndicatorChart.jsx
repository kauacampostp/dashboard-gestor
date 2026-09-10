import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

export default function IndicatorChart({ dados }) {
  // Prevenção caso a API retorne um array vazio ou indefinido
  if (!dados || dados.length === 0) {
    return <p>Nenhum dado disponível para o gráfico.</p>;
  }

  return (
    // A div externa precisa ter uma altura definida para o ResponsiveContainer funcionar
    <div style={{ width: '100%', height: 350, marginTop: '2rem' }}>
      <h3>Evolução Mensal</h3>
      
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={dados} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          {/* Linhas de grade pontilhadas no fundo */}
          <CartesianGrid strokeDasharray="3 3" />
          
          {/* Eixo X recebe o nome do mês */}
          <XAxis dataKey="mes" />
          
          {/* Eixo Y é gerado automaticamente baseado nos valores numéricos */}
          <YAxis />
          
          {/* Tooltip mostra os valores exatos ao passar o mouse */}
          <Tooltip />
          <Legend />
          
          {/* dataKey deve bater exatamente com as chaves do seu db.json */}
          <Bar dataKey="entregas" fill="#3b82f6" name="Total de Entregas" />
          <Bar dataKey="eficienciaMedia" fill="#10b981" name="Eficiência Média (%)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}