const mockTODOS = [
    {
      id: 1,
      title: 'todo uno',
      completed: true
    },
    {
      id: 2,
      title: 'todo dos',
      completed: false
    },
    {
      id: 3,
      title: 'todo tres',
      completed: false
    }
  ]
  
export const useTodo() {
    const [todos, setTodos] = useState(mockTODOS)
}