import React from 'react';
import { connect } from 'react-redux';
import { deleteListItem } from '../../../actions';

export function ListItems(props) {

    const list = props.list.map((item, index) => (
        <li key={index} style={props.listStyles.lis}>

            <span style={props.listStyles.lis.itemName}>{item}</span>

            <div style={props.listStyles.lis.controls}>

                <button style={props.listStyles.lis.controls.btns}>
                    {props.controlLabels.toggleControlLabel}
                </button>

                <button style={props.listStyles.lis.controls.btns} onClick={() => props.dispatch(deleteListItem(item))}>
                    {props.controlLabels.deleteControlLabel}
                </button>

            </div>

        </li>
    ));

    return (
        <ul style={props.listStyles}>
            {list}
        </ul>
    );
}

const mapStateToProps = state => ({
    list: state.list
});

export default connect (mapStateToProps)(ListItems);