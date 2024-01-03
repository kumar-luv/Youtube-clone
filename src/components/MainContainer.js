import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='w-10/12 dark:bg-gray-900 ml-24'>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer