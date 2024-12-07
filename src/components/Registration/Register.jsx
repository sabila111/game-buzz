import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from '../provider/AuthProvider';
import app from '../../firebase/firebase.init';
import Swal from 'sweetalert2'

const Register = () => {

  const { CreateUser, UpdateUser } = useContext(AuthContext)
  const [registerError, setRegisterError] = useState('')
  const [success, setSuccess] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const auth = getAuth(app)
  const provider = new GoogleAuthProvider


  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        // console.log(result.user)
        navigate(location?.state ? location.state : '/')
      })
   
      .catch(error => {
        console.error(error.message)
      })
  }

  const handleRegister = e => {
    e.preventDefault()
    
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const email = form.get('email')
    const password = form.get('password')
    const photoURL = form.get('photoURL')
    

    setRegisterError('')
    setSuccess('')

    if (password.length < 6) {
      setRegisterError('Password should be at least 6 character or longer')
    }
    else if (!/[A-Z]/.test(password)) {
      setRegisterError('your password should contain uppercase')
      return
    }
    else if (!/[a-z]/.test(password)) {
      setRegisterError('your password should contain lowercase')
      return
    }


    CreateUser(email, password)
      .then(result => {
       
        // alert('User Created Successfully')
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You have registered successfully",
          showConfirmButton: false,
          timer: 1500
        });

        navigate(location?.state ? location.state : '/')
      })
      .catch(error => {
        console.error(error)
        alert('Email already existed')
      })
      .then(result => {
        
        return UpdateUser(name, photoURL)
      })

  }


  return (
    <div className='mx-auto  w-3/4 mt-12'>
      <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" placeholder="photoUrl" name="photoURL" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>

        <div className="form-control relative ">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={showPassword ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered" required />

          <button
            onClick={() => setShowPassword(!showPassword)}
            className='btn btn-xs absolute right-4 top-12'>
            {
              showPassword? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
            }
            
            </button>

        </div>
        <div className="form-control mt-6">
          <button className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-orange-400 to-orange-600   text-white">Register</button>
        </div>
      </form>

      <button onClick={handleGoogle} className="py-2 px-4 bg-orange-500 rounded-full text-center items-center mx-auto md:ml-28 lg:ml-72 text-white">Google</button>

      {
        registerError && <p className='text-red-500 text-center'>{registerError}</p>
      }
      {
        success && <p className="text-lime-600 text-center">{success}</p>
      }

      <p className="text-center mt-4">Already have an account? Please <Link className="text-orange-500 font-bold" to={'/login'}>Login</Link></p>


    </div>
  );
};

export default Register;