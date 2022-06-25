import React from 'react';

import './ButtonsPanel.css'

function ButtonsPanel(props) {
// console.log(props.stepValue);
    return(
        <div className="buttons-panel">
            <button onClick={() => {
                // console.log('Add clicked');
                props.buttonMethod('add');
            }}>Add {props.stepValue}</button>
            <button onClick={() => {
                props.buttonMethod('reinit');
            }}>ReInit</button>
            <button onClick={() => {
                props.buttonMethod('reset');
            }}>Reset</button>
        </div>
    );
}

export default ButtonsPanel;