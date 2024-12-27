import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='w-full flex flex-row justify-between mb-10 mt-40'>
        <div className='w-1/3'>
            <img src={assets.logo} className='w-40'/>
            <p className='mt-5 text-sm'>xxx xxxxx xxxx x xxxx xxxx  xxxxxxxxx xxxxxx xxx xxxxxxxxxx xxxxxxxx xxxxxx xxxxxxxx xxxx xxxxxxxxxx xxx xxx xxxxx xx x xxxxxx xxxxxxx x x xxxxxxxxxx xxx.</p>
        </div>

        <div>
            <p className='font-bold'>COMPANY</p>
            <ul className='mt-5 text-sm text-gray-600'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='font-bold'>GET IN TOUCH</p>
            <ul className='mt-5 text-sm text-gray-600'>
                <li>+1-212-456-7890</li>
                <li>abcdefg@gmail.com</li>
            </ul>
        </div>
      </div>
      <div className='mt-10'>
        <hr />
        <p className='text-sm text-gray-600 mt-3 text-center mb-5'>Copyright 2024@ Prescripto - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
