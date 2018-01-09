import React from 'react';

export default function ListItems(props) {
    return (
        <ul className="main-list">
            <li>
                <p>List Item 1</p>
                <div className="list-item-controls">
                    <button className="list-item-toggle">Check</button>
                    <button className="list-item-delete">Delete</button>
                </div>
            </li>
            <li>
                <p>List Item 2</p>
                <div className="list-item-controls">
                    <button className="list-item-toggle">Check</button>
                    <button className="list-item-delete">Delete</button>
                </div>
            </li>
            <li>
                <p>List Item 3</p>
                <div className="list-item-controls">
                    <button className="list-item-toggle">Check</button>
                    <button className="list-item-delete">Delete</button>
                </div>
            </li>
        </ul>
    );
}
