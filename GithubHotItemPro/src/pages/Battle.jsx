import React from "react"
import axios from "axios"
import { HashRouter as Router, Link } from 'react-router-dom'
import BatteAfter from "@/components/BattleAfter"
import BatteAgo from "@/components/BattleAgo"


export default class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName1: "",
      userName2: "",
      userItem1: [],
      userItem2: [],
      openKey:0,
      oneKey:0,
      twoKey:0
    }
  }

  async componentDidMount(){
    if(this.props.match.params.user){
      const arr=this.props.match.params.user.split("&")
      await this.setState({
        userName1: arr[0],
        userName2: arr[1],
        openKey:1,
        oneKey:1,
        twoKey:1
      })
      this.getNewData1();
      this.getNewData2()
    }
  }
  
  getNewData1 = () => {
    axios.get(`https://api.github.com/search/repositories?q=${this.state.userName1}&order=desc&sort=stars`)
      .then(res => {
        this.setState({
          userItem1: res.data.items[0],
        })
      })
      .catch(err => {
        console.error(err);
        // alert("API调用失败，重新刷新试试")
      })
  }

  getNewData2 = () => {
    axios.get(`https://api.github.com/search/repositories?q=${this.state.userName2}&order=desc&sort=stars`)
      .then(res => {
        this.setState({
          userItem2: res.data.items[0],
        })
      })
      .catch(err => {
        console.error(err);
        // alert("API调用失败，重新刷新试试")
      })
  }

  getData = (data) => {
    const {userName1, userName2,userItem1,userItem2,oneKey,twoKey} = data
    this.setState({
      userName1,
      userName2,
      userItem1,
      userItem2,
      oneKey,
      twoKey
    })
  }

  openBattle = () => {
    if (this.state.openKey) {
      this.setState({
        openKey:0,
        oneKey:0,
        twoKey:0
      })
    } else {
      this.setState({
        openKey:1,
      })
    }
  }

  render() {
    return (
      <div className="battle">
        {this.state.openKey? (
          <BatteAfter Name1={this.state.userName1} Name2={this.state.userName2} Item1={this.state.userItem1} Item2={this.state.userItem2}   />
        ) : (
          <BatteAgo getChildData={this.getData} />
          )}
        <Router>
          {this.state.oneKey && this.state.twoKey ? (<Link to={{pathname:this.state.openKey?`/battle`:`/battle/${this.state.userName1}&${this.state.userName2}`}}><h2><button type="button" onClick={this.openBattle}>{this.state.openKey?"GOBACK":"BATTLE"}</button></h2></Link>) : null}
        </Router>
      </div>
    )
  }
}
// name1={this.state.auserName1} name2={this.state.auserName2} oneDate={this.state.auserItem1} twoDate={this.state.auserItem2}