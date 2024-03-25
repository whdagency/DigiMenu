import ChangePassword from './components/ChangePassword'
import Profileform from './components/Profile'
import React from 'react'

const Profile = () => {
  return (
    <div className='flex'>
        <Profileform/>
        <ChangePassword/>
    </div>
  )
}

export default Profile
