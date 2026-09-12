export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center p-12 w-full h-full min-h-[50vh]">
      <div className="w-12 h-12 border-4 border-slate-200 border-t-blue-500 rounded-full animate-spin mb-4"></div>
      <span className="text-slate-500 font-medium">Carregando dados...</span>
    </div>
  );
}
