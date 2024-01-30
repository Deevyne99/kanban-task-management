import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../hooks/hook'

const ProtectedRoute = ({ children }) => {
  const { user } = useAppSelector((store) => store.user)
  if (!user) {
    return <Navigate to={'/'} />
  }

  return children
}

export default ProtectedRoute
