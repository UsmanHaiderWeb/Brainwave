import React, { memo } from 'react'
import PageHeadingLines from './PageHeadingLines'
import Page7ArticleLayout from './Page7ArticleLayout'

const Page7 = () => {
  return (
    <div className='pb-20'>
      <PageHeadingLines line="[  Ready to get started  ]" title="We're taking about" />
      <div className='flex justify-center items-center sm:flex-row flex-col gap-5 md:-mt-10 lgtab:mt-20 mt-10'>
            <div className='flex gap-5 flex-col'>
                <Page7ArticleLayout image="/page7Article1.webp" releasingCon="DONE" loadingState="/page7tick.svg" content="Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free." title="Voice recognition"/>
                <Page7ArticleLayout image="/page7Article2.webp" releasingCon="IN PROGRESS" loadingState="/page7loader.svg" content="Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with." title="Chatbot customization"/>
            </div>
            <div className='flex gap-5 flex-col md:pt-60 sm:pt-32'>
                <Page7ArticleLayout image="/page7Article3.webp" releasingCon="IN PROGRESS" loadingState="/page7loader.svg" content="Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently." title="Gamification"/>
                <Page7ArticleLayout image="/page7Article4.webp" releasingCon="DONE" loadingState="/page7tick.svg" content="Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations." title="Integration with APIs"/>
            </div>
        </div>
    </div>
  )
}

export default memo(Page7)