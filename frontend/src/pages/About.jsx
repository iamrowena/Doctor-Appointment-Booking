import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>About <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="about image" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis labore rem libero voluptate assumenda veniam itaque laborum, reiciendis quibusdam aperiam a porro sit quam, voluptas similique repellat corporis, nostrum deserunt? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, vel.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ad asperiores vero quos obcaecati. Quas quibusdam provident sed rerum accusamus, explicabo corrupti possimus ut molestias vel nam asperiores similique officia eius obcaecati cupiditate nesciunt sequi quia aspernatur suscipit, iusto ad perspiciatis hic laborum. Possimus, doloribus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, harum.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, praesentium enim tenetur debitis asperiores dignissimos eius amet accusantium fugit! Consectetur harum porro eveniet alias natus dicta tempore corrupti eum hic.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFIENCY:</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi iusto similique ea. Praesentium?</p>
        </div>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVIENCE:</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus iusto recusandae eaque nobis!</p>
        </div>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, totam culpa?</p>
        </div>
      </div>

    </div>
  )
}

export default About