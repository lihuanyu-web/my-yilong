import React from 'react'
import './Show.css'

class Show extends React.Component{
    constructor(){
        super()
        this.state={
            shows:[
                {class:'oneshow',text:'园林酒店'},
                {class:'twoshow',text:'情侣酒店'},
                {class:'threeshow',text:'设计师酒店'},
                {class:'fourshow',text:'青年旅社'},
                {class:'fiveshow',text:'特色客栈'},
                {class:'sixshow',text:'海岛酒店'},
                {class:'elevenshow',text:'海外温泉'},
            ],
            setindex:0
        }
    }
    mouse1(index){
    this.setState({
        setindex:index
    })
    }
    changitem(index){
return index === this.state.setindex?'400px':'133px'
    }
    render() {
        return(
            <div className="bigbox">
            <div className="showbox">
                <div className="showboxsamll">
                    <div>
                        <i></i>
                        <a href="#">登录</a>
                        <em>展示你的个性化内容</em>
                    </div>
                </div>
                <ul>
                    {this.state.shows.map((item,index)=>{
                        return (
                            <li className={item.class} key={index} style={{width:this.changitem(index)}}  onMouseOver={this.mouse1.bind(this, index)}><a href="#"><span>{item.text}</span></a></li>
                        )
                    })}
                    {/*<li className="oneshow active1"><a href="#"><span>园林酒店</span></a></li>*/}
                    {/*<li className="twoshow"><a href="#"><span>情侣酒店</span></a></li>*/}
                    {/*<li className="threeshow"><a href="#"><span>设计师酒店</span></a></li>*/}
                    {/*<li className="fourshow"><a href="#"><span>青年旅社</span></a></li>*/}
                    {/*<li className="fiveshow"><a href="#"><span>特色客栈</span></a></li>*/}
                    {/*<li className="sixshow"><a href="#"><span>海岛酒店</span></a></li>*/}
                    {/*<li className="elevenshow"><a href="#"><span>海外温泉</span></a></li>*/}
                </ul>
            </div>
            </div>
        )
    }
}
export default Show
