import { useEffect, useRef } from 'react'
import {
  getAllBoard,
  handleDeleteBoard,
  handleDeleteTask,
} from '../features/Boards/allBoards/allBoardSlice'
import {
  toggleDeleteBoard,
  closeDeleteModal,
} from '../features/modal/modalSlice'
import { useAppSelector, useAppDispatch } from '../hooks/hook'

// interface DeleteProp {
//   category: string
// }
const DeleteModal = () => {
  const modalRef = useRef<HTMLDivElement>(null)
  const dispatch = useAppDispatch()
  const { deleteBoard, deleteCategory, darkMode, deleteTask, task } =
    useAppSelector((store) => store.modal)
  const { board } = useAppSelector((state) => state.allboard)
  const handleDelete = () => {
    if (deleteBoard) {
      dispatch(handleDeleteBoard(board._id))
      dispatch(toggleDeleteBoard())
      dispatch(getAllBoard())
      return
    }
    dispatch(handleDeleteTask({ boardId: board._id, taskId: task._id }))
    // dispatch(getSingleBoard(board._id))
  }

  useEffect(() => {
    const handleBackdropClick = (e: MouseEvent) => {
      // Check if the click event target is outside the modal
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        dispatch(closeDeleteModal())
      }
    }

    // Attach event listener when modal is open
    if (deleteBoard || deleteTask) {
      document.addEventListener('mousedown', handleBackdropClick)
    }

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleBackdropClick)
    }
  }, [deleteTask, dispatch, deleteBoard])

  return (
    <div
      className={` ${
        darkMode === 'light' ? 'bg-[#fff]' : 'bg-[#2B2C37]'
      } transition-all duration-500 ${
        deleteBoard || deleteTask
          ? ' md:top-[250px] top-[150px] z-30 '
          : ' top-[-500px]'
      }  w-[320px] sm:w-[400px]  md:w-[450px] gap-4 flex flex-col fixed  left-0 right-0 mx-auto p-6 my-auto rounded-md overflow-hidden`}
      ref={modalRef}
    >
      <div className='flex flex-col gap-4'>
        <h3 className='capitalize text-[#EA5555] font-bold'>
          Delete this {deleteCategory}?
        </h3>
        <p className='text-[13px] text-[#828FA3]'>
          {`Are you sure you want to delete the ${
            deleteBoard ? `${board.boardName} board?` : `${task.title} task?`
          }  This
          action will remove all columns and tasks and cannot be reversed.`}
        </p>
        <div className='flex items-center gap-4 justify-center'>
          <button
            className='bg-[#EA5555] text-[#fff] px-6 w-[150px] rounded-[20px] py-2'
            onClick={() => handleDelete()}
          >
            Delete
          </button>
          <button
            onClick={() => dispatch(closeDeleteModal())}
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
