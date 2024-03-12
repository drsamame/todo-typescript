import { type Todo as TodoType } from '../types'

interface Props extends TodoType {
  removeTodo: () => void
  onToggleCompleteTodo: ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, removeTodo, onToggleCompleteTodo }) => {
  return (
    <div className='view'>
      <input className='toggle' type='checkbox' checked={completed} onChange={(e) => { onToggleCompleteTodo({ id, completed: e.target.checked }) }} />
      <label>{title}</label>
      <button className='destroy' onClick={removeTodo}></button>
    </div>
  )
}
