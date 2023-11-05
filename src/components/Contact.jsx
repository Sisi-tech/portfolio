import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#e5ddf4] flex justify-center items-center p-4'>
      <form method='POST' action='https://getform.io/f/447062fc-e66f-4e67-917f-2a33187594ae' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8 '>
          <p className='text-4xl border-b-4 border-purple-800 inline'>Contact</p>
          <p className='py-4'>Submit the form below or shoot me an email - sisiwang242@gmail.com</p>
        </div>
        <input type="text" placeholder='Name' name='name' className='p-2' />
        <input type="email" placeholder='Email' name='email' className='my-4 p-2'/>
        <textarea className='p-2'name='message' rows='10' />
        <button className='px-4 py-4 my-8 mx-auto flex items-center border-2 border-purple-600 rounded-full hover:bg-purple-600 hover:border-purple-600'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact