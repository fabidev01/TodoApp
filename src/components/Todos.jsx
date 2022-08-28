import React, { useEffect, useState } from 'react'

export const Todos = ({ id, done, todo, onDeleteTodo, onToggleTodo }) => {
 
  const HanddleDelete = () => {
    onDeleteTodo( id );
  };

  const HandleToggle = () => {
    onToggleTodo( id );
  }

  return (
    <div className="d-flex justify-content-between todos">
      <span className="todo">{ todo }</span>
      <div className="">
        <button
        className={`m-1 ${done? "btn btn-success": "btn btn-primary"}`}
          onClick={ HandleToggle }
        >{done? "Hecho": "Pendiente"}</button>
        <button
        className="btn btn-danger m-2"
          onClick={ HanddleDelete }
        ><img src="./basurero.png" alt="borrar" /></button>
      </div>
    </div>
  )
}
