import { type Todo as TodoType } from '../types'

interface Props extends TodoType {
  onToggleCompleteTodo: ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, removeTodo, onToggleCompleteTodo }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onToggleCompleteTodo({ id, completed: e.target.checked })
  }
  return (
    <div className='view'>
      <input className='toggle' type='checkbox' checked={completed} onChange={handleChange} />
      <label>{title}</label>
      <button className='destroy' onClick={removeTodo}></button>
    </div>
  )
}
