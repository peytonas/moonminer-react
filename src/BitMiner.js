import React from 'react'
import './App.css';
import './RETRO-bootstrap.css'

function Bit(props) {
  return (
    <i className="fab fa-bitcoin App-logo ml-n2 text-primary fa-8x" onClick={props.onClick}></i>
  )
}
class BitCoinCount extends React.Component {
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-12">
          <h3 id="bc">
            BitCoins: {this.props.bc}
          </h3>
        </div>
      </div>
    )
  }
}
class AutoMinerCount extends React.Component {
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-12">
          <h3 id="bc">
            AutoMiners: {this.props.amc}
          </h3>
        </div>
      </div>
    )
  }
}
class Mine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bitCoins: 0,
      visitors: 0,
      autoMiners: 0,
      clickBonus: 1,
      bcps: 0
    }
    this.purchasables = {
      visitors: {
        price: 50,
        purchased: 5,
        automatic: false,
        multiplier: 1,
        coolDown: 5000
      },
      autoMiner: {
        price: 500,
        purchased: 0,
        automatic: true,
        multiplier: 0,
        coolDown: 30000
      }
    }
  }
  mine() {
    for (var key in this.purchasables) {
      if (this.purchasables[key].purchased > 0) {
        this.state.bitCoins += (this.purchasables[key].purchased * this.purchasables[key].multiplier)
      }
    }
    this.setState({
      bitCoins: this.state.bitCoins + 1
    })
  }
  render() {
    let cb;
    let bcps;
    cb = this.state.clickBonus
    bcps = this.state.bcps
    return (
      <div className="container-fluid bg-dark">
        <div className="row justify-content-center">
          <div className="col-12 text-primary text-center">
            <h1><i className="fab fa-bitcoin text-primary"></i>itMiner</h1>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-4 text-center">
            <button className="btn btn-danger">
              Buy Autominer
            </button>
            <button className="btn btn-warning ml-2">
              Buy Visitor
            </button>
          </div>
          <div className="col-4 text-center">
            <Bit onClick={this.mine.bind(this)} />
            <div className="text-primary">Click Bonus: {cb}</div>
            <div className="text-primary">BCPS: {bcps}</div>
          </div>
          <div className="col-4 text-center text-secondary">
            <div className="row justify-content-center">
              <div className="col">
                <div className="row justify-content-center">
                  INVENTORY
                </div>
                <BitCoinCount bc={this.state.bitCoins} />
                <AutoMinerCount amc={this.state.autoMiners} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Mine