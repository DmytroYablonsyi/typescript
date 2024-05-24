import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
const todosCtx = useContext(TodosContext)

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submiHandler = (e: React.FormEvent) => {
        e.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if(enteredText.trim().length === 0){
            return;
        }

        todosCtx.addTodo(enteredText)
    }

  return (
   <form onSubmit={submiHandler}>
        <label htmlFor="text">Todo text</label>
        <input type="text" id="text" ref={todoTextInputRef}/>
        <button>Add todo</button>
   </form>
  )
}

export default NewTodo