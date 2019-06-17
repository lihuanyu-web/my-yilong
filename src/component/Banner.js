import React from 'react'
import './Banner.css'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import img5 from '../images/5.jpg'
import img6 from '../images/6.jpg'
class Banner extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    componentDidMount () {

        var mySwiper = new Swiper( '.swiper-container', {
            autoplay: true,
            loop: true,
            effect : 'fade',

            pagination: {
                pagination: '.swiper-pagination',
                paginationClickable :true,
                el: '.swiper-pagination',
                clickable: true,
                autoplayDisableOnInteraction : false,
            }
        } )
    }
    render(){
        return(
            <div>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"><img src={img1} alt=""/></div>
                        <div className="swiper-slide"><img src={img2} alt=""/></div>
                        <div className="swiper-slide"><img src={img3} alt=""/></div>
                        <div className="swiper-slide"><img src={img4} alt=""/></div>
                        <div className="swiper-slide"><img src={img5} alt=""/></div>
                        <div className="swiper-slide"><img src={img6} alt=""/></div>
                    </div>
                    <div className="swiper-pagination"></div>

                </div>
            </div>
        )
    }
}
export default Banner
