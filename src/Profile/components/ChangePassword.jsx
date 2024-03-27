import React from 'react'
import { Input } from '../../components/ui/input'

const ChangePassword = () => {
    return (
        <div className='p-5 border m-5 rounded-md w-7/12 '>
            <h1 className='border-b-2'>Security</h1>
            <div className='w-full  py-10'>
                <label >New Password:</label>
                <Input className='my-3' placeholder='write password' />
                    <button className='bg-blue-500 text-white px-5 py-2 rounded-md mt-5'>Change password</button>
            </div>
        </div>
    )
}

export default ChangePassword
