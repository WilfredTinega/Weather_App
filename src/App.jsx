import React from 'react'
import Weather from './components/Weather'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div>
      <ToastContainer autoClose = {3000}/>
      <div className='grid min-h-screen'>
        <Weather/>
      </div>
    </div>
  )
}

export default App
