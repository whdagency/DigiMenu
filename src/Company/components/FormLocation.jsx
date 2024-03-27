import React from 'react'
import { Input } from '../../components/ui/input'
import ComboboxDemo from '../../components/custom/combobox'

const FormLocation = () => {
  return (
    <div className=' w-full p-5 h-96  border m-5 rounded-md'>
      <h1 className='border-b-2'>Location</h1>
      <div className='flex flex-col md:flex-row w-full py-5 gap-5 items-center'>
        <div className='w-full'>
          <Input className='' placeholder='Address' />
        </div>
        <div className='w-full'>
          <Input className='' placeholder='Address line 2' />
        </div>
      </div>
      <div className='flex flex-col md:flex-row w-full py-5 gap-5 items-center'>
        <div className='w-full'>
          <Input className='' placeholder='Postal code' />
        </div>
        <div className='w-full'>
          <Input className='' placeholder='City' />
        </div>
      </div>
      <div className='flex flex-col md:flex-row w-full py-5 gap-5 items-center'>
        <div className='w-full'>
          <Input className='' placeholder='State/Province/Region' />
        </div>
        <div className='w-full'>
          <Input className='' placeholder='Country' />
        </div>
      </div>
      <div className='w-full mt-5'>
        <label>Information About your company </label>
        <Input className='mt-5' placeholder='Company' />
      </div>
    </div>
  )
}

export default FormLocation
