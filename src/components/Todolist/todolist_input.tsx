import React,{useRef} from 'react'
import "../../Styles/todolist_input.css"

interface props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
  }
  
  const InputField: React.FC<props> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null);


/*
  async function sendTodo(event:any){
    event.preventDefault();
    const response = await fetch("http://localhost:5000/product/create",{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        todo,      
             
      })
    })
    const data = await response.json();
    console.log(data);
  };*/
  
    return (
      
      <form
        className="input"
        onSubmit={(e) => {
         handleAdd(e)/*;sendTodo(e);*/
          inputRef.current?.blur();
        }}
      >
        <input
          type="text"
          placeholder="Enter a Todo"
          value={todo}
          ref={inputRef}
          onChange={(e) => setTodo(e.target.value)}
          className="input__box"
        />
        <button data-testid='submit-button' type="submit" className="input_submit">
          GO
        </button>
      </form>
    );
  };

export default InputField;
