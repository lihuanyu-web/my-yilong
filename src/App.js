import React from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './component/Banner'
import Show from './component/Show'
import Domestic from './component/Domestic'
import Foreign from './component/Foreign'
import Travel from './component/Travel'
import Footer from './component/Footer'
class App extends React.Component{
  constructor(){
    super()
    this.state={
      falg1:'',
      falg2:'',
      falg3:'',
      falg4:'',
      falg5:'',
      border:''
    }
  }
  mouseover1(){
    this.state.flag1='block'
    this.state.border='1px solid #ccc'
    this.setState({

    })
  }
  mouseleave1(){
    this.state.flag1='none'
    this.state.border='1px solid transparent'
    this.setState({

    })
  }
  mouseover2(){
    this.state.flag2='block'
    this.setState({

    })
  }
  mouseleave2(){
    this.state.flag2='none'
    this.setState({

    })
  }
  mouseover3(){
    this.state.flag3='block'
    this.setState({

    })
  }
  mouseleave3(){
    this.state.flag3='none'
    this.setState({

    })
  }
  mouseover4(){
    this.state.flag4='block'
    this.setState({

    })
  }
  mouseleave4(){
    this.state.flag4='none'
    this.setState({

    })
  }
  mouseover5(){
    this.state.flag5='block'
    this.setState({

    })
  }
  mouseleave5(){
    this.state.flag5='none'
    this.setState({

    })
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li className="logo"><a href="#" title="艺龙旅行网">艺龙旅行网</a></li>
          <li className="listtop">里程商城&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</li>
          <li className="listtop">在线客服&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</li>
          <li className="listtop">帮助中心&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</li>
          <li className="language" onMouseOver={this.mouseover1.bind(this)} onMouseLeave={this.mouseleave1.bind(this)} style={{border:this.state.border}}>
            <span>English <i>icon</i></span>
            <div className="yuyan" style={{display:this.state.flag1}}>
            <p>----------</p>
            <div>
              <a href="#">简体版</a><br/>
            <p>----------</p>
              <a href="#">繁体版</a>
            </div>
            </div>
          </li>
          <li className="small applets" onMouseOver={this.mouseover3.bind(this)} onMouseLeave={this.mouseleave3.bind(this)}>
            <i></i><span>小程序 <br/>体验更轻盈</span>
            <div style={{display:this.state.flag3}}></div>
          </li>
          <li className="small phone"onMouseOver={this.mouseover2.bind(this)} onMouseLeave={this.mouseleave2.bind(this)}>
            <a href="#"><i></i><span>手机版 <br/>专享五折优惠</span></a>
            <div style={{display:this.state.flag2}}></div>
          </li>
          <li className="small telpho" onMouseOver={this.mouseover4.bind(this)} onMouseLeave={this.mouseleave4.bind(this)}>
            <i></i><span>7×24客服电话 <br/> <em>95711</em></span><b></b>
            <div style={{display:this.state.flag4}}>
              <p>国内：95711</p>
              <p>----------------------------</p>
              <p>港澳台及海外：86-551-6529-9777</p>
            </div>
          </li>
        </ul>
      </header>
      <nav className="navbar">
        <div className="navbox">
          <ul>
            <li className="active"><a href="#">首页</a></li>
            <li><a href="#">国内酒店</a></li>
            <li className="hotel"><a href="#">国际·港澳台酒店</a><i></i></li>
            <li className="fly"><a href="#">国内·国际机票</a><i></i></li>
            <li><a href="#">火车票</a></li>
            <li><a href="#">汽车票</a></li>
            <li><a href="#">旅游指南</a></li>
            <li><a href="#">商旅</a></li>
            <li className="active longin" onMouseOver={this.mouseover5.bind(this)} onMouseLeave={this.mouseleave5.bind(this)}>
              <a href="#">登录</a>|<a href="">注册</a>
              <div style={{display:this.state.flag5}} className="logindiv">
                <button>登录</button>
                <ul>
                  <li>
                    <span className="one"></span>
                    <p>酒店订单</p>
                  </li>
                  <li>
                    <span className="two"></span>
                    <p>机票订单</p>
                  </li>
                  <li>
                    <span className="three"></span>
                    <p>火车票订单</p>
                  </li>
                  <li>
                    <span className="four"></span>
                    <p>现金账户</p>
                  </li>
                  <li>
                    <span className="five"></span>
                    <p>汽车票订单</p>
                  </li>
                  <li>
                    <span className="six"></span>
                    <p>酒店收藏</p>
                  </li>
                  <li>
                    <span className="eleven"></span>
                    <p>我的点评</p>
                  </li>
                  <li>
                    <span className="eight"></span>
                    <p>个人设置</p>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <Banner></Banner>
      <Show></Show>
      <Domestic></Domestic>
      <Foreign></Foreign>
      <Travel></Travel>
      <Footer></Footer>
    </div>
  );
}
}

export default App;
