import { Todo } from './Todo'
import { useContext } from 'react'
import { TodoContext } from '../context/todoContext'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export const Todos: React.FC = () => {
  const { filteredTodos, removeTodo } = useContext(TodoContext)!
  const [parent] = useAutoAnimate()
  return (
    <ul className='todo-list' ref={parent}>
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
