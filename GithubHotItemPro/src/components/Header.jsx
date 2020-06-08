import React from 'react'
import { BrowserRouter as Link, Router } from 'react-router-dom'

export default class Header extends React.Component {

    render() {
        return (
          <Router className="header">
            <Link className="a" to="/popoular">Popoular</Link>
            <Link className="a" to="/battle">Battle</Link>
          </Router>
        )
    }
} 