// import React from 'reac
// import { useState } from "react"
import { useState, ChangeEvent, useRef, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks/hook'
// import InputComponent from './Input'
import ButtonComponent from './FormButton'
import BoardInput from './BoardInput'
import {
  toggleCreateBoard,
  closeCreateBoardModal,
} from '../features/modal/modalSlice'
import { createBoard } from '../features/Boards/BoardSlice'
import { HashLoader } from 'react-spinners'

const initialState = {
  boardName: '',
  columns: [
    {
      name: '',
      tasks: [],
    },
    {
      name: '',
      tasks: [],
    },
  ],
  isError: false,
}

export const AddBoardModal = () => {
  // const { boardName, ...columns } = useAppSelector((state) => state.board)

  const { createBoardModal, boardHeader, darkMode } = useAppSelector(
    (state) => state.modal
  )
  const { loading } = useAppSelector((state) => state.board)
  const dispatch = useAppDispatch()
  const modalRef = useRef(null)
  const [addboard, setAddBoard] = useState(initialState)

  const handleBoardName = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setAddBoard((prev) => {
      return { ...prev, boardName: value }
    })
  }

  const handleColumnChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target
    setAddBoard((prev) => {
      const updatedColumns = [...prev.columns]
      updatedColumns[index].name = value
      return { ...prev, columns: updatedColumns }
    })
  }

  const handleSubmit = () => {
    const { boardName, columns } = addboard
    if (!boardName || !columns) {
      setAddBoard((prev) => {
        return { ...prev, isError: true }
      })
    } else {
      dispatch(createBoard(addboard))
    }

    // console.log('hello')
  }

  const addColumn = () => {
    setAddBoard((prev) => ({
      ...prev,
      columns: [...prev.columns, { name: '', id: Date.now(), tasks: [] }],
    }))
  }

  const deleteColumn = (index: number) => {
    setAddBoard((prev) => {
      const updatedColumns = [...prev.columns]
      if (updatedColumns.length === 1) {
        return { ...prev }
      }
      updatedColumns.splice(index, 1)
      return { ...prev, columns: updatedColumns }
    })
  }

  useEffect(() => {
    const handleBackdropClick = (e: MouseEvent) => {
      // Check if the click event target is outside the modal
      if (!modalRef.current.contains(e.target)) {
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

  return (
    <div
      ref={modalRef}
      className={` ${
        darkMode === 'light' ? 'bg-[#fff]' : 'bg-[#2B2C37]'
      } transition-all duration-500 ${
        createBoardModal ? 'md:top-28 top-8 z-20' : ' top-[-600px]'
      }  w-[90%]  md:w-[450px] gap-2 flex flex-col fixed  ${
        addboard.columns.length > 3 ? 'top-8' : 'top-24'
      }  left-0 right-0 mx-auto py-6 px-4 my-auto rounded-md overflow-hidden`}
    >
      <h2 className='font-Plus font-semibold capitalize'>{boardHeader}</h2>
      <div className='w-full'>
        <p className='capitalize text-[#828FA3]'>name</p>
        <BoardInput
          type='text'
          value={addboard.boardName}
          name='boardName'
          error={addboard.isError}
          handleChange={handleBoardName}
        />
      </div>
      <div>
        <p className='capitalize text-[#828FA3] mt-4'>columns</p>
        <div className={`flex flex-col gap-4 mt-1`}>
          {addboard.columns.map((item, index) => {
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
                  error={addboard.isError}
                  handleChange={(e) => handleColumnChange(index, e)}
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
