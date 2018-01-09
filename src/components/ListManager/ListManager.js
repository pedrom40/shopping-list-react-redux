import React from 'react';

import ListTitle from './ListTitle';
import ListAddForm from './ListAddForm';
import ListItems from './ListItems';

export default function ListManager(props) {
    return (
        <div>
            <ListTitle />
            <main id="content" role="main">
                <ListAddForm />
                <ListItems />
            </main>
        </div>
    );
}
