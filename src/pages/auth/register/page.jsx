import React, { useState } from 'react'
import AuthLayout from '../layout'
import { Link, Navigate } from 'react-router-dom'
import TextInput from '../../../components/textInput'
import InputButton from '../../../components/button'
import axios from 'axios'

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        if (pass === confirmPass) {

            const payload = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: pass
            }

            await axios.post('https://test-jokercrm.rteca.com/api/v1/register', payload);
            Navigate('/login');

        }
        else {
            alert("Password and Confirm Password didn't match")
        }

    }

    return (
        <AuthLayout>
            <h3 className='text-center text-2xl font-bold'>Sign Up</h3>
            <p className='text-center mt-2 text-gray-500 font-semibold'>Your Social Campaigns</p>
            <form onSubmit={(e) => handleRegister(e)}>
                <div className='grid grid-cols-1'>

                    <TextInput type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <TextInput type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <TextInput type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <TextInput type="password" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} />
                    <TextInput type="password" placeholder="Confirm Password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
                    <InputButton value="Sign up" />

                </div>
            </form>
            <p className='text-gray-500 font-semibold'>Have an account? <Link to="/login" className='text-black'>Sign In</Link> </p>
        </AuthLayout>
    )
}

export default Register