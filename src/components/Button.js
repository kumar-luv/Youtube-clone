import React from 'react'

const Button = ({name}) => {
  return (
    <div className='px-3 py-1 m-2 rounded-md bg-gray-300 hover:cursor-pointer hover:bg-black hover:text-white '>
        {name}
    </div>
  )
}

export default Button