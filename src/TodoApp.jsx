import { Form } from './components/Form';
import { TodoControl } from './components/TodoControl';
import { Todos } from './components/Todos';
import { useTodo } from './hooks/useTodo';

export const TodoApp = () => {

  const { state, onAddTodo, onDeleteTodo, todoTotales, todoConpletes, todoPending, onToggleTodo } = useTodo()

  return (
    <div className="d-flex flex-column p-3 m-3 containner">
      <h1 className="display-1 fw-bold">Todo App</h1>

      <Form onAddTodo={ onAddTodo }/>

      <TodoControl  
        todoTotales ={ todoTotales }
        todoConpletes = { todoConpletes } 
        todoPending ={ todoPending }
      />

      {
        state.map( todo => (
          <Todos 
            key={ todo.id } 
            onDeleteTodo={ onDeleteTodo }
            onToggleTodo={ onToggleTodo } 
            {...todo}/>
        ))
      }
    </div>
  )
}
