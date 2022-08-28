import { useState } from "react";

export const Form = ({ onAddTodo }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue( target.value );
  }

  const onInputSubmit = () => {
    if(inputValue.length == 0) return;
    onAddTodo(inputValue.trim());
    setInputValue('');
  }

  return (
    <form onSubmit={ onInputSubmit }>
        <input 
          className="form-control"
          onChange={ onInputChange }
          value={ inputValue }
          type="text"/>
    </form>
  )
}
