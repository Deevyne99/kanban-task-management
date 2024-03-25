import {
  getAllBoard,
  handleDeleteBoard,
} from '../features/Boards/allBoards/allBoardSlice'
import { toggleDeleteBoard } from '../features/modal/modalSlice'
import { useAppSelector, useAppDispatch } from '../hooks/hook'
getAllBoard()

// interface DeleteProp {
//   category: string
// }
const DeleteModal = () => {
  const dispatch = useAppDispatch()
  const { deleteBoard, deleteCategory, darkMode } = useAppSelector(
    (store) => store.modal
  )
  const { board } = useAppSelector((state) => state.allboard)
  const handleDelete = () => {
    if (deleteCategory === 'board') {
      dispatch(handleDeleteBoard(board._id))
      dispatch(toggleDeleteBoard())
      dispatch(getAllBoard())
      return
    }
  }

  return (
    <div
      className={` ${
        darkMode === 'light' ? 'bg-[#fff]' : 'bg-[#2B2C37]'
      } transition-all duration-500 ${
        deleteBoard ? ' md:top-[250px] top-[150px] z-30 ' : ' top-[-500px]'
      }  w-[320px] sm:w-[400px]  md:w-[450px] gap-4 flex flex-col fixed  left-0 right-0 mx-auto p-6 my-auto rounded-md overflow-hidden`}
    >
      <div className='flex flex-col gap-4'>
        <h3 className='capitalize text-[#EA5555] font-bold'>
          Delete this {deleteCategory}?
        </h3>
        <p className='text-[13px] text-[#828FA3]'>
          Are you sure you want to delete the ‘Platform Launch’ board? This
          action will remove all columns and tasks and cannot be reversed.
        </p>
        <div className='flex items-center gap-4 justify-center'>
          <button
            className='bg-[#EA5555] text-[#fff] px-6 w-[150px] rounded-[20px] py-2'
            onClick={() => handleDelete()}
          >
            Delete
          </button>
          <button
            onClick={() => dispatch(toggleDeleteBoard())}
            className='bg-cancleBtn text-[#635FC7] px-6 w-[150px] rounded-[20px] py-2'
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal
