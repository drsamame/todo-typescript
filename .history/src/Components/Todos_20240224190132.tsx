interface Todo {
  id: number
  title: string
  completed: boolean
}

export const Todos = ({ list }) => {
  return (
    <ul className='todo-list'>
      {list.map((todo) => {
        return <li key={todo.id}>{todo.title}</li>
      })}
    </ul>
  )
}
