export default function AchievementBadge({ conquista }) {
  return (
    <div 
      title={conquista.titulo}
      className="flex items-center justify-center w-12 h-12 bg-amber-100 text-2xl rounded-full shadow-sm border border-amber-200 cursor-help hover:scale-110 hover:bg-amber-200 transition-all"
    >
      {conquista.icone}
    </div>
  );
}