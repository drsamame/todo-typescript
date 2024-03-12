import { Todo } from '../types'

type Props = Todo

export const Todo: React.FC<Props> = ({ id, title, completed }) => {
  return (
    <div className='view'>
      <input className='toggle' type='checkbox' checked={completed} />
      <label>{title}</label>
      <button className='destroy'></button>
    </div>
  )
}
