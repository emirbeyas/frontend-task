import React from 'react'

const InputButton = (props) => {
    const buttonText = props.value;
    return (
    <input type="submit" className='bg-[#B4FE3A] border border-gray-300 rounded-lg p-2 my-4 font-semibold' value={buttonText}/>
  )
}

export default InputButton