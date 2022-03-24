import React from "react";
import {FetchQuotes} from "./App";
import './quote.scss';

interface Props {
    quote:FetchQuotes | null,
    adviceNum:number
}

const Quote:React.FC <Props> = ({quote, adviceNum}) => {
    return (
        <div className="main_container">
            <strong>ADVICE: #{adviceNum}</strong>
            <p>
                "{quote?.text}"
            </p>
            <div className="pause_icon"><i className="fa-solid fa-pause"></i></div>
            <div className="square_container" onClick={() => window.location.reload()}><i className="fa-solid fa-dice-five"></i></div>
        </div>
    )
}
export default Quote