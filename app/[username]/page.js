import React from 'react'

const Username = ({ params }) => {
  return (
    <>
      <div className='cover w-full relative'>
        <img className='object-cover w-full h-[300px]' src="/cover2.jpeg" alt="" />
        <div className='absolute -bottom-10 right-[46%] border border-black rounded-full'>
          <img width={120} height={120} src="/profilepic.png" alt="" />
        </div>
      </div>
      <div className="info my-16 flex flex-col gap-2 justify-center items-center">
        <div className='font-bold text-xl'>@{params.username}</div>
        <div className='text-slate-400'>Creating annimated art for VVT's</div>
        <div className='text-slate-400'>9,715 menber.  menbet@356 porti, 549/release</div>


        <div className="payment flex gap-3 w-[80%] mt-8">
          <div className="supporter w-1/2 bg-slate-900 rounded-lg p-5">
            {/* Show list of all the supporter as a leaderboard. */}
            <h2 className='text-lg font-bold my-5'>Supporters</h2>
            <ul className='text-lg'>
              <li className='mt-2'>Shubham donated $30 with a message ""</li>
              <li className='mt-2'>Shubham donated $30 with a message ""</li>
              <li className='mt-2'>Shubham donated $30 with a message ""</li>
              <li className='mt-2'>Shubham donated $30 with a message ""</li>
              <li className='mt-2'>Shubham donated $30 with a message ""</li>
              <li className='mt-2'>Shubham donated $30 with a message ""</li>
              <li className='mt-2'>Shubham donated $30 with a message ""</li>
              <li className='mt-2'>Shubham donated $30 with a message ""</li>
            </ul>
          </div>

          <div className="makePayment w-1/2 bg-slate-900 rounded-lg p-10">
            <h2 className='text-2xl font-bold my-5'>Make a payment</h2>
            <div className='flex gap-2 flex-col' >
              {/* input for name and message */}
              <div className='flex flex-col gap-2'>
                <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
                <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
              </div>

              <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Anount' />
              <button type="button" className="text-white bg-gradient-to-br from-purple-700 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-400 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>
            </div>
            {/* or choose from these amount */}
            <div className='flex gap-2 mt-5'>
              <button className='bg-slate-800 p-3 rounded-lg'> Pay $10</button>
              <button className='bg-slate-800 p-3 rounded-lg'> Pay $20</button>
              <button className='bg-slate-800 p-3 rounded-lg'> Pay $30</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Username
