import React from 'react'
import './Domestic.css'
import img11 from '../images/11.jpg'
import img12 from '../images/12.jpg'
import img13 from '../images/13.jpg'
import img14 from '../images/14.jpg'

import img21 from '../images/21.jpg'
import img22 from '../images/22.jpg'
import img23 from '../images/23.jpg'
import img24 from '../images/24.jpg'

import img31 from '../images/31.jpg'
import img32 from '../images/32.jpg'
import img33 from '../images/33.jpg'
import img34 from '../images/34.jpg'

import img41 from '../images/41.jpg'
import img42 from '../images/42.jpg'
import img43 from '../images/43.jpg'
import img44 from '../images/44.jpg'

import img51 from '../images/51.jpg'
import img52 from '../images/52.jpg'
import img53 from '../images/53.jpg'
import img54 from '../images/54.jpg'

import img61 from '../images/61.jpg'
import img62 from '../images/62.jpg'
import img63 from '../images/63.jpg'
import img64 from '../images/64.jpg'
import {variableDeclaration} from "@babel/types";
class Domestic extends React.Component {
    constructor() {
        super()
        this.state = {
            titles: [
                {name: '登高踏青', id: 0},
                {name: '小憩温泉', id: 1},
                {name: '天然氧吧', id: 2},
                {name: '草原撒欢', id: 3},
                {name: '小镇时光', id: 4},
                {name: '美食之城', id: 5},
            ],
                one: [
                    {src: img11, name: '黄山', text: '春意撩人 登高踏青赏春色'},
                    {src: img12, name: '峨眉山', text: '阳春三月 闻着茶香去峨眉'},
                    {src: img13, name: '五台山', text: '迎春 祈福 登五台'},
                    {src: img14, name: '庐山', text: '亲近自然 春游庐山'},
                ],
                two: [
                    {src: img21, name: '江苏天目湖', text: '古树错落 帝王温泉'},
                    {src: img22, name: '威海天沐威海温泉', text: '森林温泉 草本养生'},
                    {src: img23, name: '广东中山温泉', text: '毗邻港澳 商务养生'},
                    {src: img24, name: '辽宁大连安泊温泉', text: '延年益寿 名誉中外'},
                ],
                three: [
                    {src: img31, name: '拉萨', text: '高原古城 圣山天湖 沁人心脾'},
                    {src: img32, name: '大理', text: '文献名邦 彩云之南 空谷幽兰'},
                    {src: img33, name: '舟山', text: '东海翡翠 舟山群岛 气候宜人'},
                    {src: img34, name: '厦门', text: '天风海涛 鼓浪岛屿 鸟语芬芳'},
                ],
                four: [
                    {src: img41, name: '锡林郭勒', text: '草原 牧民 小马驹'},
                    {src: img42, name: '坝上', text: '帝都最近的草原'},
                    {src: img43, name: '诺尔盖', text: '高原上的绿洲'},
                    {src: img44, name: '祁连山', text: '风景如画 醉美祁连山'},
                ],
                five: [
                    {src: img51, name: '西塘', text: '烟雨长廊 景色好似宣纸画'},
                    {src: img52, name: '和顺', text: '古风犹存 如诗如画'},
                    {src: img53, name: '乌镇', text: '推窗见水 小桥人家'},
                    {src: img54, name: '平遥', text: '晋商遗风 古城探幽'},
                ],
                six: [
                    {src: img61, name: '香港', text: '只有想不到，没有找不到'},
                    {src: img62, name: '成都', text: '不只有火锅，吃是头等事'},
                    {src: img63, name: '扬州', text: '吴侬软语 淮味养人'},
                    {src: img64, name: '长沙', text: '美食怕不辣，湘味最十足'},
                ],
                style:'',
                id:0
            }

    }

    click1(index){
       this.state.id = index
        this.setState({

        })
    }
    changeid(i){
        return  this.state.id ===i?'block':'none'
    }
    changeclass(index){
        return this.state.id===index?'active11':''
    }
    render() {
        return (
            <div>
                <div className="titlebox">
                    <div className="title">
                        <h2>目的地指数</h2>
                        <p>覆盖全球75万家酒店，你想住的，我们都有</p>
                    </div>
                </div>
                <div className="listtitle1">
                    <ul>
                        <li className="listguonei"><i></i>国内</li>
                        {this.state.titles.map( (menuitem, index) => {
                            return <li key={index} onClick={this.click1.bind(this,index)} className={this.changeclass(index)}>{menuitem.name}</li>
                        } )}
                    </ul>
                </div>
                <div className="listimg1">
                    <ul style={{display:this.changeid(0)}} >
                        {this.state.one.map((menuitem,index)=>{
                            return <li key={index}><a href="#"><img src={menuitem.src} alt={menuitem.name}/><span>{menuitem.name}</span></a><p>{menuitem.text}</p></li>
                        })}
                    </ul>
                    <ul style={{display:this.changeid(1)}} >
                        {this.state.two.map((menuitem,index)=>{
                            return <li key={index}><a href="#"><img src={menuitem.src} alt={menuitem.name}/><span>{menuitem.name}</span></a><p>{menuitem.text}</p></li>
                        })}
                    </ul>
                    <ul style={{display:this.changeid(2)}} >
                        {this.state.three.map((menuitem,index)=>{
                            return <li key={index}><a href="#"><img src={menuitem.src} alt={menuitem.name}/><span>{menuitem.name}</span></a><p>{menuitem.text}</p></li>
                        })}
                    </ul>
                    <ul style={{display:this.changeid(3)}} >
                        {this.state.four.map((menuitem,index)=>{
                            return <li key={index}><a href="#"><img src={menuitem.src} alt={menuitem.name}/><span>{menuitem.name}</span></a><p>{menuitem.text}</p></li>
                        })}
                    </ul>
                    <ul style={{display:this.changeid(4)}} >
                        {this.state.five.map((menuitem,index)=>{
                            return <li key={index}><a href="#"><img src={menuitem.src} alt={menuitem.name}/><span>{menuitem.name}</span></a><p>{menuitem.text}</p></li>
                        })}
                    </ul>
                    <ul style={{display:this.changeid(5)}} >
                        {this.state.six.map((menuitem,index)=>{
                            return <li key={index}><a href="#"><img src={menuitem.src} alt={menuitem.name}/><span>{menuitem.name}</span></a><p>{menuitem.text}</p></li>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}
export default Domestic
