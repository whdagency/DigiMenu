import FormContact from './components/FormContact'
import FormLocation from './components/FormLocation'
import FormMenu from './components/FormMenu'
import SocialMedia from './components/SocialMedia'
import React from 'react'

const company = () => {
  return (
    <div>
        
      <h1 className='text-center p-3'>No banner present you have not yet set up a banner for your company. Click here to add an image.</h1>
      {/* <div className='h-20  bg-slate-300 m-5 rounded-lg'>
      </div> */}
      <div className='flex  '>
        <FormMenu />
        <FormContact />
      </div>
      <div className='flex '>
        <FormLocation />
        <SocialMedia />
      </div>
    </div>
  )
}

export default company
