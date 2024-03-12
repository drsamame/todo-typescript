import { Todo } from './Todo'
import { type TodoList, type Todo as TodoType, type CurrentTodoContextType} from '../types'
import { useContext } from 'react'
import { TodoContext } from '../context/todoContext'

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
  const { removeTodo } = useContext(TodoContext) as CurrentTodoContextType
  return (
    <ul className='todo-list'>
      {list.map((todo) => {
        return (
          <li key={todo.id} className={`${todo.completed ? ' completed' : ''}`}>
            <Todo
              title={todo.title}
              id={todo.id}
              completed={todo.completed}
              removeTodo={() => removeTodo(todo.id)}
              onToggleCompleteTodo={onToggleCompleteTodo}
            />
          </li>
        )
      })}
    </ul>
  )
}
