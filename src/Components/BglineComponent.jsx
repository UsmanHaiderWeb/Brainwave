import React from 'react'

const BglineComponent = () => {
  return (
    <div className={`sm:flex hidden absolute top-0 left-1/2 -translate-x-1/2 z-[3] sm:w-[100vw] sm:h-[100vw] lgtab:w-[130vw] lgtab:h-[130vw] w-[200vh] h-[200vh] justify-center items-center`}>
        <div className='line'>
            <div className='line'>
                <div className='line'>
                    <div className='line'>
                        <div className='line'>
                            <div className='line'>
                                <div className='line'>
                                    <div className='line'>
                                        <div className='line'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BglineComponent