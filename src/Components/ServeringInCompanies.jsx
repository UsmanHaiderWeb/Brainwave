import React from 'react'

const ServeringInCompanies = () => {
  return (
    <div className='py-24 relative z-[8]'>
        <h4 className='w-[80%] mobile:w-[90%] micro:w-[95%] text-center font-["codePro"] mb-20 mx-auto'>Helping people to create beautiful content at</h4>
        <div className='flex justify-evenly items-center md:flex-nowrap flex-wrap gap-x-9 micro:gap-x-5 px-10 micro:px-2 gap-y-5'>
            <div className='flex justify-center items-center gap-x-3'>
                <img src="/figma.png" alt="First Company" className='w-10 micro:w-6' />
                <div className='font-["codePro"]'>Figma</div>
            </div>
            <div className='flex justify-center items-center gap-x-3'>
                <img src="/notion.png" alt="Second Company" className='w-10 micro:w-6' />
                <div className='font-["codePro"]'>Notion</div>
            </div>
            <div className='flex justify-center items-center gap-x-3'>
                <img src="/firebase.webp" alt="Third Company" className='w-10 micro:w-6' />
                <div className='font-["codePro"]'>FireBase</div>
            </div>
            <div className='flex justify-center items-center gap-x-3'>
                <img src="/discord.png" alt="Forth Company" className='w-10 micro:w-6' />
                <div className='font-["codePro"]'>Discord</div>
            </div>
            <div className='flex justify-center items-center gap-x-3'>
                <img src="/newApp.png" alt="Fifth Company" className='w-10 micro:w-6' />
                <div className='font-["codePro"]'>Flowla</div>
            </div>
        </div>
    </div>
  )
}

export default ServeringInCompanies