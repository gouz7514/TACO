import { Navigate } from 'react-router-dom'
import useAuth from '@/hooks/useAuth'

const AnonymousRoute = ({ children }: any) => {
  const { user } = useAuth()

  if (user) {
    return <Navigate to="/admin" />
  }

  return <>{ children }</>
}

export default AnonymousRoute