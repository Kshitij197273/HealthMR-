// import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT<span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to our innovative healthcare platform, where you can connect with trusted doctors, access AI-powered services, and receive instant care.</p>
          {/* <p>HealthMR is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, HealthMR! is here to support you every step of the way.</p> */}
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at  HealthMR is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>Why<span className='text-gray-700 font-semibold'>Choose Us?</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-gray-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Comprehensive Care: </b>
          <p>From basic healthcare knowledge to specialized telemedicine services for rural areas, we cover all aspects of your health.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-gray-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>AI-Powered Services:</b>
          <p>Leverage our AI symptoms checker and AI-generated prescriptions for accurate and efficient healthcare solutions tailored to your needs.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-gray-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Community Engagement:</b>
          <p > Join our healthcare-focused social media app to connect, share, and learn with others on their health journeys.</p>
        </div>
      </div>

    </div>
  )
}

export default About
