import React from 'react'
import Page3CardComponent from './Page3CardComponent'

const Page3 = () => {
  return (
    <div className='flex justify-center items-center flex-col bg-[url("/gradientBG.webp")] sm:bg-contain lgtab:bg-contain bg-cover bg-no-repeat bg-center'>
        <h1 className='sm:w-[700px] w-[90%] text-center text-[50px] leading-[60px] lgtab:text-[40px] lgtab:leading-[50px] tablet:text-[40px] tablet:leading-[50px] mini:text-[36px] mini:leading-[45px] mobile:text-[32px] mobile:leading-[38px] mobile:text-left micro:text-[28px] micro:leading-[35px] micro:text-left'>Chat Smarter, Not Harder with Brainwave</h1>
        <div className='flex justify-center items-center sm:gap-10 gap-6 flex-wrap py-20'>
          <Page3CardComponent title="Ask anything" con="Let users find quickly answers to questions without having to search through multiple sources." link="#" bgImgLink="/image-2-DhSZK1Xt.webp" svg="/comment.svg" />
          <Page3CardComponent title="Improve everyday" con="The app uses natural language processing to understand user's queries andprovide accurate and relevant responses." link="#" bgImgLink="/service-3-CruucQ7U.webp" svg="/comment.svg" />
          <Page3CardComponent title="Connect everywhere" con="Connect with AI chatbot from anywhere, on any device, making itmore accessable and convenient." link="#" bgImgLink="/service-2-C-pPDQl7.webp" svg="/comment.svg" />
          <Page3CardComponent title="Fast responding" con="Let users find quickly answers to questions without having to search through multiple sources." link="#" bgImgLink="/service-1-bvSONSha.webp" svg="/comment.svg" />
          <Page3CardComponent title="Ask anything" con="The app uses natural language processing to understand user's queries andprovide accurate and relevant responses." link="#" bgImgLink="/image-2-DhSZK1Xt.webp" svg="/comment.svg" />
          <Page3CardComponent title="Improve everyday" con="Let users find quickly answers to questions without having to search through multiple sources." link="#" bgImgLink="/service-3-CruucQ7U.webp" svg="/comment.svg" />
        </div>
    </div>
  )
}

export default Page3