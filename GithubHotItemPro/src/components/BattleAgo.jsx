import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose, faPeopleArrows, faBalanceScale, faTrophy } from '@fortawesome/free-solid-svg-icons';
import axios from "axios"

export default class BatteAgo extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      userName1: "",
      userName2: "",
      userItem1: [],
      userItem2: [],
      oneKey: false,
      twoKey: false
    }
  }

  userChange = (ev) => {
    ev.persist();
    this.setState(
      { userName1: ev.target.value }
    )
  }

  userChange2 = (ev) => {
    ev.persist();
    this.setState(
      { userName2: ev.target.value }
    )
  }

  userSubmit = async () => {
    if (this.state.userName1 === '') {
      alert("内容不能为空")
      return;
    }
    await axios.get(`https://api.github.com/search/repositories?q=${this.state.userName1}&order=desc&sort=stars`)
      .then(res => {
        console.log("数据1",res);
        this.setState({
          userItem1: res.data.items[0],
          oneKey: true
        })
      })
      .catch(err => {
        console.error(err);
      })
    const userData = this.state
    this.props.getChildData(userData)

  }

  twoSubmit = async () => {
    if (this.state.userName2 === '') {
      alert("内容不能为空")
      return;
    }
    await axios.get(`https://api.github.com/search/repositories?q=${this.state.userName2}&order=desc&sort=stars`)
      .then(res => {
        this.setState({
          userItem2: res.data.items[0],
          twoKey: true
        })
      })
      .catch(err => {
        console.error(err);
      })
    const userData = this.state
    this.props.getChildData(userData)
  }

  selKey1 = async () => {
    await this.setState({
      oneKey: 0,
      userName1: ""
    })
    const userData = this.state
    this.props.getChildData(userData)
  }

  selKey2 = async () => {
    await this.setState({
      twoKey: 0,
      userName2: ""
    })
    const userData = this.state
    this.props.getChildData(userData)
  }

  render() {
    return (
      <main>
        <div className="instrutions">
          <h2>Instrutions</h2>
          <ul>
            <li>
              <h5>Enter Two Users</h5>
              <div><FontAwesomeIcon className="a" style={{ color: "#e06c75" }} icon={faPeopleArrows} /></div>
            </li>
            <li>
              <h5>Battle</h5>
              <div><FontAwesomeIcon className="a" style={{ color: "#ec981d" }} icon={faBalanceScale} /></div>
            </li>
            <li>
              <h5>See The Winner</h5>
              <div><FontAwesomeIcon className="a" style={{ color: "#e06c75" }} icon={faTrophy} /></div>
            </li>
          </ul>
          <h2>Players</h2>
        </div>
        <div className="players">
          <div className="player1">
            {this.state.oneKey ? (
              <div className="submit1">
                <img src={this.state.userItem1 ? `${this.state.userItem1.owner.avatar_url}?size=200` : `https://github.com/${this.state.userName1}.png?size=200`} alt="Null" />
                <span>{this.state.userName1}</span>
                <FontAwesomeIcon className="b" icon={faWindowClose} onClick={this.selKey1} />
              </div>
            ) : (
              <div className="input">
                <h4>palyers one</h4>
                <input type="text" placeholder="Github UserName" value={this.state.userName1} onChange={this.userChange} onKeyDown={() => { if (window.event.keyCode === 13) { this.userSubmit() } }} />
                <button type="button" onClick={this.userSubmit}>submit</button>
              </div>
              )}
          </div>
          <div className="player2">
            {this.state.twoKey ? (
              <div className="submit1">
                <img src={this.state.userItem2 ? `${this.state.userItem2.owner.avatar_url}?size=200` : `https://github.com/${this.state.userName2}.png?size=200`} alt="Null" />
                <span>{this.state.userName2}</span>
                <FontAwesomeIcon className="b" icon={faWindowClose} onClick={this.selKey2} />
              </div>
            ) : (
              <div className="input">
                <h4>palyers one</h4>
                <input type="text" placeholder="Github UserName" value={this.state.userName2} onChange={this.userChange2} onKeyDown={() => { if (window.event.keyCode === 13) { this.twoSubmit() } }} />
                <button type="button" onClick={this.twoSubmit}>submit</button>
              </div>
              )}
          </div>
        </div>

      </main>
    )
  }
} 