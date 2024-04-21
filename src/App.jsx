import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Page from './components/Page'
import { Provider } from 'react-redux'
import store from './redux/store'
function App() {

  return (
    <Provider store={store}>
      <Navbar></Navbar>
      <Page></Page>
    </Provider>
  )
}

export default App
