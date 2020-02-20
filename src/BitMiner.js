import React from 'react'
import logo from './logo.svg'
import './App.css';
import './RETRO-bootstrap.css'

class BitMiner extends React.Component {
  render() {
    return (
      <div className="row justify-content-center bg-dark">
        <div className="col-3 text-center">
          <img src={logo} className="App-logo" alt="logo" />
          <button className="btn btn-primary">
            btn <span className="badge badge-primary"></span>
          </button>
        </div>
      </div>
    )
  }
}

export default BitMiner