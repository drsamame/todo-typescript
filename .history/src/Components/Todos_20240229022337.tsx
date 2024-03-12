import { Todo } from './Todo'
import {type Todo as TodoType } from '../types'
import { useContext } from 'react'
import { TodoContext } from '../context/todoContext'

interface Props {
  onToggleCompleteTodo: ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todos: React.FC<Props> = ({
  onToggleCompleteTodo
}) => {
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
              onToggleCompleteTodo={onToggleCompleteTodo}
            />
          </li>
        )
      })}
    </ul>
  )
}
