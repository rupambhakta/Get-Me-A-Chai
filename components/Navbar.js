import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='bg-gray-900 text-white flex justify-between items-center h-12 px-4'>
            <div className="logo font-bold text-lg">GetMe-A-Chai</div>
            {/* <ul className="flex gap-4">
                <li className='cursor-pointer '>Home</li>
                <li className='cursor-pointer '>About</li>
                <li className='cursor-pointer '>Projects</li>
                <li className='cursor-pointer '>Sign in</li>
                <li className='cursor-pointer '>Login</li>
            </ul> */}
            <div>
                <Link href={"/login"}>
                    <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Login</button></Link>
            </div>
        </div>
    )
}

export default Navbar
