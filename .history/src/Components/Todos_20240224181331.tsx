interface TodosInterface {
  id: number
  title: string
  completed: boolean
}

interface Props {
  list: TodosInterface[]
}

export const Todos: React.FC<Props> = ({ list }) => {
  return (
    <ul>
      {list.map((todo: TodosInterface) => {
        return <li key={todo.id}>{todo.title}</li>
      })}
    </ul>
  )
}
