import React from 'react';
import axios from 'axios';
import Top from "@/components/Top"
import Content from "@/components/Content"

export default class Popoular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'q=stars:>1&sort=stars&order=desc&type=Repositories',
      caseArr: [],
      loading: false,
      page: 1,
      btn: true,
    };
  }

  componentDidMount() {
    this.getList();
    window.addEventListener('scroll', () => {
      const { clientHeight } = document.documentElement;
      const { scrollHeight } = document.documentElement;
      const { scrollTop } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 5 && this.state.btn) {
        const { page } = this.state
        const newPage = page + 1;
        this.setState({
          page: newPage,
          btn: false
        })
        this.nextPage(newPage);
      }
    });
  }

  getList = async (data) => {
    let nUrl = "q=stars:>1&sort=stars&order=desc&type=Repositories";
    if(data){
      nUrl=data
    }else if(this.props.match.params.src){
      nUrl = this.props.match.params.src
    }else{
      nUrl = "q=stars:>1&sort=stars&order=desc&type=Repositories";
    }
    this.setState({
      url: nUrl,
      caseArr: [],
      loading: true,
      page: 1,
    });
    await axios.get(`https://api.github.com/search/repositories?${nUrl}`)
      .then(res => {
        this.setState({
          caseArr: res.data.items,
        });
      })
      .catch(err => {
        console.error(err);
        alert("API调用失败，重新刷新试试")
      })
    this.setState({
      loading: false,
    });
  }

  nextPage = async (page) => {
    const { url, caseArr } = this.state;
    const nextUrl = `https://api.github.com/search/repositories?${url}&page=${page}`;
    this.setState({
      loading: true,
    });
    await axios.get(nextUrl)
      .then(res => {
        this.setState({
          caseArr: [...caseArr, ...res.data.items],
          loading: false,
          btn: true,
        });
      })
      .catch(err => {
        console.error(err);
        alert("API调用失败，重新刷新试试")
      })
  }

  render() {
    const { caseArr, loading } = this.state;
    return (
      <div>
        <Top getArr={this.getList} btnkey={this.state.url} />
        <Content msg={caseArr} loading={loading} />
      </div>
    );
  }
}