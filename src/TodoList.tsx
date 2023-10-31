import { useCallback, useState } from "react";

const todos = ["tache 1", "tache 2", "tache 3"];

function TodoList() {
    const [todoName, setTodoName] = useState("")
    const [todos, setTodos] = useState(["tache 1", "tache 2", "tache 3"]);


    const handleChangeTodoName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoName(e.target.value)
    }
    , [])

    const handleAddTodo = useCallback(
        () => { 
            setTodos([...todos, todoName])
            setTodoName("")
        },
        [todos, todoName]
    )

    const handleDeleteTodo = useCallback(
        (indexToDelete: number) => { 
            setTodos(todos.filter((todo, i) => i !== indexToDelete))
        },
        [todos]
    )

    return (
        <>
            <h1>Todo List</h1>
            <p>{todoName}</p>
            <input type="text" value={todoName} onChange={handleChangeTodoName} />
            <button onClick={handleAddTodo}>Ajouter</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <span>{todo}</span>
                        <button onClick={() => handleDeleteTodo(index)}>X</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TodoList