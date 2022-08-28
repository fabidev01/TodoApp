export const TodoControl = ({ todoPending, todoConpletes, todoTotales}) => {
  return (
    <div className="d-flex justify-content-around m-3 p-3 todoControl">
      <div>Pendientes: { todoPending() }</div>
      <div>Realizadas: { todoConpletes() }</div>
      <div>Totales: { todoTotales() }</div>
    </div>
  )
}
