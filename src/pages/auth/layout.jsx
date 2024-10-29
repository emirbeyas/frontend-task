import React from 'react'

const AuthLayout = ({ children }) => {
    return (
        <div className='min-[470px]:w-[460px] h-screen min-[470px]:mx-auto mx-2 content-center'>
            {children}
        </div>
    )
}

export default AuthLayout