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
      cps: 1,
    }
  }
  mine() {
    this.setState({
      bitCoins: this.state.bitCoins + 1
    })
  }
  render() {
    let status;
    status = this.state.bitCoins
    return (
      <div className="row justify-content-center bg-dark">
        <div className="col-3 text-center">
          <Bit onClick={this.mine.bind(this)} />
          <div className="text-primary">{status}</div>
        </div>
      </div>
    )
  }
}

export default Mine