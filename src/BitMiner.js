import React from 'react'
import logo from './logo.svg'
import './App.css';
import './RETRO-bootstrap.css'

function Bit(props) {
  return (
    <i className="fab fa-bitcoin App-logo ml-n2 text-primary fa-6x" onClick={props.onClick}></i>
  )
}
class Count extends React.Component {
}
class Mine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bitCoins: 0,
      clickBonus: 1,
      bcps: 0,
    }
  }
  mine() {
    this.setState({
      bitCoins: this.state.bitCoins + 1
    })
  }
  render() {
    let bc;
    let cb;
    let bcps
    bc = this.state.bitCoins
    cb = this.state.clickBonus
    bcps = this.state.bcps
    return (
      <div className="container-fluid bg-dark">
        <div className="row justify-content-center">
          <div className="col-12 text-primary text-center">
            <h1>BitMiner</h1>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-4 text-center">
            <button className="btn btn-danger">
              Buy
            </button>
            <button className="btn btn-warning ml-2">
              Buy
            </button>
          </div>
          <div className="col-4 text-center">
            <Bit onClick={this.mine.bind(this)} />
            <div className="text-primary">BitCoins: {bc}</div>
            <div className="text-primary">Click Bonus: {cb}</div>
            <div className="text-primary">BCPS: {bcps}</div>
          </div>
          <div className="col-4 text-center text-secondary">
            test
          </div>
        </div>
      </div>
    )
  }
}
export default Mine