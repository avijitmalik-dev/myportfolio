import React from 'react'
import fintectImg from "../images/fintech-96.png"
import logisticImg from "../images/logistics.png"
import streamImg from "../images/streaming.png"
import restaurantImg from "../images/restaurant.png"

const Projects = () => {
  return (
    <div className='bg-slate-50 w-full flex flex-col gap-5 justify-center items-center pt-32 pb-20 md:pt-28'>
        <h1 className='pt-4 text-4xl font-serif font-bold uppercase mb-3'>project</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='flex flex-col items-center uppercase border border-gray-100 p-3 rounded-sm'>
                <img className='w-32 h-28' src={streamImg} alt="Streaming Application" />
                <h1>upstream</h1>
                <h2>Streaming application</h2>
            </div>
            <div className='flex flex-col items-center uppercase border border-gray-100 p-3 rounded-sm'>
                <img className='w-32 h-28' src={logisticImg} alt="Tracking Application" />
                <h1>logicore</h1>
                <h2>Tracking Application</h2>
            </div>
            <div className='flex flex-col items-center uppercase border border-gray-100 p-3 rounded-sm'>
                <img className='w-32 h-28' src={fintectImg} alt="Fintech Application" />
                <h1>OmniPay</h1>
                <h2>Fintech Application</h2>
            </div>
            <div className='flex flex-col items-center uppercase border border-gray-100 p-3 rounded-sm'>
                <img className='w-32 h-28' src={restaurantImg} alt="Restaurant Application" />
                <h1>City Grill</h1>
                <h2>Restaurant Application</h2>
            </div>
        </div>
    </div>
  )
}

export default Projects
