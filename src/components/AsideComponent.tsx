import ThemeSwitcher from '@/tools/ThemeSwitcher'
import React from 'react'

function AsideComponent() {
  return (
    <nav className='fixed left-1 inset-y-1 border-2 border-transparent dark:border-white bg-blue-700 w-20 rounded-xl '>
      <div className='flex flex-col justify-between items-center h-full py-2'>
        <div>
          <p className='text-white font-bold'>Sol Tech</p>
        </div>
        <div>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  )
}

export default AsideComponent