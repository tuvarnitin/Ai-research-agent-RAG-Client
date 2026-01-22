import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <nav className="relative z-10 flex items-center md:justify-between justify-center py-8 px-20">
          <Link to={'/'} className="font-extrabold text-4xl hidden md:block">
          <img src="/images/1.png" className='w-[4vw] min-w-12' alt="" />
          </Link>
          <div className="flex gap-8 border border-zinc-700 px-1 rounded-full">
              <Link to={"#"} className='cursor-pointer py-1.5 px-2 rounded-full text-foreground/60 hover:text-foreground'>Link 1</Link>
              <Link to={"#"} className='cursor-pointer py-1.5 px-2 rounded-full text-foreground/60 hover:text-foreground'>Link 2</Link>
              <Link to={"#"} className='cursor-pointer py-1.5 px-2 rounded-full text-foreground/60 hover:text-foreground'>Link 3</Link>
              <Link to={"#"} className='cursor-pointer py-1.5 px-2 rounded-full text-foreground/60 hover:text-foreground'>Link 4</Link>
          </div>
          <div>
            <button className='border border-green-400 py-1 px-3 rounded-full cursor-pointer hidden md:block text-sm'>Login</button>
          </div>
      </nav>
  )
}

export default Navbar