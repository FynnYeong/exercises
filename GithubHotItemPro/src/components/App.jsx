import React, { lazy, Suspense } from 'react';
import { hot } from 'react-hot-loader/root';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom'
import Popular from "../pages/Popular"

const Battle = lazy(() => import('../pages/Battle'));
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      linkKey: 0
    }
  }

  componentDidMount() {
    if (window.location.hash.search("battle") === -1) {
      this.setState({
        linkKey: 0
      })
    } else {
      this.setState({
        linkKey: 1
      })
    }
  }

  render() {
    return (
      <Router>
        <div className="header">
          <NavLink onClick={() => { this.setState({ linkKey: 0 }); }} className={`a ${this.state.linkKey === 0 ? "active2" : null}`} to="/popular">Popular</NavLink>
          <NavLink onClick={() => { this.setState({ linkKey: 1 }); }} className={`a ${this.state.linkKey === 1 ? "active2" : null}`} to="/battle">Battle</NavLink>
        </div>
        <Route exact path="/popular/:src?" component={Popular} />
        <Suspense fallback={<div style={{textAlign:"center"}}>Loading...</div>}>
          <Route path="/battle/:user?" component={Battle} />
        </Suspense>
      </Router>
    );
  }
}

export default hot(App);
