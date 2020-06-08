class Top extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            clicker:0
        }
        this.toplist = [
            { title: 'All', src: 'https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories' },
            { title: 'JavaScript', src: 'https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&sort=stars&order=desc&type=Repositories' },
            { title: 'Ruby', src: 'https://api.github.com/search/repositories?q=stars:%3E1+language:ruby&sort=stars&order=desc&type=Repositories' },
            { title: 'Java', src: 'https://api.github.com/search/repositories?q=stars:%3E1+language:java&sort=stars&order=desc&type=Repositories' },
            { title: 'CSS', src: 'https://api.github.com/search/repositories?q=stars:%3E1+language:css&sort=stars&order=desc&type=Repositories' },
            { title: 'Python', src: 'https://api.github.com/search/repositories?q=stars:%3E1+language:python&sort=stars&order=desc&type=Repositories' }
        ]
    }
    handleClick = (ev) => {
        this.props.getUrl(ev)
        console.log(ev)
    }
    changeVul = (index) =>{
        this.setState({
            clicker:index
        })
        console.log(this.state.clicker)
    }
    render() {
        return (
            <div className="top">
                <ul style={{display: "flex",flexWrap: "nowrap",justifyContent: "center"}}>
                    {/* <li className=""><a href="">All</a></li>
                    <li className=""><a href="">JavaScript</a></li>
                    <li className=""><a href="">Ruby</a></li>
                    <li className=""><a href="">All</a></li>
                    <li className=""><a href="">JavaScript</a></li>
                    <li className=""><a href="">Ruby</a></li> */}
                    {this.toplist.map((item, index) =>
                        <li key={index} style={{}} className={`header-item ${index===this.state.clicker? "active" : "no"}`} style={{fontSize: "25px",fontWeight: "bold",margin:" 40px 10px 25px 10px"}}><a href="#javascript" name={item.src} onClick={()=>{this.handleClick(item.src);this.changeVul(index)}}>{item.title}</a></li>
                    )}
                </ul>
            </div>
        )
    }
}
class Content extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const LiSyle ={
            width: '100%',
            textAlign:'left',
            paddingLeft: '15%',
            boxSizing: 'border-box',
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom:"15px",
            // height:'4%',
            // overflow: "hidden"
            
        }
        const list = this.props.msg.map((item, index) =>
            <li key={index} style={{width: '22%',backgroundColor:' #efefef',marginBottom: '20px',textAlign: 'center',borderRadius:' 5%'}}>
                <h1 style={{ color: "#2c95b6"}}>#{index + 1}</h1>
                <h2 style={{ height:'240px'}}><img width='70%' src={item.owner.avatar_url } alt="!" /></h2>
                <h2 style={{height:'60px',width:'308px',color: "#c72f32",display:"table-cell",verticalAlign:"middle"}} >{item.name}</h2>
                <ul style={{marginTop: '20px'}}>
                    <li style={LiSyle}><i style={{ color: "#0a84ff",overflow: "hidden"}} className="fa fa-user-circle-o"></i>&nbsp;{item.name}</li>
                    <li style={LiSyle}>&nbsp;<i style={{ color: "#12ba1d" }} className="fa fa-code-fork"></i>&nbsp;{item.forks_count}</li>
                    <li style={LiSyle}><i style={{ color: "#86c5f4" }} className="fa fa-star"></i>&nbsp;{item.stargazers_count}</li>
                    <li style={LiSyle}><i style={{ color: "#f09fa6" }} className="fa fa-exclamation-triangle"></i>&nbsp;{item.open_issues_count}</li>
                </ul>
            </li>
        )
        return (
            <main>
                <ul className='content' style={{display: "flex",width: "1400px",flexWrap: "wrap",justifyContent: "space-around",alignItems: "space-around",margin:" 0 auto",textAlign: 'center'}}>
                    {list}
                </ul>
                {this.props.loading ? <h5 style={{textAlign: "center"}} className="loading"><i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
                    <span className="sr-only">Loading...</span> </h5> : <span></span>}
            </main>

        )
    }
}
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            url: 'https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories',
            caseArr: [],
            loading: false,
            page: 1,
            btn: true
        }
    }
    getList = async () => {
        const { url } = this.state
        // console.log( { url } )
        this.setState({
            caseArr:[],
            loading: true,
            page: 1
        })
        try {
            const res = await axios.get(url)
            this.setState({
                caseArr: res.data.items
            })
            // console.log(this.state)
        } catch (e) {
            console.log(e)
        }
        this.setState({
            loading: false
        })
    }
    nextPage = async (page) => {
        const { url } = this.state
        let nextUrl = `${url}&page=${page}`
        console.log(nextUrl)
        this.setState({
            loading: true
        })
        try {
            const res = await axios.get(nextUrl)
            this.setState({
                caseArr: [...this.state.caseArr, ...res.data.items]
            })
            // console.log(this.state)
        } catch (e) {
            console.log(e)
        }
        this.setState({
            loading: false,
            btn:true
        })
    }
    // fetch = async () => {
    //     const { url } = this.state
    //     // console.log( { url } )
    //     this.setState({
    //         caseArr: [],
    //         loading: true
    //     })
    //     await axios.get(url)
    //         .then(res => {
    //             this.setState({
    //                 caseArr: res.data.items
    //             })
    //         })
    //         .catch(err => {
    //             console.error(err);
    //         })
    //     this.setState({
    //         loading: false
    //     })

    // }
    // nextPage = async () => {
    //     const { url } = this.state
    //     let nextUrl = `${url}&page=${page}`
    //     console.log(nextUrl)
    //     this.setState({
    //         loading: true,
    //         btn: false

    //     })
    //     await axios.get(url)
    //         .then(res => {
    //             this.setState({
    //                 caseArr: [...this.state.caseArr, ...res.data.items]
    //             })
    //         })
    //         .catch(err => {
    //             console.error(err);
    //         })
    //     this.setState({
    //         loading: false,
    //         btn: true
    //     })
    // }
    getUrl = async (data) => {
        await this.setState({
            url:data
        })
        this.getList()
        console.log("a",this.state.url)
        console.log("b",data)
    }

    componentDidMount() {
        this.getList()
        // console.log(this.state)
        window.addEventListener("scroll", () => {
            let clientHeight = document.documentElement.clientHeight
            //    console.log(clientHeight)
            let scrollHeight = document.documentElement.scrollHeight
            // console.log(scrollHeight)
            let scrollTop = document.documentElement.scrollTop;
            // console.log(scrollTop)
            if (scrollTop + clientHeight === scrollHeight && this.state.btn) {
                console.log("达成")
                let newPage = this.state.page + 1
                this.setState({ page: newPage + 1, btn: false })
                this.nextPage(newPage)
            }
        })

    }

    render() {
        const { caseArr, loading } = this.state
        // console.log(caseArr)
        return (
            <div>
                <Top getUrl={this.getUrl} />
                <Content msg={caseArr} loading={loading} />
            </div>
        )
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('main')
)