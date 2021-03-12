import React from "react"
import Slider from "../slider/slider"
import MostPopular from "../mostComponent/mostPopular"

const HomePage = () => {
    return (
        <div>
            <React.Fragment>
                <hr></hr>
                <Slider />
                <MostPopular />
                <hr></hr>
              </React.Fragment>
        </div>
    )
}

export default HomePage
