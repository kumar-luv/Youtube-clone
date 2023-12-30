import React from 'react'
import { youtubeButtons } from '../constants'
import Button from './Button'
const ButtonList = () => {
  return (
    <div className='flex'>
      {youtubeButtons.map((button,index) => {
            return <Button key={index} name = {button}/>
        })}
    </div>
  )
}

export default ButtonList