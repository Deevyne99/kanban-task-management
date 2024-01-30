import {
  toggleDeleteBoard,
  toggleEditBoard,
  toggleDropDown,
} from '../features/modal/modalSlice'
import { logoutUser } from '../features/user/userSlice'
import { useAppSelector, useAppDispatch } from '../hooks/hook'

const DropDownModal = () => {
  const dispatch = useAppDispatch()
  const { dropDown, darkMode } = useAppSelector((store) => store.modal)

  const handleSignOut = () => {
    dispatch(logoutUser())
    dispatch(toggleDropDown())
  }

  return (
    <div
      className={`${
        dropDown ? 'top-24' : 'top-[-300px] '
      }  flex transition-all duration-500 h-[150px]   fixed right-4 w-[180px]  ${
        darkMode === 'light' ? 'bg-[#fff]' : 'bg-[#2B2C37]'
      } p-4 rounded-xl shadow-md`}
    >
      <div className={`flex flex-col items-start   gap-4 font-Plus`}>
        <button
          onClick={() => dispatch(toggleEditBoard())}
          className='capitalize font-Plus text-textLabel text-sm font-medium'
        >
          edit board
        </button>
        <button
          type='button'
          onClick={() => dispatch(toggleDeleteBoard())}
          className='capitalize text-[#EA5555] text-sm font-Plus font-medium'
        >
          delete board
        </button>
        <button
          onClick={() => handleSignOut()}
          className='capitalize font-Plus text-sm text-textLabel font-medium'
        >
          sign out
        </button>
      </div>
    </div>
  )
}

export default DropDownModal
