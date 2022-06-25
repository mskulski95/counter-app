import React from "react";
import "./Step.css"

function Step(props) {

    return (
        <div className="step">
            Krok:
            <input type="number" onChange={(e) => props.stepMethod(e)}/>
        </div>
    );
}

export default Step;