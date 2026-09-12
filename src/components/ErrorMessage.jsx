export default function ErrorMessage({ mensagem }) {
  return (
    <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 my-6 rounded-r-md shadow-sm w-full max-w-2xl mx-auto">
      <p className="font-semibold mb-1">Não foi possível carregar os dados</p>
      <p className="text-sm">{mensagem}</p>
    </div>
  );
}