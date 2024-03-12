import { Filters } from './Filters'

export const Footer: React.FC<Props> = ({
  activeCount,
  list,
  onClearCompleted
}) => {
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{list.length}</strong> tareas pendientes
      </span>
      <Filters />
    </footer>
  )
}
