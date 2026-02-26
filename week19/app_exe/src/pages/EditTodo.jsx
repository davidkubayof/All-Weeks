import { useParams } from 'react-router'

export default function EditTodo() {
  const { id } = useParams();
  console.log(id)
  return (
    <div className='text-4xl flex justify-center'>EditTodo: {id}</div>
  )
}
