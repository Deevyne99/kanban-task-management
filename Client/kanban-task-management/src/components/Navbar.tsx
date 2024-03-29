import Button from './Button'
import logo from '../assets/logo.png'
import logoMobile from '../assets/mobile-logo.png'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6'
import {
  toggleDropDown,
  toggleSmallSidebar,
  toggleAddTask,
  closeDropDownModal,
} from '../features/modal/modalSlice'
import { useAppDispatch, useAppSelector } from '../hooks/hook'

const Navbar = () => {
  const dispatch = useAppDispatch()
  const { smallSidebar, darkMode, dropDown } = useAppSelector(
    (store) => store.modal
  )
  const { board } = useAppSelector((state) => state.allboard)
  // console.log(board)

  const handleToggleDropDown = () => {
    if (dropDown) {
      dispatch(closeDropDownModal())
    }
    dispatch(toggleDropDown())
  }

  return (
    <header
      className={`${
        smallSidebar ? 'z-40' : ''
      } flex shadow-sm z-10 fixed   top-0 left-0 items-center   border-b-[1px]   border-[#F4F7FD]  w-full ${
        darkMode === 'light'
          ? 'bg-[#fff] border-[#F4F7FD]'
          : 'bg-[#2B2C37] border-[#20212C]'
      } transition-all duration-300 `}
    >
      <div className='flex   md:border-r-[1px] border-r-[0pc]  items-center md:w-[300px] '>
        <div className=' md:px-4 px-2 py-6'>
          {darkMode === 'light' && (
            <img className='hidden md:flex' src={logo} alt='' />
          )}

          {darkMode === 'dark' && (
            <div className='md:flex hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='153'
                height='26'
                viewBox='0 0 153 26'
                fill='none'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M44.56 24.9999V19.6559L46.48 17.5439L50.928 24.9999H56.368L50.064 14.5679L56.4 7.52788H50.48L44.56 13.8319V0.775879H39.76V24.9999H44.56ZM63.92 25.3839C66.096 25.3839 67.8453 24.7119 69.168 23.3679V24.9999H73.648V13.4799C73.648 12.2212 73.3333 11.1172 72.704 10.1679C72.0747 9.21855 71.1947 8.47721 70.064 7.94388C68.9333 7.41055 67.632 7.14388 66.16 7.14388C64.304 7.14388 62.6773 7.57055 61.28 8.42388C59.8827 9.27721 58.928 10.4292 58.416 11.8799L62.256 13.7039C62.5547 12.9359 63.0293 12.3172 63.68 11.8479C64.3307 11.3785 65.0827 11.1439 65.936 11.1439C66.832 11.1439 67.5413 11.3679 68.064 11.8159C68.5867 12.2639 68.848 12.8185 68.848 13.4799V13.9599L64.016 14.7279C61.9253 15.0692 60.368 15.7199 59.344 16.6799C58.32 17.6399 57.808 18.8559 57.808 20.3279C57.808 21.9065 58.3573 23.1439 59.456 24.0399C60.5547 24.9359 62.0427 25.3839 63.92 25.3839ZM63.376 21.4159C63.7813 21.7145 64.2827 21.8639 64.88 21.8639C66.0747 21.8639 67.0347 21.4905 67.76 20.7439C68.4853 19.9972 68.848 19.0905 68.848 18.0239V17.4799L64.88 18.1839C64.1973 18.3119 63.6747 18.5305 63.312 18.8399C62.9493 19.1492 62.768 19.5919 62.768 20.1679C62.768 20.7012 62.9707 21.1172 63.376 21.4159ZM81.968 24.9999V14.7919C81.968 13.7892 82.2667 12.9839 82.864 12.3759C83.4613 11.7679 84.2293 11.4639 85.168 11.4639C86.1067 11.4639 86.8747 11.7679 87.472 12.3759C88.0693 12.9839 88.368 13.7892 88.368 14.7919V24.9999H93.168V13.7679C93.168 12.4452 92.8907 11.2879 92.336 10.2959C91.7813 9.30388 91.008 8.53055 90.016 7.97588C89.024 7.42121 87.8667 7.14388 86.544 7.14388C85.4347 7.14388 84.4533 7.35188 83.6 7.76788C82.7467 8.18388 82.096 8.81855 81.648 9.67188V7.52788H77.168V24.9999H81.968ZM110.704 24.1679C109.36 24.9785 107.835 25.3839 106.128 25.3839C105.061 25.3839 104.064 25.2079 103.136 24.8559C102.208 24.5039 101.435 23.9972 100.816 23.3359V24.9999H96.336V0.775879H101.136V8.99988C102.373 7.76255 104.048 7.14388 106.16 7.14388C107.824 7.14388 109.328 7.54921 110.672 8.35988C112.016 9.17055 113.083 10.2639 113.872 11.6399C114.661 13.0159 115.056 14.5572 115.056 16.2639C115.056 17.9492 114.667 19.4852 113.888 20.8719C113.109 22.2585 112.048 23.3572 110.704 24.1679ZM105.552 21.0639C104.251 21.0639 103.189 20.6212 102.368 19.7359C101.547 18.8505 101.136 17.6932 101.136 16.2639C101.136 14.8559 101.547 13.7039 102.368 12.8079C103.189 11.9119 104.251 11.4639 105.552 11.4639C106.875 11.4639 107.963 11.9172 108.816 12.8239C109.669 13.7305 110.096 14.8772 110.096 16.2639C110.096 17.6719 109.669 18.8239 108.816 19.7199C107.963 20.6159 106.875 21.0639 105.552 21.0639ZM128.528 23.3679C127.205 24.7119 125.456 25.3839 123.28 25.3839C121.403 25.3839 119.915 24.9359 118.816 24.0399C117.717 23.1439 117.168 21.9065 117.168 20.3279C117.168 18.8559 117.68 17.6399 118.704 16.6799C119.728 15.7199 121.285 15.0692 123.376 14.7279L128.208 13.9599V13.4799C128.208 12.8185 127.947 12.2639 127.424 11.8159C126.901 11.3679 126.192 11.1439 125.296 11.1439C124.443 11.1439 123.691 11.3785 123.04 11.8479C122.389 12.3172 121.915 12.9359 121.616 13.7039L117.776 11.8799C118.288 10.4292 119.243 9.27721 120.64 8.42388C122.037 7.57055 123.664 7.14388 125.52 7.14388C126.992 7.14388 128.293 7.41055 129.424 7.94388C130.555 8.47721 131.435 9.21855 132.064 10.1679C132.693 11.1172 133.008 12.2212 133.008 13.4799V24.9999H128.528V23.3679ZM124.24 21.8639C123.643 21.8639 123.141 21.7145 122.736 21.4159C122.331 21.1172 122.128 20.7012 122.128 20.1679C122.128 19.5919 122.309 19.1492 122.672 18.8399C123.035 18.5305 123.557 18.3119 124.24 18.1839L128.208 17.4799V18.0239C128.208 19.0905 127.845 19.9972 127.12 20.7439C126.395 21.4905 125.435 21.8639 124.24 21.8639ZM141.328 14.7919V24.9999H136.528V7.52788H141.008V9.67188C141.456 8.81855 142.107 8.18388 142.96 7.76788C143.813 7.35188 144.795 7.14388 145.904 7.14388C147.227 7.14388 148.384 7.42121 149.376 7.97588C150.368 8.53055 151.141 9.30388 151.696 10.2959C152.251 11.2879 152.528 12.4452 152.528 13.7679V24.9999H147.728V14.7919C147.728 13.7892 147.429 12.9839 146.832 12.3759C146.235 11.7679 145.467 11.4639 144.528 11.4639C143.589 11.4639 142.821 11.7679 142.224 12.3759C141.627 12.9839 141.328 13.7892 141.328 14.7919Z'
                  fill='white'
                />
                <rect y='1' width='6' height='25' rx='2' fill='#635FC7' />
                <rect
                  opacity='0.75'
                  x='9'
                  y='1'
                  width='6'
                  height='25'
                  rx='2'
                  fill='#635FC7'
                />
                <rect
                  opacity='0.5'
                  x='18'
                  y='1'
                  width='6'
                  height='25'
                  rx='2'
                  fill='#635FC7'
                />
              </svg>
            </div>
          )}
          <img className='md:hidden flex' src={logoMobile} alt='' />
        </div>
      </div>
      <nav className='flex   md:px-4 px-2 items-center md:w-[80%] w-full justify-between '>
        <h1 className='capitalize md:flex hidden md:text-2xl lg:text-4xl font-Plus font-bold'>
          {board?.boardName}
        </h1>
        <button
          onClick={() => dispatch(toggleSmallSidebar())}
          className='md:hidden flex justify-center items-center gap-2 capitalize font-Plus font-bold'
        >
          {board?.boardName}{' '}
          {smallSidebar ? (
            <FaAngleUp className='text-purple' />
          ) : (
            <FaAngleDown className='text-purple' />
          )}
        </button>
        <div className='flex gap-4 items-center'>
          <div className='md:flex hidden '>
            <Button
              title='+ add task'
              onClick={() => dispatch(toggleAddTask())}
              type='button'
            />
          </div>
          <button className='md:hidden w-[50px] hover:bg-hover h-[30px] bg-purple rounded-2xl font-bold text-xl justify-center items-center text-white '>
            +
          </button>
          <button onClick={() => handleToggleDropDown()}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='5'
              height='20'
              viewBox='0 0 5 20'
              fill='none'
            >
              <circle cx='2.30769' cy='2.30769' r='2.30769' fill='#828FA3' />
              <circle cx='2.30769' cy='10' r='2.30769' fill='#828FA3' />
              <circle cx='2.30769' cy='17.6923' r='2.30769' fill='#828FA3' />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
