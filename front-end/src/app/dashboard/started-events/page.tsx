"use client"
import DashboardNav from '@/components/common/Nav/dashboardnav'
import React, { useState } from 'react'
import Link from 'next/link'

const page = () => {
const [showPayNow, setShowPayNow] = useState(false);
const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <DashboardNav />
      <div className='min-h-[630px] bg-white'>
        <h1 className='p-6 text-black text-2xl mb-1 font-Raleway'>Started Events</h1>
        <div className='flex flex-wrap mx-8 gap-6 my-4'>
          <button className='inline-flex px-6 py-3 rounded-full bg-[#BDE3F0] text-black text-center font-Raleway text-base font-medium capitalize'>
            Your Events
          </button>
          {!showPayNow && (
            <button 
              onClick={() => setShowPayNow(true)} 
              className='inline-flex px-6 py-3 justify-center items-center rounded-full bg-blue-800 text-white'>
              Pay Now
            </button>
          )}
          {showPayNow && (
            <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
              <div className='bg-blue-800 p-8 rounded-lg shadow-md text-white'>
                <h2 className='text-xl font-semibold mb-4'>Choose Payment Method</h2>
                <h2 className='text-white text-center font-Raleway text-sm font-light leading-normal capitalize'>
                  Select the convenience of email payments or the <br /> security of Espro to complete your transaction.
                </h2>
                <a href="/pay">
                  <button className='block mx-auto px-16 py-2 bg-white text-black rounded-full mt-4'>
                    Pay by email
                  </button>
                </a>
                <button className='block mx-auto px-16 py-2 bg-white text-black rounded-full mt-4'>
                  Pay by espro
                </button>
                <button 
                  onClick={() => setShowPayNow(false)} 
                  className='block mx-auto px-4 py-2 bg-white text-black rounded-lg mt-2'>
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
        <div className='flex flex-wrap mx-8 gap-6 mt-4 mb-10'>
          <Link href="/events/info" className='h-[400px] w-full sm:w-[350px] p-6 bg-[#BDE3F0] '>
            <div className='bg-cover bg-center h-[260px] w-full' style={{ backgroundImage: `url('/startedevents.png')` }}>
            </div>
            <h1 className='text-black font-Raleway text-2xl font-semibold leading-normal capitalize py-4'>
              NFT Details
            </h1>
          </Link>
        </div>

        <Link 
  href="https://studio.myriadflow.com/" 
  target="_blank" 
  rel="noopener"
  className="bg-[#0F4C81] rounded-full px-10 py-4 text-white mx-10 relative"
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  Create Phygital Merch

  {isHovered && (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'absolute',
        top: '50%', // Adjust position based on your design
        left: '100%',
        transform: 'translateY(-50%)', // Center the tooltip vertically
        color: 'black',
        background: 'white',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '15px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        zIndex: 20,
        width: '300px',
        marginLeft: '50px'
      }}
    >
      <div className="font-bold">I want to create phygital merchandise with MyriadFlow</div>
    </div>
  )}
</Link>


      </div>
    </div>
  )
}

export default page