import React from "react"
import { HashRouter as Router, Link } from 'react-router-dom'
import BatteAfter from "../components/BattleAfter"
import BatteAgo from "../components/BattleAgo"

export default class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // auserName1: "",
      // auserName2: "",
      // auserItem1: [],
      // auserItem2: [],
      openKey:0,
      aoneKey:0,
      atwoKey:0
    }
  }

  componentDidMount(){
    this.setState({
      openKey:parseInt(sessionStorage.getItem("openKey"),10),
      aoneKey:parseInt(sessionStorage.getItem("oneKey"),10),
      atwoKey:parseInt(sessionStorage.getItem("twoKey"),10),
    })
  }
  
  getData = (data) => {
    const { oneKey,twoKey } = data
    this.setState({
      // auserName1: userName1,
      // auserName2: userName2,
      // auserItem1: userItem1,
      // auserItem2: userItem2,userName1, userName2, userItem1, userItem2,
      aoneKey:oneKey,
      atwoKey:twoKey
    })
    // sessionStorage.setItem("oneKey",this.state.aoneKey );
    // sessionStorage.setItem("twoKey",this.state.atwoKey );
  }

  openBattle = () => {
    if (this.state.openKey) {
      sessionStorage.setItem("openKey","0" )
      this.setState({
        openKey:0
      })
    } else {
      sessionStorage.setItem("openKey","1" )
      this.setState({
        openKey:1
      })
    }

  }

  render() {
    return (
      <div className="battle">
        {this.state.openKey? (
          <BatteAfter />
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
// name1={this.state.auserName1} name2={this.state.auserName2} oneDate={this.state.auserItem1} twoDate={this.state.auserItem2}