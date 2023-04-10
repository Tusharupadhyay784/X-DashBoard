import React, { useState } from 'react'
import './login.scss'
import { useNavigate } from 'react-router-dom'
import { auth, provider } from '../../firebase'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { toast } from 'react-hot-toast'

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "", pass: ""
  })
  const handleSubmission = async (e) => {
    e.preventDefault();
    if (!values.email || !values.pass) {
      toast.error("Please Fill out All Fields");
      return;
    }
    signInWithEmailAndPassword(auth, values.email, values.pass).then(async (req) => {
      console.log(req);

      toast.success("Redirecting to the Dashboard Page")
      navigate('/home');
    }).catch((e) => {

      toast.error(e.message);
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
      <div className="box" >
        <h1 style={{ textAlign: "center" }}>Log In</h1>
        <form className='form '>
          <div>
            <input type="email" required placeholder='Email' className='form__input' onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))} /><br />
            <label className='form__label' htmlFor="email">Email</label>
            <input type="password" required placeholder='Password' className='form__input2' id='password' onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))} />
            <label className='form__label2' htmlFor="password">Password</label>
          </div>
          <button onClick={handleSubmission} >Login</button>
          <p>Login via <img onClick={oneTapSignIn} src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" /></p>
        </form>
        <br />
        <p>Not an Account?  <button onClick={() => navigate('/signup')}>Signup</button></p>
      </div>
    </div>
  )
}

export default Login