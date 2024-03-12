import { Todo } from './Todo'
import { useContext } from 'react'
import { TodoContext } from '../context/todoContext'

export const Todos: React.FC<Props> = () => {
  const { filteredTodos, removeTodo } = useContext(TodoContext)!
  return (
    <ul className='todo-list'>
      {filteredTodos.map((todo) => {
        return (
          <li key={todo.id} className={`${todo.completed ? ' completed' : ''}`}>
            <Todo
              title={todo.title}
              id={todo.id}
              completed={todo.completed}
              removeTodo={() => removeTodo(todo.id)}
            />
          </li>
        )
      })}
    </ul>
  )
}
