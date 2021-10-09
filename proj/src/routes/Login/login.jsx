import React from 'react'
import { api } from '../../Appwrite.js'
import './Login.scss'
import { FcGoogle } from 'react-icons/fc'

function Login () {
  const loginWithGoogle = async () => {
    try {
      await api.loginWithGoogle()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className='login'>
        <h1 className='logotext'>Shuttery</h1>
        <FcGoogle onClick={loginWithGoogle} className='google' />
        <span>
          <a
            href='https://appwrite.io/'
            target='_blank'
            className='appwrite-link'
            rel='noreferrer'
					>
            <img
              src='https://appwrite.io/images-ee/press/badge-gray-button.svg'
              alt='Built with Appwrite'
              height='40'
						/>
          </a>
        </span>
      </div>
    </div>
  )
}

export default Login
