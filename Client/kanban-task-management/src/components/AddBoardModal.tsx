// import React from 'reac
// import { useState } from "react"
import { useState, ChangeEvent, useRef, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks/hook'
// import InputComponent from './Input'
import ButtonComponent from './FormButton'
import BoardInput from './BoardInput'
import { toggleCreateBoard } from '../features/modal/modalSlice'

const initialState = {
  boardName: '',
  columns: [
    {
      name: '',
    },
    {
      name: '',
    },
    {
      name: '',
    },
  ],
  isError: false,
}
export const AddBoardModal = () => {
  // const { boardName, ...columns } = useAppSelector((state) => state.board)

  const { createBoardModal, boardHeader, darkMode } = useAppSelector(
    (state) => state.modal
  )
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
    }
    // console.log('hello')
  }

  const addColumn = () => {
    setAddBoard((prev) => ({
      ...prev,
      columns: [...prev.columns, { name: '', id: Date.now() }],
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
      if (
        createBoardModal &&
        modalRef.current &&
        !modalRef.current.contains(e.target as Node)
      ) {
        // Close all modals here
        // For example, you can dispatch an action to close the modal
        console.log(createBoardModal)

        dispatch(toggleCreateBoard())
        console.log(createBoardModal)
      }
    }

    // Attach event listener when modal is open
    if (createBoardModal) {
      document.addEventListener('click', handleBackdropClick)
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
        createBoardModal ? 'md:top-28 top-8' : ' top-[-600px]'
      }  w-[320px] sm:w-[400px]  md:w-[450px] gap-2 flex flex-col fixed z-30 ${
        addboard.columns.length > 3 ? 'top-8' : 'top-24'
      }  left-0 right-0 mx-auto p-6 my-auto rounded-md overflow-hidden`}
    >
      <h2 className='font-Plus font-semibold capitalize'>{boardHeader}</h2>
      <p className='capitalize text-[#828FA3]'>name</p>
      <BoardInput
        type='text'
        value={addboard.boardName}
        name='boardName'
        error={addboard.isError}
        handleChange={handleBoardName}
      />
      <div>
        <p className='capitalize text-[#828FA3] mt-4'>columns</p>
        <div className={`flex flex-col gap-4 mt-2`}>
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
          <ButtonComponent
            onClick={() => handleSubmit()}
            type='button'
            title='create new board'
          />
        </div>
      </div>
    </div>
  )
}
