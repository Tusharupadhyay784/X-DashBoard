import React, { useState } from 'react'
import './signup.scss'
import { useNavigate } from 'react-router-dom'
import { auth, provider } from '../../firebase'
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { toast } from 'react-hot-toast'


const Signup = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "", email: "", pass: ""
  });
  const [disablebtn, setDisablebtn] = useState(false);
  const handleSubmission = async (e) => {
    e.preventDefault();
    if (!values.name || !values.email || !values.pass) {
      toast('Please fill out all fields.', 'error');
      return;
    }
    createUserWithEmailAndPassword(auth, values.email, values.pass).then(async (res) => {
      console.log(res);
      console.log(res.user);
      setDisablebtn(true);
      toast.success("Sign up Successfully You are redirecting to the login Page with in a second");
      //   await updateProfile(user, {
      //     displayName: values.name
      // })
      setTimeout(() => {
        navigate('/login');
      }, 3000);

    }).catch((e) => {
      toast(e, "error");
    })
  }
  const oneTapSignIn = async (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider).then((res) => {
      console.log(res);
      navigate('/home')
    })

  }
  return (
    <div className='container'>
      <div className="box">
        <h1 style={{ textAlign: "center" }}>Sign Up</h1>
        <form className='form'>
          <div>
            <input type="text" placeholder='Name' className='form__inputs' id='name' onChange={(e) => setValues((prev) => ({ ...prev, name: e.target.value }))} /> <br />
            <label id='nameid' htmlFor="name" className='form__labels'>Name</label>
            <input type="email" placeholder='Email' className='form__inputs2' id='email' onChange={(e) => setValues((prev) => ({ ...prev, email: e.target.value }))} /><br />
            <label htmlFor="email" className='form__labels2'>Email</label>
            <input type="password" id='password' placeholder='Password' className='form__inputs3' onChange={(e) => setValues((prev) => ({ ...prev, pass: e.target.value }))} />
            <label htmlFor="password" className='form__labels3'>Password</label>
          </div>
          <br />
          <button onClick={handleSubmission} disabled={disablebtn}>Signup</button>
          <br />
          <div id='boxe'>
            <h3>Or <img onClick={oneTapSignIn} className='imgone' src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" /></h3></div>
        </form>
        <p>Already have an account?<button onClick={() => navigate('/login')}>Login</button></p>
      </div>
    </div>
  )
}

export default Signup