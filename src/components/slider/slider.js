import React, { Component } from 'react'
import './slider.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
        <div
            className="arrow right"
            style={{
                ...style,
                display: 'block',
            }}
            onClick={onClick}
        ></div>
    )
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
        <div
            className="arrow left"
            style={{
                ...style,
                display: 'block',
            }}
            onClick={onClick}
        ></div>
    )
}

export default class CustomArrows extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            variableWidth: true,
            pauseOnHover: false,
            arrows: true,
            className: 'prev-custom',
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
        }

        return (
            <div className="slider">
                <Slider {...settings}>
                    <div>
                        <h3>
                            <img src="png/1.jpeg"></img>
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <img src="png/2.jpeg"></img>
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <img src="png/3.jpeg"></img>
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <img src="png/4.jpeg"></img>
                        </h3>
                    </div>
                </Slider>
            </div>
        )
    }
}
