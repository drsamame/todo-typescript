import { type Todo as TodoType } from '../types'

type Props = TodoType

export const Todo: React.FC<Props> = ({ id, title, completed, removeTodo }) => {
  return (
    <div className='view'>
      <input className='toggle' type='checkbox' checked={completed} />
      <label>{title}</label>
      <button className='destroy' onClick={removeTodo}></button>
    </div>
  )
}
