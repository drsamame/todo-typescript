import { useState, useContext } from 'react'
import { TodoContext } from '../context/todoContext'
interface Props {
  saveTodo: (title: string) => void
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState('')
  const { handleSaveTodo } = useContext(TodoContext)!

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter' && inputValue !== '') {
      handleSaveTodo(inputValue)
      setInputValue('')
    }
  }

  return (
    <input
      className='new-todo'
      value={inputValue}
      onChange={(e) => {
        setInputValue(e.target.value)
      }}
      onKeyDown={handleKeyDown}
      placeholder='¿Qué quieres hacer?'
      autoFocus
    />
  )
}
