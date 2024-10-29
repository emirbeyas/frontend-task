import React from 'react'
import { useAuth } from '../../context/authContext'

const Profile = () => {

  const { logout, token } = useAuth();
  const payload = token.split('.')[1];
  const decodedPayload = JSON.parse(atob(payload));

  console.log(decodedPayload)

  return (
    <div className='h-screen content-center'>
      <div className='min-[470px]:w-[460px] min-[470px]:mx-auto mx-2 py-4 text-center bg-white'>
        <img src="https://media02.tr.beinsports.com/img/players/P2241.png" className='w-20 border border-gray-300 rounded-full mx-auto mb-4' alt='profile' />
        <h3 className='text-center text-2xl font-bold'>{decodedPayload['name']} {decodedPayload['surname']}</h3>
        <p className='text-center mt-2 text-gray-500 font-semibold'>{decodedPayload['email']}</p>
        <p className='text-center mt-2 text-gray-500 font-semibold'>{decodedPayload['mobile_phone']}</p>

        <button onClick={() => { logout() }} className='bg-black border border-gray-300 rounded-3xl px-3 py-1 mt-2 font-semibold text-white'>Logout</button>
      </div>
    </div>
  )
}

export default Profile