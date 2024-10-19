// import React from 'react'
import { assets } from '../assets/assets'

const Emergency = () => {
  return (
    <div>
        <img src="ambulance_image" alt="" />
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>Emergency<span className='text-gray-700 font-semibold'> Services</span></p>
      </div>
        
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src= {assets.ambulance_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Book an ambulance with just a few taps and track it in real-time, ensuring immediate response in emergencies.</p>
          <p>HealthMR is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether youre booking your first appointment or managing ongoing care, HealthMR! is here to support you every step of the way.</p>
          <b className='text-gray-800'>Get Ambulance at Ur Local Areas!</b>
          <p>With our ambulance booking service, you can request an emergency vehicle instantly with real-time tracking to ensure the fastest response. Whether it s day or night, our platform connects you to nearby ambulances, ensuring quick medical assistance when every second counts</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>Instant <span className='text-gray-700 font-semibold'>Pharmacy Delivery</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-gray-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Delivery With-In 20 Minutes</b>
          <p>Order your medications online and have them delivered to your door within minutes, hassle-free and reliable.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-gray-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Prescription-Based Delivery</b>
          <p>Upload your prescription and receive your required medications promptly, straight to your home.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-gray-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>AI-Powered Health Insights</b>
          <p >Analyze your health data with AI to receive personalized recommendations for nutrition, fitness, and wellness.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-gray-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Voice Assistant for Healthcare</b>
          <p >Interact with an AI-powered voice assistant for quick answers to health queries and symptom checks.</p>
        </div>
      </div>

    </div>
  )
}

export default Emergency
