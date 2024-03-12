import { type FilterValue } from '../types'
import { Filters } from './Filters'
import { useContext } from 'react'
import { TodoContext } from '../context/todoContext'

interface Props {
  activeCount: number
  completedCount: number
  onClearCompleted: () => void
  filterSelected: FilterValue
}

export const Footer: React.FC<Props> = ({
  activeCount,
  completedCount,
  onClearCompleted,
  filterSelected,
  
}) => {
  const singleActiveCount = activeCount === 1
  const activeTodoWord = singleActiveCount ? 'tarea' : 'tareas'
  const { handleFilterChange } = useContext(TodoContext)!

  return (
    <footer className="footer">

      <span className="todo-count">
        <strong>{completedCount}</strong> {activeTodoWord} pendiente{!singleActiveCount && 's'}
      </span>

      <Filters filterSelected={filterSelected} handleFilterChange={handleFilterChange} />

      {
        completedCount > 0 && (
          <button
            className="clear-completed"
            onClick={onClearCompleted}>
              Borrar completados
          </button>
        )
      }
    </footer>
  )
}
