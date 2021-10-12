import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Form from '../../components/Form/Form'
import Footer from '../../components/Footer/Footer'
import { api } from '../../Appwrite.js'
import { RiLogoutBoxLine } from 'react-icons/ri'
import './Application.scss'

function App () {
  let [name, setName] = useState()

  let getUsername = async () => {
    let data = await api.getUser()
    setName(data.name.split(' ')[0])
  }

  useEffect(() => {
    getUsername()
  }, [])

  const logOut = async () => {
    try {
      await api.logout()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <Navbar />
      <div className='Salutation'>
				Hey {name}, get the best pictures from Unsplash!
				<button onClick={logOut} className='Logout'>
  <span className='logout-icon'>
    <RiLogoutBoxLine />
  </span>{' '}
					Logout
				</button>
      </div>
      <div className='form-unsplash'>
        <Form />
      </div>
      <Footer />
    </div>
  )
}

export default App
