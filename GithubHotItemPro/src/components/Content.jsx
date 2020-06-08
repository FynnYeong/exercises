import React from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar, faUserCircle, faExclamationTriangle, faShareAlt, faSpinner,
} from '@fortawesome/free-solid-svg-icons';
// import LazyLoad from 'react-lazyload'

export default class Content extends React.Component {
  
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
      const list = this.props.msg.map((item, index) => (
        <li
          key={index}
          style={{
            width: '22%', backgroundColor: ' #efefef', marginBottom: '20px', textAlign: 'center', borderRadius: ' 5%',
          }}
        >
          <h1 style={{ color: '#2c95b6' }}>#{index + 1}</h1>
          <h2 style={{ height: '240px' }}><img width="70%" src={item.owner.avatar_url} alt="糟糕，API出了点问题" /></h2>
          <h2 style={{
            height: '60px', width: '308px', color: '#c72f32', display: 'table-cell', verticalAlign: 'middle',
          }}
          >{item.name}
          </h2>
          <ul style={{ marginTop: '20px' }}>
            <li style={LiSyle}><FontAwesomeIcon icon={faUserCircle} style={{ color: '#0a84ff', overflow: 'hidden' }} />&nbsp;{item.name}</li>
            <li style={LiSyle}><FontAwesomeIcon icon={faShareAlt} style={{ color: '#12ba1d' }} />&nbsp;{item.forks_count}</li>
            <li style={LiSyle}><FontAwesomeIcon icon={faStar} style={{ color: '#86c5f4' }} />&nbsp;{item.stargazers_count}</li>
            <li style={LiSyle}><FontAwesomeIcon icon={faExclamationTriangle} style={{ color: '#f09fa6' }} />&nbsp;{item.open_issues_count}</li>
          </ul>
        </li>
      ));
      return (
        <div>
          <ul
            className="content"
            style={{
              display: 'flex', width: '1400px', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'space-around', margin: ' 0 auto', textAlign: 'center',
            }}
          >
            {list}
          </ul>
          {this.props.loading ? (
            <h5 style={{ textAlign: 'center' }} className="loading"><FontAwesomeIcon icon={faSpinner} spin style={{ fontSize: '30px' }} />
              <span className="sr-only">Loading...</span>
            </h5>
          ) : <span />}
        </div>
      );
    }
  }