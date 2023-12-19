import React from 'react'

const Contact = () => {
  return (
    <form>
        <input type="text" maxLength={50} placeholder='Subject' />
        <input type="text" maxLength={50} placeholder='Email' />
        <input type="text" maxLength={50} placeholder='Mobile' />
        <input type="text" maxLength={50} placeholder='Issue description' />
        <button type='submit'>Submit Query</button>
      
    </form>
  )
}

export default Contact
