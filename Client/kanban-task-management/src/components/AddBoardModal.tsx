// import React from 'reac
// import { useState } from "react"
import { useState } from 'react'
import { useAppSelector } from '../hooks/hook'
// import InputComponent from './Input'
import ButtonComponent from './FormButton'
import BoardInput from './BoardInput'

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
}
export const AddBoardModal = () => {
  // const { boardName, ...columns } = useAppSelector((state) => state.board)

  const { createBoardModal } = useAppSelector((state) => state.modal)
  const [addboard, setAddBoard] = useState(initialState)
  const addColumn = () => {
    setAddBoard((prev) => ({
      ...prev,
      columns: [...prev.columns, { name: '', id: Date.now() }],
    }))
  }

  const deleteColumn = (index: number) => {
    setAddBoard((prev) => {
      const updatedColumns = [...prev.columns]
      updatedColumns.splice(index, 1)
      return { ...prev, columns: updatedColumns }
    })
  }

  return (
    <div
      className={` bg-white transition-all duration-500 ${
        createBoardModal ? 'top-32' : ' top-[-500px]'
      }  w-[320px] sm:w-[400px]  md:w-[450px] gap-4 flex flex-col fixed z-30 ${
        addboard.columns.length > 3 ? 'top-8' : 'top-24'
      }  left-0 right-0 mx-auto p-6 my-auto rounded-md overflow-hidden`}
    >
      <p className='capitalize text-[#828FA3]'>board name</p>
      <BoardInput
        type='text'
        value={addboard.boardName}
        name='boardName'
        handleChange={() => console.log('hello')}
      />
      <div>
        <p className='capitalize text-[#828FA3]'>board columns</p>
        <div className={`flex flex-col gap-4 mt-2`}>
          {addboard.columns.map((item, index) => {
            const { name } = item
            return (
              <div className='flex gap-y-2 items-center justify-between  gap-4 '>
                <BoardInput
                  value={name}
                  type='text'
                  name='name'
                  title='columns'
                  handleChange={() => console.log('helloe')}
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
          <ButtonComponent type='button' title='create new board' />
        </div>
      </div>
    </div>
  )
}
