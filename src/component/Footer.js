import React from 'react'
import './Footer.css'
class Footer  extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }

    render() {
        return (
            <div className="footer">
                <ul className="footertop">
                    <li><i className="footerone"></i>全球110万家酒店</li>
                    <li><i className="footertwo"></i>订酒店返现金高达20%</li>
                    <li><i className="footerthree"></i>国际酒店8折起</li>
                    <li><i className="footerfour"></i>7×24小时服务</li>
                </ul>
                <div className="footerbottom">
                    <div className="footerbottom1">
                        <dl className="Joinlist">
                            <dt>加盟合作</dt>
                            <dd>酒店加盟</dd>
                            <dd>开放平台</dd>
                            <dd>代理合作</dd>
                            <dd>广告服务</dd>
                            <dd>商家中心</dd>
                        </dl>
                        <dl className="Joinlist">
                            <dt>关于艺龙</dt>
                            <dd>酒店大全</dd>
                            <dd>国际酒店</dd>
                            <dd>旅行保险</dd>
                            <dd>校园招聘</dd>
                            <dd>联系我们</dd>
                        </dl>
                        <dl className="appxiazai">
                            <dt>艺龙APP下载</dt>
                            <dd></dd>
                        </dl>
                        <dl className="weixin">
                            <dt>艺龙官方微信</dt>
                            <dd></dd>
                        </dl>
                        <dl className="xiaochenxu">
                            <dt>同程艺龙小程序</dt>
                            <dd></dd>
                        </dl>
                    </div>
                    <div className="line">
                        <p>© 2000 - 2019 北京艺龙信息技术有限公司, eLong, Inc or its affiliates. All Rights Reserved.&nbsp;&nbsp; |&nbsp;&nbsp;<a
                            href="#"> ICP证:合B2-20180015 </a></p>
                        <p className="ssline"><a href="#"><i></i>京公网安备11010502026059号</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#"> 经营执照</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#"> 《艺龙旅行网服务条款》</a>&nbsp;&nbsp;|&nbsp;&nbsp;违法和不良信息举报电话：95711-9&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">举报邮箱：wfjb@ly.com</a></p>
                    </div>
                    <ul className="website">
                        <li className="website1"></li>
                        <li className="website2"></li>
                        <li className="website3"></li>
                        <li className="website4"></li>
                        <li className="website5"></li>
                        <li className="website6"></li>
                    </ul>

                </div>
            </div>
        );
    }

}
export default Footer
