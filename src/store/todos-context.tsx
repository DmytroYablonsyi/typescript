import React, { ReactNode, useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
}

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
});
interface TodoProviderProps {
    children: ReactNode;
  }
const TodosContextProvider: React.FC<TodoProviderProps> = ({children}) => {
    const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prev) => {
      return prev.concat(newTodo);
    });
  };

  const removeHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }
    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeHandler
    }
    return(
        <TodosContext.Provider value={contextValue}>
        {children}
    </TodosContext.Provider>
    ) 
}


export default TodosContextProvider