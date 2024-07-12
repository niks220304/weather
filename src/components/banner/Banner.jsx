import React from "react";
import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Cloudy from "../../assets/cloudy.png"

const Banner = ({temperature, min, max, status}) => {
    return (
        <div className="banner">
            <div className="typography">
                <div className="temperature">{temperature}°C</div>
                <div className="minmax">
                    <div className="label">
                        <FontAwesomeIcon icon={faArrowUp} />
                        {max}°C
                    </div>
                    <div className="label">
                        <FontAwesomeIcon icon={faArrowDown} />
                        {min}°C
                    </div>
                </div>
                <div className="status">
                    {status}
                </div>
            </div>
            <div className="image">
                <img src = {Cloudy} />
            </div>
        </div>
    );
};

export default Banner;