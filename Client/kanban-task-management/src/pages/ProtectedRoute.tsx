import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../hooks/hook'
import { ReactNode } from 'react'

interface ProtectedRouteProps {
  children: ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useAppSelector((store) => store.user)
  if (!user) {
    return <Navigate to={'/'} />
  }

  return children
}

export default ProtectedRoute
