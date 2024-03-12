import { Todo } from './Todo'
import { type TodoList } from '../types'

interface Props {
  list: TodoList
  removeTodo: () => void
}

export const Todos: React.FC<Props> = ({ list, removeTodo }) => {
  return (
    <ul className='todo-list'>
      {list.map((todo) => {
        return (
          <li key={todo.id}>
            <Todo
              title={'todo.title'}
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
