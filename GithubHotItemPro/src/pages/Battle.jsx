import React from "react"
import { HashRouter as Router, Link } from 'react-router-dom'
import BatteAfter from "../components/BattleAfter"
import BatteAgo from "../components/BattleAgo"

export default class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auserName1: "",
      auserName2: "",
      auserItem1: [],
      auserItem2: [],
      aoneKey: false,
      atwoKey: false,
      openKey: 0
    }
  }

  getData = (data) => {
    const { userName1, userName2, userItem1, userItem2, oneKey, twoKey } = data
    this.setState({
      auserName1: userName1,
      auserName2: userName2,
      auserItem1: userItem1,
      auserItem2: userItem2,
      aoneKey: oneKey,
      atwoKey: twoKey
    })
  }

  openBattle = () => {
    if (this.state.openKey) {
      this.setState({
        openKey: 0
      })
    } else {
      this.setState({
        openKey: 1
      })
    }
  }

  render() {
    return (
      <div className="battle">
        {this.state.openKey? (
          <BatteAfter name1={this.state.auserName1} name2={this.state.auserName2} oneDate={this.state.auserItem1} twoDate={this.state.auserItem2} />
        ) : (
          <BatteAgo getChildData={this.getData} />
          )}
        <Router>
          {this.state.aoneKey && this.state.atwoKey ? (<Link to={{pathname:`/battle/p/1/${this.state.auserName1}/${this.state.auserName2}`}}><h2><button type="button" onClick={this.openBattle}>BATTLE</button></h2></Link>) : null}
        </Router>

      </div>
    )
  }
}
// {this.state.aoneKey && this.state.atwoKey ? (
//   <h2><button type="button" onClick={this.openBattle}>BATTLE</button></h2>
// ) : null}