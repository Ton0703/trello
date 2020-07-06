import { useSelector } from 'react-redux'

export default function Home() {
  const name = useSelector(state => state.user.name)
  return (
    <div className="container">
       {name}
    </div>
  )
}
