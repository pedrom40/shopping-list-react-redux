import React from 'react';

export default function ListItems(props) {
    return (
        <ul style={props.listStyles}>
            <li style={props.listStyles.lis}>
                <span style={props.listStyles.lis.itemName}>List Item 1</span>
                <div style={props.listStyles.lis.controls}>
                    <button style={props.listStyles.lis.controls.btns}>{props.controlLabels.toggleControlLabel}</button>
                    <button style={props.listStyles.lis.controls.btns}>{props.controlLabels.deleteControlLabel}</button>
                </div>
            </li>
            <li>
                <p>List Item 2</p>
                <div>
                    <button>Check</button>
                    <button>Delete</button>
                </div>
            </li>
            <li>
                <p>List Item 3</p>
                <div>
                    <button>Check</button>
                    <button>Delete</button>
                </div>
            </li>
        </ul>
    );
}
