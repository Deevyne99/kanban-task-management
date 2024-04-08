import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../hooks/hook'
import { ReactNode } from 'react'
import { HashLoader } from 'react-spinners'
HashLoader
interface ProtectedRouteProps {
  children: ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useAppSelector((store) => store.user)
  // console.log(user)
  // if (isLoading) {
  //   return (
  //     <HashLoader
  //       color='#635FC7'
  //       className='justify-center items-center mx-auto'
  //     />
  //   )
  // }
  if (!user) {
    return <Navigate to={'/'} />
  }

  return children
}

export default ProtectedRoute
