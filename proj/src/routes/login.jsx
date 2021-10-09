import React from 'react'
import { api } from '../Appwrite.js'

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
      <button onClick={loginWithGoogle}>Login with Google</button>
    </div>
  )
}

export default Login
