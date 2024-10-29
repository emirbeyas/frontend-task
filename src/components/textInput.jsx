import React from 'react'

const TextInput = (props)  => {
    return (
    <input type={props.type} className='border border-gray-300 rounded-lg p-2 my-4 font-semibold' placeholder={props.placeholder} value={props.value} onChange={props.onChange} required/>
  )
}

export default TextInput