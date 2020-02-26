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
          <h3 id="bcc">
            BitCoins: {this.props.bc}
          </h3>
        </div>
      </div>
    )
  }
}
class VisitorCount extends React.Component {
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-12">
          <h3 id="vc">
            Visitors: {this.props.vc}
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
          <h3 id="amc">
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
      bitCoinsPerSecond: 0
    }
    this.purchasables = {
      visitors: {
        price: 50,
        purchased: 0,
        automatic: false,
        multiplier: 5,
        coolDown: 5000
      },
      autoMiner: {
        price: 500,
        purchased: 0,
        automatic: true,
        multiplier: 20,
        coolDown: 30000
      }
    }
  }
  mine() {
    let clickBonus = this.state.clickBonus;
    for (var key in this.purchasables) {
      if (this.purchasables[key].purchased > 0) {
        clickBonus += (this.purchasables[key].purchased * this.purchasables[key].multiplier)
      }
    }
    this.setState({
      bitCoins: this.state.bitCoins + clickBonus
    })
  }
  buyVisitor() {
    this.setState({
      visitors: this.state.visitors + 1,
      clickBonus: (this.state.visitors * this.purchasables.visitors.multiplier) + 1
    })
  }
  buyAutoMiner() {
    this.setState({
      autoMiners: this.state.autoMiners + 1,
      bitCoinsPerSecond: this.state.autoMiners * this.purchasables.autoMiner.multiplier
    })
  }
  // runAutoMiner() {
  //   console.log("mining");
  //   let bc = this.state.bitCoins
  //   let bcps = 0;
  //   for (var key in this.purchasables) {
  //     bcps = this.purchasables[key].multiplier * this.purchasables[key].purchased
  //     if (this.purchasables[key].automatic) {
  //       bc += bcps
  //     }
  //   }
  //   this.setState({
  //     bitCoins: this.state.bitCoins + bc,
  //   })
  //   console.log(this.state.bitCoinsPerSecond);
  // }
  render() {
    let cb;
    let bcps;
    cb = this.state.clickBonus
    bcps = this.state.bitCoinsPerSecond
    return (
      <div className="container-fluid bg-dark">
        <div className="row justify-content-center">
          <div className="col-12 text-primary text-center">
            <h1><i className="fab fa-bitcoin text-primary"></i>itMiner</h1>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-4 text-center">
            <button className="btn btn-danger" onClick={this.buyAutoMiner.bind(this)}>
              Buy Autominer
            </button>
            <button className="btn btn-warning ml-2" onClick={this.buyVisitor.bind(this)}>
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
                <VisitorCount vc={this.state.visitors} />
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