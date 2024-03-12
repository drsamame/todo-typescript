interface TodosInterface {
  id: number
  title: string
  completed: boolean
}

interface Props {
  list: TodosInterface[]
}

// eslint-disable-next-line react/prop-types
export const Todos: React.FC<Props> = ({ list }) => {
  return (
    <ul>
      {list.map((todo) => {
        return <li key={todo.id}>{todo.title}</li>
      })}
    </ul>
  )
}
