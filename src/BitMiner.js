import React from 'react'
import logo from './logo.svg'
import './App.css';
import './RETRO-bootstrap.css'

function Bit(props) {
  return (
    <img src={logo} className="App-logo ml-n5" alt="logo" onClick={props.onClick} />
  )
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
      <div className="row justify-content-center bg-dark">
        <div className="col-3 text-center">
          <button className="btn btn-danger">
            <p>Buy</p>
          </button>
        </div>
        <div className="col-3 text-center">
          <Bit onClick={this.mine.bind(this)} />
          <div className="text-primary">BitCoins: {bc}</div>
          <div className="text-primary">Click Bonus: {cb}</div>
          <div className="text-primary">BCPS: {bcps}</div>
        </div>
        <div className="col-3 text-center">
          <button className="btn btn-warning">
            <p>Buy</p>
          </button>
        </div>
      </div>
    )
  }
}

export default Mine