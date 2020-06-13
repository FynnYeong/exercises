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
      if (parseInt(sessionStorage.getItem("stargazers_count1"),10)&&parseInt(sessionStorage.getItem("stargazers_count2"),10)) {
        if (parseInt(sessionStorage.getItem("stargazers_count1"),10) > parseInt(sessionStorage.getItem("stargazers_count2"),10)) {
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
          <h2 style={{ height: '210px' }}><img height="100%" src={1?`https://github.com/${sessionStorage.getItem("name1")}.png?size=200` : "./img/1.png"} alt="糟糕，API出了点问题" /></h2>
          <h2 style={{ marginTop: '30px', height: '60px', width: '308px', color: '#c72f32', display: 'table-cell', verticalAlign: 'middle' }}>{sessionStorage.getItem("name1")}
          </h2>
          <ul style={{ marginTop: '10px' }}>
            <li style={LiSyle}>
              <FontAwesomeIcon icon={faUserCircle} style={{ color: '#0a84ff', overflow: 'hidden' }} />
              &nbsp;{sessionStorage.getItem("name13") ? sessionStorage.getItem("name13") : "稍等哈，马上就加载出来"}
            </li>
            <li style={LiSyle}>
              <FontAwesomeIcon icon={faShareAlt} style={{ color: '#12ba1d' }} />
              &nbsp; {sessionStorage.getItem("forks_count1") ? sessionStorage.getItem("forks_count1") : "稍等哈，马上就加载出来"}
            </li>
            <li style={LiSyle}>
              <FontAwesomeIcon icon={faStar} style={{ color: '#86c5f4' }} />
              &nbsp;{sessionStorage.getItem("stargazers_count1") ? sessionStorage.getItem("stargazers_count1") : "稍等哈，马上就加载出来"}
            </li>
            <li style={LiSyle}>
              <FontAwesomeIcon icon={faExclamationTriangle} style={{ color: '#f09fa6' }} />
              &nbsp;{sessionStorage.getItem("open_issues_count1") ? sessionStorage.getItem("open_issues_count1") : "稍等哈，马上就加载出来"}
            </li>
          </ul>
        </li>
        <li style={{ width: '22%', backgroundColor: ' #efefef', marginBottom: '20px', textAlign: 'center', borderRadius: ' 5%' }}>
          <h1 style={{ color: '#2c95b6' }}>{two}</h1>
          <h2 style={{ height: '210px' }}><img height="100%" src={1?`https://github.com/${sessionStorage.getItem("name2")}.png?size=200` : "./img/1.png"} alt="糟糕，API出了点问题" /></h2>
          <h2 style={{ marginTop: '30px', height: '60px', width: '308px', color: '#c72f32', display: 'table-cell', verticalAlign: 'middle' }}>{sessionStorage.getItem("name2")}
          </h2>
          <ul style={{ marginTop: '10px' }}>
            <li style={LiSyle}>
              <FontAwesomeIcon icon={faUserCircle} style={{ color: '#0a84ff', overflow: 'hidden' }} />
              &nbsp;{sessionStorage.getItem("name23") ? sessionStorage.getItem("name23") : "稍等哈，马上就加载出来"}
            </li>
            <li style={LiSyle}>
              <FontAwesomeIcon icon={faShareAlt} style={{ color: '#12ba1d' }} />
              &nbsp; {sessionStorage.getItem("forks_count2") ? sessionStorage.getItem("forks_count2") : "稍等哈，马上就加载出来"}
            </li>
            <li style={LiSyle}>
              <FontAwesomeIcon icon={faStar} style={{ color: '#86c5f4' }} />
              &nbsp;{sessionStorage.getItem("stargazers_count2") ? sessionStorage.getItem("stargazers_count2") : "稍等哈，马上就加载出来"}
            </li>
            <li style={LiSyle}>
              <FontAwesomeIcon icon={faExclamationTriangle} style={{ color: '#f09fa6' }} />
              &nbsp;{sessionStorage.getItem("open_issues_count2") ? sessionStorage.getItem("open_issues_count2") : "稍等哈，马上就加载出来"}
            </li>
          </ul>
        </li>
      </ul>
    )
  }
}