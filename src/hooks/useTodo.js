import { useEffect, useReducer } from "react";
import { todoReducer } from "../helpers/todoReducer";


const initialState = ()=>{
  return (JSON.parse(localStorage.getItem('todos')) || []);
}
  
export const useTodo = () => {

  const [state, dispatch] = useReducer(todoReducer, [], initialState)

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(state));
  },[state]);

  const onAddTodo = ( inputValue ) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: {
        id: Date.now() * 5,
        todo: inputValue,
        done: false,
      }
    }
    dispatch( action );
  }

  const onDeleteTodo = ( id ) => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: id
    }
    dispatch( action );
  }

  const onToggleTodo = ( id ) => {
    const action = {
      type: "[TODO] Toggle Todo",
      payload: id
    }
    dispatch( action );
  }

  const todoConpletes = () => {
    return state.filter( todo =>  todo.done).length;
  }
  const todoPending = () => {
    return state.filter( todo =>  !todo.done).length;
  }
  const todoTotales = () => {
    return state.length;
  }

  return{
    onAddTodo,
    onDeleteTodo,
    onToggleTodo,
    state,
    todoTotales,
    todoConpletes,
    todoPending,
    ...state
  }
}
