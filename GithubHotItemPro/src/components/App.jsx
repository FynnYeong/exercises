import React from 'react';
import { hot } from 'react-hot-loader/root';
import { HashRouter as Router, Route,NavLink } from 'react-router-dom'
import Popoular from "../pages/Popoular"
import Battle from "../pages/Battle"

class App extends React.Component {
  constructor(){
    super();
    this.state={
      linkKey:0
    }
  }

  componentDidMount(){
    if(sessionStorage.getItem("linKey")){
      this.setState({
        linkKey:parseInt(sessionStorage.getItem("linKey"),10)
      })
    }
  }

  render() {
    return (
      <Router>
        <div className="header">
          <NavLink onClick={()=>{this.setState({linkKey:0});sessionStorage.setItem("linKey","0" )}} className={`a ${this.state.linkKey===0?"active2":null}`} to="/popoular">Popoular</NavLink>
          <NavLink onClick={()=>{this.setState({linkKey:1});sessionStorage.setItem("linKey","1" );sessionStorage.removeItem("clicker")}} className={`a ${this.state.linkKey===1?"active2":null}`} to="/battle/0">Battle</NavLink>
        </div>
        
        {/* <Redirect path="/" to="/popoular" /> */}
        {/* <Route exact path="/" component={Popoular} /> */}
        <Route exact path="/popoular/:key?/:src?" component={Popoular} />
        <Route path="/battle/:open?/:user1?/:user2?" component={Battle} />
      </Router>
    );
  }
}

export default hot(App);
