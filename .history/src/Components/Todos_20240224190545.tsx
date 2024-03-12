import { Todo } from './Todo'

interface Todo {
  id: number
  title: string
  completed: boolean
}

type TodoList = Todo[]

interface Props {
  list: TodoList
}

export const Todos: React.FC<Props> = ({ list }) => {
  return (
    <ul className='todo-list'>
      {list.map((todo) => {
        return <li key={todo.id}>
          < Todo />
        </li>
      })}
    </ul>
  )
}
