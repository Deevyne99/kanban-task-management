// import React from 'reac
// import { useState } from "react"
import { useState, ChangeEvent, useRef, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks/hook'
// import InputComponent from './Input'
import ButtonComponent from './FormButton'
import BoardInput from './BoardInput'
import { closeCreateBoardModal } from '../features/modal/modalSlice'
// import { addColumn, createBoard } from '../features/Boards/BoardSlice'
import { HashLoader } from 'react-spinners'
import { createBoard } from '../features/Boards/BoardSlice'
import { ColumnProps } from '../interface/interface'

export const AddBoardModal = () => {
  const { loading } = useAppSelector((state) => state.board)
  const { board } = useAppSelector((state) => state.allboard)

  const { createBoardModal, boardHeader, darkMode, editBoard } = useAppSelector(
    (state) => state.modal
  )

  const dispatch = useAppDispatch()
  const modalRef = useRef<HTMLDivElement>(null)

  const cols = [{ name: '', tasks: [] }]

  const [columns, setColumns] = useState<ColumnProps[]>(cols)
  const [error, setError] = useState(false)

  const [boardName, setBoardName] = useState(
    editBoard && board.boardName ? board.boardName : ''
  )
  useEffect(() => {
    setBoardName(editBoard ? board.boardName : '')
    setColumns(editBoard ? board.columns : [{ name: '', tasks: [] }])
  }, [editBoard, board])

  const handleInputChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target
    const updatedColumns = [...columns]
    updatedColumns[index] = { ...updatedColumns[index], [name]: value }
    setColumns(updatedColumns)
  }

  const handleSubmit = () => {
    if (!boardName || !columns) {
      setError(true)
      return
    }

    if (editBoard) {
      console.log('editing board')
      return
    }
    dispatch(createBoard({ boardName, columns }))
  }

  const addColumn = () => {
    // Create a new column object with a unique ID
    const newColumn = { name: '', date: Date.now(), tasks: [] }

    // Update the state by adding the new column
    setColumns([...columns, newColumn])
  }

  const deleteColumn = (indexToDelete: number) => {
    // Ensure there's more than one column before deleting
    if (columns.length <= 1) {
      return // If there's only one column, don't delete
    }

    // Filter out the column at the specified index
    const updatedColumns = columns.filter((_, index) => index !== indexToDelete)

    // Update the state with the filtered columns
    setColumns(updatedColumns)
  }

  useEffect(() => {
    const handleBackdropClick = (e: MouseEvent) => {
      // Check if the click event target is outside the modal
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        dispatch(closeCreateBoardModal())
      }
    }

    // Attach event listener when modal is open
    if (createBoardModal) {
      document.addEventListener('mousedown', handleBackdropClick)
    }

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleBackdropClick)
    }
  }, [createBoardModal, dispatch])

  // console.log(addboard.boardName)

  return (
    <div
      ref={modalRef}
      className={` ${
        darkMode === 'light' ? 'bg-[#fff]' : 'bg-[#2B2C37]'
      } transition-all duration-500 ${
        createBoardModal ? 'md:top-28 top-8 z-20' : ' top-[-600px]'
      }  w-[90%]  md:w-[450px] gap-2 flex flex-col fixed  ${
        columns.length > 3 ? 'top-8' : 'top-24'
      }  left-0 right-0 mx-auto py-6 px-4 my-auto rounded-md overflow-hidden`}
    >
      <h2 className='font-Plus font-semibold capitalize'>{boardHeader}</h2>
      <div className='w-full'>
        <p className='capitalize text-[#828FA3]'>name</p>
        <BoardInput
          type='text'
          value={boardName}
          name='boardName'
          error={error}
          handleChange={(e: ChangeEvent<HTMLInputElement>) =>
            setBoardName(e.target.value)
          }
        />
      </div>
      <div>
        <p className='capitalize text-[#828FA3] mt-4'>columns</p>
        <div className={`flex flex-col gap-4 mt-1`}>
          {columns.map((item, index) => {
            const { name } = item
            return (
              <div
                key={index}
                className='flex gap-y-2 items-center justify-between  gap-4 '
              >
                <BoardInput
                  value={name}
                  type='text'
                  name='name'
                  title='columns'
                  error={error}
                  handleChange={(e) => handleInputChange(index, e)}
                />
                <button
                  className='flex items-center mt-1'
                  onClick={() => deleteColumn(index)}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='15'
                    height='15'
                    viewBox='0 0 15 15'
                    fill='none'
                  >
                    <rect
                      x='12.728'
                      width='3'
                      height='18'
                      transform='rotate(45 12.728 0)'
                      fill='#828FA3'
                    />
                    <rect
                      y='2.12109'
                      width='3'
                      height='18'
                      transform='rotate(-45 0 2.12109)'
                      fill='#828FA3'
                    />
                  </svg>
                </button>
              </div>
            )
          })}
        </div>
        <div className='mt-4 flex justify-center'>
          <ButtonComponent
            onClick={addColumn}
            type='button'
            title='+ add new column'
          />
        </div>
        <div className='mt-4 flex justify-center'>
          {loading ? (
            <HashLoader
              color='#635FC7'
              className='justify-center items-center mx-auto'
            />
          ) : (
            <ButtonComponent
              onClick={() => handleSubmit()}
              type='button'
              title={'create new board'}
            />
          )}
        </div>
      </div>
    </div>
  )
}
