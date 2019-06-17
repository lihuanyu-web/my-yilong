import React from 'react'
import './Travel.css'
import imgs1 from '../images/l1.jpg'
import imgs2 from '../images/l2.jpg'
import imgs3 from '../images/l3.jpg'
import imgs4 from '../images/l4.jpg'
import imgs5 from '../images/t1.jpg'
import imgs6 from '../images/t2.jpg'
class Travel extends React.Component{
    constructor(){
        super()
        this.state={
            celists:[
                {name:'烟雨江南醉杭州 正是问茶时',src:imgs1},
                {name:'无锡鼋头渚的樱舞飞扬',src:imgs2},
                {name:'武大樱花 飞扬校园里的青春',src:imgs3},
                {name:'昆明郁金香 赏花何必去荷兰',src:imgs4},
            ],
            setindex:0
        }
    }
    mousover1(index){
        this.state.setindex=index
    this.setState({

    })
    }
    changbg(i){
     return  this.state.setindex ===i?'#89ca00':''

    }
    changcolor(i){
        return  this.state.setindex ===i?'#ffffff':'#333'
    }
    changdis(index1){
    return this.state.setindex===index1?'block':'none'
    }
    render() {
        return(
            <div>
                <div className="titleboxtr">
                    <div className="titletr">
                        <h2>旅游指南</h2>
                    </div>
                </div>
                <div className="Trbox">
                    <div className="Trboxleft">
                        <div className="Trlistleft">
                            {this.state.celists.map((item,index)=>{
                                return (
                                    <div key={index} className="Trlistleft1" style={{background:this.changbg( index),color:this.changcolor( index)}} onMouseOver={this.mousover1.bind(this,index)}>{item.name}<span style={{background:this.changbg( index)}}></span></div>
                                )
                            })}
                        </div>
                        <div className="Trimgleft">
                            {this.state.celists.map((item,index1)=>{
                                return (
                                    <div key={index1} className="Trimgleft1" style={{display:this.changdis(index1)}}><img src={item.src} alt={item.name}/></div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="Trboxright">
                        <div className="Trboxright1 Trrightpublic">
                            <img src={imgs5} alt=""/>
                            <p>再赴婺源油菜花之约</p>
                        </div>
                        <div className="Trboxright2 Trrightpublic">
                            <img src={imgs6} alt=""/>
                            <p>全年旅行月历 四季里的12种玩法</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Travel
