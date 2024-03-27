import CardProfile from './components/CardProfile'
import ChangePassword from './components/ChangePassword'
import Profileform from './components/Profile'
import React from 'react'

const Profile = () => {
  return (
    <>

<div className='grid grid__content__Profile gap-4'>
        <CardProfile/>
        <Profileform/>
        {/* <ChangePassword/> */}
    </div>
    </>

  )
}

export default Profile
