import { useState } from 'react'
import Menu from '../assets/icons/Menu.svg'
import CloseMenu from '../assets/icons/CloseMenu.svg'
import ThemeToggle from '../components/Theme.jsx'

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const MenuOpen = ()=>{
    setMenu(!menu)
  }
  return (
    <div>
      <nav className='flex justify-between items-center w-full h-20 bg-blue-600 text-white dark:bg-gray-700 p-8 z-50 lg:hidden'>
          <h1 className='cursor-pointer text-md'><a href="#"><i>MALIK © AB</i></a></h1>
          <ThemeToggle />
          <button onClick={ MenuOpen } className='outline-none'><img src={ menu ? CloseMenu : Menu  }  className={`w-10 h-10 text-white`}  /></button>        
      </nav>
      <div
  className={`overflow-hidden z-20 bg-blue-800 text-white dark:bg-gray-600 lg:hidden transition-all duration-500 ${
    menu
      ? 'max-h-60 opacity-100 absolute w-full'
      : 'max-h-0 opacity-0 absolute w-full'
  }`}
>
        <ul className='w-full flex justify-center items-center flex-col gap-2.5'>
          <li className='w-full p-2.5 flex justify-center hover:bg-blue-600 dark:hover:bg-gray-500' ><a href="#" className='w-full text-center
          '>HOME</a></li>
          <li className='w-full p-2.5 flex justify-center hover:bg-blue-600 dark:hover:bg-gray-500' ><a href="#" className='w-full text-center
          '>ABOUT</a></li>
          <li className='w-full p-2.5 flex justify-center hover:bg-blue-600 dark:hover:bg-gray-500' ><a href="#" className='w-full text-center
          '>PRODUCTS</a></li>
        </ul>
      </div>
      <nav className='hidden lg:flex justify-between items-center w-full h-30 bg-blue-600 dark:bg-gray-600  text-white pl-5 pr-5'>
        <h1 className='text-lg'>MALIK © AB</h1>
        <ul className='flex justify-center items-center gap-5 pr-5'>
          <li><a href="" className='hover:underline w-fit h-fit p-2.5 pl-5 pr-5 hover:bg-blue-800 dark:hover:bg-gray-500 rounded-4xl'>HOME</a></li>
          <li><a href="" className='hover:underline w-fit h-fit p-2.5 pl-5 pr-5 hover:bg-blue-800 dark:hover:bg-gray-500 rounded-4xl'>ABOUT</a></li>
          <li><a href="" className='hover:underline w-fit h-fit p-2.5 pl-5 pr-5 hover:bg-blue-800 dark:hover:bg-gray-500 rounded-4xl'>PRODUCT</a></li>
          <li><ThemeToggle /></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar