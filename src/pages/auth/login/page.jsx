import React, { useState } from 'react'
import AuthLayout from '../layout'
import { Link } from 'react-router-dom'
import TextInput from '../../../components/textInput'
import InputButton from '../../../components/button'
import { useAuth } from '../../../context/authContext'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const Login = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const payload = {
            email: email,
            password: pass
        }

        try {
            await axios.post('https://test-jokercrm.rteca.com/api/v1/login', payload)
                .then(response => {
                    if(response.data.access_token){
                        login(response.data.access_token);
                        navigate('/profile');
                    }
                });
        } catch (error) {
            alert(error)
        }
    }

    return (
        <AuthLayout>
            <h3 className='text-center text-2xl font-bold'>Sign In</h3>
            <p className='text-center mt-2 text-gray-500 font-semibold'>Your Social Campaigns</p>

            <form onSubmit={(e) => handleLogin(e)}>
                <div className='grid grid-cols-1'>

                    <TextInput type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <TextInput type="password" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} />
                    <InputButton value="Log in" />

                </div>
            </form>

            <p className='text-gray-500 font-semibold'>Not a Member yet? <Link to="/register" className='text-black'>Sign Up</Link></p>

        </AuthLayout>
    )
}

export default Login