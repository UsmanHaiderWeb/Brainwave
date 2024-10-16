import React, { memo } from 'react'
import PricingSection from './PricingSection'
import PageHeadingLines from './PageHeadingLines'
import SignupBTNcomponent from './SignupBTNcomponent'

const Page9 = () => {
  const content1 = [
    'An AI chatbot that can understand your queries',
    'Personalized recommendations based on your preferences',
    'Ability to explore the app and its features without any cost'
  ]
  const content2 = [
    'An advanced AI chatbot that can understand complex queries',
    'An analytics dashboard to track your conversations',
    'Priority support to solve issues quickly',
  ]
  const content3 = [
    'An AI chatbot that can understand your queries',
    'Personalized recommendations based on your preferences',
    'Ability to explore the app and its features without any cost'
  ]

  return (
    <div>
      <PageHeadingLines line="[  Get started with Brainwave  ]" title="Pay once, use forever" />
      <div className='flex justify-center items-center lg:flex-nowrap flex-wrap gap-5 xl:gap-x-5 lg:gap-x-3 my-16'>
        <PricingSection title="Basic" headColor="text-[#FFC876]" headCon="AI chatbot, personalized recommendations" price="0" content={content1} />
        <PricingSection title="Premium" headColor="text-[#AC6AFF]" headCon="Advanced AI chatbot, priority support, analytics dashboard" price="9.9" content={content2} />
        <PricingSection title="Organization" headColor="text-[#FF776F]" headCon="Custom AI chatbot, advanced analytics, dedicated account" price="99" content={content3} />
      </div>
      <div className='w-[200px] mx-auto mb-10'>
        <SignupBTNcomponent text="Subscribe" />
      </div>
    </div>
  )
}

export default memo(Page9)