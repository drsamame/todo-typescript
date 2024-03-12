import { Todo } from './Todo'
import { type TodoList, type TodoId, type Todo as TodoType } from '../types'
import { useContext } from 'react'
import { TodoProvider } from '../context/todoContext'

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
  const { removeTodo } = !useContext(TodoProvider)
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
