import React from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'

export default class Top extends React.Component {
  constructor(props) {
    super(props);
    this.toplist = [
      { title: 'All', src: 'q=stars:>1&sort=stars&order=desc&type=Repositories' },
      { title: 'JavaScript', src: 'q=stars:>1+language:javascript&sort=stars&order=desc&type=Repositories' },
      { title: 'Ruby', src: 'q=stars:>1+language:ruby&sort=stars&order=desc&type=Repositories' },
      { title: 'Java', src: 'q=stars:>1+language:java&sort=stars&order=desc&type=Repositories' },
      { title: 'CSS', src: 'q=stars:>1+language:css&sort=stars&order=desc&type=Repositories' },
      { title: 'Python', src: 'q=stars:>1+language:python&sort=stars&order=desc&type=Repositories' },
    ];
  }

  handleClick = (e) => {
    this.props.getArr(e);
  }

  render() {
    const list = this.toplist.map((item, index) => (<li key={index} className={`${item.src === this.props.btnkey ? 'active1' : 'no'}`} style={{ fontSize: '25px', fontWeight: 'bold', margin: ' 40px 10px 25px 10px' }}><Link to={{ pathname: `/popular/${item.src}` }} onClick={() => { this.handleClick(item.src); }}>{item.title}</Link></li>))
    return (
      <div className="top">
        <ul style={{ display: 'flex', flexWrap: 'nowrap', justifyContent: 'center' }}>
          <Router>
            {list}
          </Router>
        </ul>
      </div>
    );
  }
}