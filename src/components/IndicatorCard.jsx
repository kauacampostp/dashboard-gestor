export default function IndicatorCard({ titulo, valor }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col gap-1 hover:shadow-md transition-shadow">
      <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider">
        {titulo}
      </h3>
      <span className="text-3xl font-bold text-slate-900">{valor}</span>
    </div>
  );
}
