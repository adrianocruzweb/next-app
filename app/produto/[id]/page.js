export default function Produto({ params }) {
  const { id } = params;  // params contém os parâmetros dinâmicos da rota

  return (
    <div>
      <h1>Produto {id}</h1>
    </div>
  );
}