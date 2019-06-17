import React from 'react'
import './Foreign.css'
import img211 from '../images/211.jpg'
import img212 from '../images/212.jpg'
import img213 from '../images/213.jpg'
import img214 from '../images/214.jpg'

import img221 from '../images/221.jpg'
import img222 from '../images/222.jpg'
import img223 from '../images/223.jpg'
import img224 from '../images/224.jpg'

import img231 from '../images/231.jpg'
import img232 from '../images/232.jpg'
import img233 from '../images/233.jpg'
import img234 from '../images/234.jpg'

import img241 from '../images/241.jpg'
import img242 from '../images/242.jpg'
import img243 from '../images/243.jpg'
import img244 from '../images/244.jpg'

import img251 from '../images/251.jpg'
import img252 from '../images/252.jpg'
import img253 from '../images/253.jpg'
import img254 from '../images/254.jpg'

import {variableDeclaration} from "@babel/types";
class Domestic extends React.Component {
    constructor() {
        super()
        this.state = {
            titles: [
                {name: '文艺清新', id: 0},
                {name: '面朝大海', id: 1},
                {name: '别样建筑', id: 2},
                {name: '浪漫主义', id: 3},
                {name: '魅力都市', id: 4},
            ],
                one: [
                    {src: img211, name: '伦敦', text: '风情英伦，帝国余韵'},
                    {src: img212, name: '清迈', text: '泰北玫瑰，慢行古城'},
                    {src: img213, name: '济州岛', text: '最传统的浪漫，最神秘的自然'},
                    {src: img214, name: '罗马', text: '永恒之城，魅力无限'},
                ],
                two: [
                    {src: img221, name: '普吉岛', text: '海岛胜地，天人合一'},
                    {src: img222, name: '马尔大夫', text: '一岛一世界'},
                    {src: img223, name: '沙巴', text: '纯净之极的原生态梦幻岛屿'},
                    {src: img224, name: '夏威夷', text: '凝聚着东方妩媚与西方性感'},
                ],
                three: [
                    {src: img231, name: '巴塞罗那', text: '天使之城，艺术之都'},
                    {src: img232, name: '米兰', text: '在时尚与古典间穿梭'},
                    {src: img233, name: '莫斯科', text: '畅饮伏特加的英雄之城'},
                    {src: img234, name: '伊斯坦布尔', text: '古老与现代辉映，东方与西方交融'},
                ],
                four: [
                    {src: img241, name: '马尔大夫', text: '一岛一世界'},
                    {src: img242, name: '圣托里尼', text: '蓝白色的人间伊甸园'},
                    {src: img243, name: '巴黎', text: '浪漫如斯，热情如是'},
                    {src: img244, name: '普罗旺斯', text: '薰衣草之乡'},
                ],
                five: [
                    {src: img251, name: '新加坡', text: '乐享狮城，多彩四季'},
                    {src: img252, name: '阿姆斯特丹', text: '郁金香绽放的水都'},
                    {src: img253, name: '洛杉矶', text: '好莱坞的风情'},
                    {src: img254, name: '吉隆坡', text: '双子塔上，气度非凡'},
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
        return this.state.id===index?'active12':''
    }
    render() {
        return (
            <div>
                <div className="listtitle1">
                    <ul>
                        <li className="listguonei"><i></i>海外</li>
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
                </div>
            </div>
        )
    }
}
export default Domestic
