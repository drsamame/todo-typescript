import { Todo } from './Todo'
import { type TodoList } from '../types'

interface Props {
  list: TodoList
}

export const Todos: React.FC<Props> = ({ list }) => {
  return (
    <ul className='todo-list'>
      {list.map((todo) => {
        return (
          <li key={todo.id}>
            <Todo title={todo.title} />
          </li>
        )
      })}
    </ul>
  )
}
