import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose, faSpinner, faPeopleArrows, faBalanceScale, faTrophy } from '@fortawesome/free-solid-svg-icons';
import axios from "axios"

export default class BatteAgo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userName1: "",
      userName2: "",
      userItem1: [],
      userItem2: [],
      oneKey: 0,
      twoKey: 0,
      loadKey1:false,
      loadKey2:false,
      bKey1:1,
      bKey2:1
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
    this.setState({
      loadKey1: true,
      bKey1:0
    })
    await axios.get(`https://api.github.com/search/repositories?q=${this.state.userName1}&order=desc&sort=stars`)
      .then(res => {
        // console.log("数据1", res);
        this.setState({
          userItem1: res.data.items[0],
          oneKey: 1,
          loadKey1:false,
          bKey1:1
        })
      })
      .catch(err => {
        console.error(err);
      })
    const userData = this.state.userItem1
    const uData = this.state
    if(userData){
      // sessionStorage.setItem("avatar_url1",userData.owner.avatar_url );
      sessionStorage.setItem("forks_count1",userData.forks_count );
      sessionStorage.setItem("stargazers_count1",userData.stargazers_count );
      sessionStorage.setItem("open_issues_count1",userData.open_issues_count );
      sessionStorage.setItem("name1",uData.userName1  );
      sessionStorage.setItem("name13",userData.name );
    }
    sessionStorage.setItem("oneKey","1"  )
    this.props.getChildData(uData)
  }

  twoSubmit = async () => {
    if (this.state.userName2 === '') {
      alert("内容不能为空")
      return;
    }
    this.setState({
      loadKey2: true,
      bKey2:0
    })
    await axios.get(`https://api.github.com/search/repositories?q=${this.state.userName2}&order=desc&sort=stars`)
      .then(res => {
        this.setState({
          userItem2: res.data.items[0],
          twoKey: 1,
          loadKey2:false,
          bKey2:1
        })
      })
      .catch(err => {
        console.error(err);
      })
    const userData = this.state.userItem2
    const uData = this.state
    if(userData){
      sessionStorage.setItem("forks_count2",userData.forks_count );
      sessionStorage.setItem("stargazers_count2",userData.stargazers_count  );
      sessionStorage.setItem("open_issues_count2",userData.open_issues_count );
      sessionStorage.setItem("name2",uData.userName2 );
      sessionStorage.setItem("name23",userData.name );
    }
    sessionStorage.setItem("twoKey","1" )
    this.props.getChildData(uData)
  }

  selKey1 = async () => {
    await this.setState({
      oneKey: 0,
      userName1: ""
    })
    const userData = this.state
    this.props.getChildData(userData)
    sessionStorage.setItem("oneKey","0"  )

  }

  selKey2 = async () => {
    await this.setState({
      twoKey: 0,
      userName2: ""
    })
    const userData = this.state
    this.props.getChildData(userData)
    sessionStorage.setItem("twoKey","0"  )
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
                <img src={0 ? `${this.state.userItem1.owner.avatar_url}?size=200` : `https://github.com/${this.state.userName1}.png?size=200`} alt="API出了点问题" />
                <span>{this.state.userName1}</span>
                <FontAwesomeIcon className="b" icon={faWindowClose} onClick={this.selKey1} />
              </div>
            ) : (
              <div className="input">
                <h4>palyers one</h4>
                <input type="text" placeholder="Github UserName" value={this.state.userName1} onChange={this.userChange} onKeyDown={() => { if (window.event.keyCode === 13) { this.userSubmit() } }} />
                {/* <button type="button" onClick={this.userSubmit}>submit</button> */}
                {this.state.userName1!==""&&this.state.bKey1?<button type="button" onClick={this.userSubmit}>submit</button>:<button type="button" disabled="disabled" style={{backgroundColor:"#e8e2ea"}}>.....</button>}
                {this.state.loadKey1? (
                  <h5 style={{ textAlign: 'center' }} className="loading"><FontAwesomeIcon icon={faSpinner} spin style={{ fontSize: '30px' }} />
                    <span className="sr-only">Loading...</span>
                  </h5>
                ) : <span />}
              </div>
              )}
          </div>
          <div className="player2">
            {this.state.twoKey ? (
              <div className="submit1">
                <img src={0 ? `${this.state.userItem2.owner.avatar_url}?size=200` : `https://github.com/${this.state.userName2}.png?size=200`} alt="API出了点问题" />
                <span>{this.state.userName2}</span>
                <FontAwesomeIcon className="b" icon={faWindowClose} onClick={this.selKey2} />
              </div>
            ) : (
              <div className="input">
                <h4>palyers one</h4>
                <input type="text" placeholder="Github UserName" value={this.state.userName2} onChange={this.userChange2} onKeyDown={() => { if (window.event.keyCode === 13) { this.twoSubmit() } }} />
                {/* <button type="button" onClick={this.twoSubmit}>submit</button> */}
                {this.state.userName2!==""&&this.state.bKey2?<button type="button" onClick={this.twoSubmit}>submit</button>:<button disabled="disabled" type="button" style={{backgroundColor:"#e8e2ea"}}>.....</button>}
                {this.state.loadKey2? (
                  <h5 style={{ textAlign: 'center' }} className="loading"><FontAwesomeIcon icon={faSpinner} spin style={{ fontSize: '30px' }} />
                    <span className="sr-only">Loading...</span>
                  </h5>
                ) : <span />}
              </div>
              )}
          </div>
        </div>

      </main>
    )
  }
} 