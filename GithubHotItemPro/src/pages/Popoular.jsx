import React from 'react';
import axios from 'axios';
import Top from "../components/Top"
import Content from "../components/Content"

export default class Popoular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories',
      caseArr: [],
      loading: false,
      page: 1,
      btn: true,
      old: 0
    };
  }

  componentDidMount() {
    if (this.props.match.params.src) {
      // console.log("达成", this.props.match.params.src);
      this.getNewurl()
    } else {
      this.getList();
    }
    // console.log(this.state)
    window.addEventListener('scroll', () => {
      const { clientHeight } = document.documentElement;
      //    console.log(clientHeight)
      const { scrollHeight } = document.documentElement;
      // console.log(scrollHeight)
      const { scrollTop } = document.documentElement;
      // console.log("a",scrollTop + clientHeight === scrollHeight)
      // console.log("a-1",scrollTop + clientHeight)
      // console.log("a-2",scrollHeight)
      // console.log("b",this.state.btn)
      // console.log("b",this.state.page)
      if (scrollTop + clientHeight >= scrollHeight-5 && this.state.btn) {
        // console.log('达成');
        const { page}=this.state
        const newPage = page + 1;
        // this.setState(prve => ({ page: prve.page + 1, btn: false }));
        this.setState({
          page:newPage,
          btn:false
        })
        this.nextPage(newPage);
        // console.log('达成');
      }
    });
  }

  // componentWillUnmount() {
  //   // 卸载异步操作设置状态
  //   this.setState = () => {
  //     return;
  //   }
  // }

  getNewurl = async () => {
    const data = this.props.match.params.src
    await this.setState({
      url: `https://api.github.com/search/repositories?${data}`,
      old: this.props.match.params.key
    });
    this.getList();
  }

  getList = async () => {
    // this.getUrl()
    const { url } = this.state;
    // console.log("ccc",this.state.url)
    this.setState({
      caseArr: [],
      loading: true,
      page: 1,
    });
    await axios.get(url)
    .then(res => {
      this.setState({
        caseArr: res.data.items,
      });
    })
    .catch(err => {
      console.error(err);
    })
    this.setState({
      loading: false,
    });
  }

  nextPage = async (page) => {
    const { url,caseArr} = this.state;
    const nextUrl = `${url}&page=${page}`;
    // console.log("地址", nextUrl);
    this.setState({
      loading: true,
    });
    await axios.get(nextUrl)
      .then(res => {
        // console.log("数据1",caseArr);
        this.setState({
          caseArr:[...caseArr,...res.data.items],
          loading: false,
          btn: true,
        });
        // console.log("这是啥",this.state.caseArr)
      })
      .catch(err => {
        console.error(err);
      })
  }

  getUrl = async (data) => {
    // console.log("路由的值",this.props.match.params)
    // const data=this.props.match.params.src
    await this.setState({
      url: `https://api.github.com/search/repositories?${data}`,
      old: this.props.match.params.key
    });
    this.getList();
    // console.log("ccc", this.props)
  }

  render() {
    const { caseArr, loading } = this.state;
    // console.log(caseArr)
    return (
      <div>
        {/* <Header /> */}
        <Top getUrl={this.getUrl} old={this.state.old} />
        <Content msg={caseArr} loading={loading} />
      </div>
    );
  }
}