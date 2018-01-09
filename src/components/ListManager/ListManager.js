import React from 'react';

import ListTitle from './ListTitle';
import ListAddForm from './ListAddForm';
import ListItems from './ListItems';

export default function ListManager(props) {
    return (
        <div style={props.cssStyles.container}>
            <ListTitle listName={props.listDefinitions.listName} />
            <main id="content" role="main">
                <ListAddForm itemDefinitions={props.listDefinitions} formStyles={props.cssStyles.addForm} />
                <ListItems listStyles={props.cssStyles.ulList} controlLabels={props.listDefinitions.controls} />
            </main>
        </div>
    );
}
