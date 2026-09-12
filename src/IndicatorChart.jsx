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
  if (!dados || dados.length === 0) {
    return (
      <p className="text-slate-500 text-center py-4">
        Nenhum dado disponível para o gráfico.
      </p>
    );
  }

  return (
    <div className="w-full h-[350px]">
      <h3 className="text-xl font-semibold mb-6 text-slate-800">
        Evolução Mensal
      </h3>
      
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={dados} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
          {/* Grade apenas horizontal para visual mais limpo */}
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          
          <XAxis 
            dataKey="mes" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#64748b' }} 
            dy={10} 
          />
          
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#64748b' }} 
          />
          
          <Tooltip 
            cursor={{ fill: '#f8fafc' }}
            contentStyle={{ 
              borderRadius: '8px', 
              border: 'none', 
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' 
            }}
          />
          
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
          
          {/* radius arredonda apenas as bordas superiores das barras */}
          <Bar dataKey="entregas" fill="#3b82f6" name="Total de Entregas" radius={[4, 4, 0, 0]} />
          <Bar dataKey="eficienciaMedia" fill="#10b981" name="Eficiência Média (%)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}