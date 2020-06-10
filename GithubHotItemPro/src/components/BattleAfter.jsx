import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar, faUserCircle, faExclamationTriangle, faShareAlt,
} from '@fortawesome/free-solid-svg-icons';

export default class BatteAfter extends React.Component {

  render() {
    const LiSyle = {
      width: '100%',
      textAlign: 'left',
      paddingLeft: '15%',
      boxSizing: 'border-box',
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '15px',
      // height:'4%',
      // overflow: "hidden"
    };
    let one = "";
    let two = "";
    const win = () => {
      if (this.props.oneDate && this.props.twoDate) {
        if (this.props.oneDate.stargazers_count > this.props.twoDate.stargazers_count) {
          one = "Winning"
          two = "Failed"
        } else {
          two = "Winning"
          one = "Failed"
        }
      }
    }
    win();
    return (
      <ul className="result">
        <li style={{ width: '22%', backgroundColor: ' #efefef', marginBottom: '20px', textAlign: 'center', borderRadius: ' 5%' }}>
          <h1 style={{ color: '#2c95b6' }}>{one}</h1>
          <h2 style={{ height: '210px' }}><img height="100%" src={this.props.oneDate?this.props.oneDate.owner.avatar_url:"./img/1.png"} alt="糟糕，API出了点问题" /></h2>
          <h2 style={{marginTop: '30px',height: '60px', width: '308px', color: '#c72f32', display: 'table-cell', verticalAlign: 'middle' }}>{this.props.name1}
          </h2>
          <ul style={{ marginTop: '10px' }}>
            <li style={LiSyle}>
              <FontAwesomeIcon icon={faUserCircle} style={{ color: '#0a84ff', overflow: 'hidden' }} />
              &nbsp;{this.props.oneDate ? this.props.oneDate.name : "稍等哈，马上就加载出来"}
            </li>
            <li style={LiSyle}>
              <FontAwesomeIcon icon={faShareAlt} style={{ color: '#12ba1d' }} />
              &nbsp; {this.props.oneDate ? this.props.oneDate.forks_count : "稍等哈，马上就加载出来"}
            </li>
            <li style={LiSyle}>
              <FontAwesomeIcon icon={faStar} style={{ color: '#86c5f4' }} />
              &nbsp;{this.props.oneDate ? this.props.oneDate.stargazers_count : "稍等哈，马上就加载出来"}
            </li>
            <li style={LiSyle}>
              <FontAwesomeIcon icon={faExclamationTriangle} style={{ color: '#f09fa6' }} />
              &nbsp;{this.props.oneDate ? this.props.oneDate.open_issues_count : "稍等哈，马上就加载出来"}
            </li>
          </ul>
        </li>
        <li style={{ width: '22%', backgroundColor: ' #efefef', marginBottom: '20px', textAlign: 'center', borderRadius: ' 5%' }}>
          <h1 style={{ color: '#2c95b6' }}>{two}</h1>
          <h2 style={{ height: '210px' }}><img height="100%" src={this.props.twoDate?this.props.twoDate.owner.avatar_url:"./img/1.png"} alt="糟糕，API出了点问题" /></h2>
          <h2 style={{ marginTop: '70px', height: '60px', width: '308px', color: '#c72f32', display: 'table-cell', verticalAlign: 'middle' }}>{this.props.name2}
          </h2>
          <ul style={{ marginTop: '10px' }}>
            <li style={LiSyle}>
              <FontAwesomeIcon icon={faUserCircle} style={{ color: '#0a84ff', overflow: 'hidden' }} />
              &nbsp;{this.props.oneDate ? this.props.twoDate.name : "稍等哈，马上就加载出来"}
            </li>
            <li style={LiSyle}>
              <FontAwesomeIcon icon={faShareAlt} style={{ color: '#12ba1d' }} />
              &nbsp; {this.props.oneDate ? this.props.twoDate.forks_count : "稍等哈，马上就加载出来"}
            </li>
            <li style={LiSyle}>
              <FontAwesomeIcon icon={faStar} style={{ color: '#86c5f4' }} />
              &nbsp;{this.props.oneDate ? this.props.twoDate.stargazers_count : "稍等哈，马上就加载出来"}
            </li>
            <li style={LiSyle}>
              <FontAwesomeIcon icon={faExclamationTriangle} style={{ color: '#f09fa6' }} />
              &nbsp;{this.props.oneDate ? this.props.twoDate.open_issues_count : "稍等哈，马上就加载出来"}
            </li>
          </ul>
        </li>
      </ul>

    )
  }
}