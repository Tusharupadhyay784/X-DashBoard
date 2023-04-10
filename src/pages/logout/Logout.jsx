import React, { useState } from 'react'
import './logout.scss'
import { auth } from '../../firebase'
import { signOut } from 'firebase/auth'
import { Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const Logout = () => {
    const navigate = useNavigate();
    const [valid, setValid] = useState(false);
    // localStorage.removeItem('id');
    toast.success("You will be Redirecting to the SignUp Page With in a Seconds")
    setTimeout(() => {
        setValid(true);
    }, 2000);
    if (valid === true) {
        signOut(auth).then(() => {
            navigate('/');
        })
    }
    // setTimeout(() => {
    return (
        <>
            <h1>Loading...... </h1>

        </>
    )




}

export default Logout