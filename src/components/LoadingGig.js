import React from "react";

import './Loading.css'

import loadingGif from '../Images/Spin-1s-200px.gif'

const Loading = (props) => {
    return <div className="backdrop">
        <img src={loadingGif} alt="Loading" />

    </div>
}

export default Loading
