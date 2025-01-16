import { ChevronDown } from 'lucide-react'
import React from 'react'

const NavItems = () => {
  return (
    <nav className='text-sm text-lighterBlue'>
        <ul className='flex justify-between gap-7'>
            <li className='flex gap-1'>
                <p className='text-md text-lighterBlue font-semibold'>Features</p>
                <ChevronDown className='text-md h-5 mt-[1.5px]' />
            </li>
            <li className='flex gap-1'>
                <p className='text-md text-lighterBlue font-semibold'>Resources</p>
                <ChevronDown className='text-md h-5 mt-[1.5px]' />
            </li>
            <li className='flex gap-1'>
                <p className='text-md text-lighterBlue font-semibold'>Company</p>
                <ChevronDown className='text-md h-5 mt-[1.5px]' />
            </li>
            <li className='flex gap-1'>
                <p className='text-md text-lighterBlue font-semibold'>Pricing</p>
            </li>
        </ul>
    </nav>
  )
}

export default NavItems