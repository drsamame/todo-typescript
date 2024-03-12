import { Todo } from './Todo'
import { type TodoList, type TodoId, type Todo as TodoType } from '../types'

interface Props {
  list: TodoList
  onToggleCompleteTodo: ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todos: React.FC<Props> = ({
  list,
  onToggleCompleteTodo
}) => {
  return (
    <ul className='todo-list'>
      {list.map((todo) => {
        return (
          <li key={todo.id} className={`${todo.completed ? ' completed' : ''}`}>
            <Todo
              title={todo.title}
              id={todo.id}
              completed={todo.completed}
              onToggleCompleteTodo={onToggleCompleteTodo}
            />
          </li>
        )
      })}
    </ul>
  )
}
