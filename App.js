import React, { useState } from 'react'
import LoginPage from './loginPage/Index'
import Home from './component/Home'

function App() {
  const [visible, setVisible] = useState(true)
  return (
    <>
      {
        visible ? (
          <LoginPage setVisible={setVisible} />
        )
          : (
            <Home />
          )
      }
    </>
  )
}

export default App
