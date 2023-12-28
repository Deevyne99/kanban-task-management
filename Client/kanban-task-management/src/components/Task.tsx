const Task = () => {
  return (
    <div
      className={`bg-white  w-[300px] p-4 flex flex-col gap-2 shadow-lg rounded-md`}
      onClick={() => console.log('hello world')}
    >
      <h4 className='font-bold font-Plus text-normal'>
        Build UI for onboarding flow
      </h4>
      <p className='text-[#828FA3] font-semibold'>
        <span>0</span> of <span>3</span> subtask
      </p>
    </div>
  )
}

export default Task
