import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[black] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/12bf81de-5875-4025-b1b1-a653fe51a2c6" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-orange-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Feel free to submit the form below or reach out to me by sending an email to <p className='text-blue-300 py-0'><a href="mailto:avinash.srikhakollu@gmail.com">avinash.srikhakollu@gmail.com</a></p></p>
            </div>
            <input className='p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2' type="email" placeholder='Email' name='email' />
            <textarea className='p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-[white] border-2 hover:bg-orange-600 hover:border-white-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}
export default Contact