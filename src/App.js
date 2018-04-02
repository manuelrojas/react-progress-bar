import React, { Component } from 'react'

import ProgressBar from './components/progressBar'
import Logo from './components/logo'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <ProgressBar />
      </div>
    )
  }
}

export default App
