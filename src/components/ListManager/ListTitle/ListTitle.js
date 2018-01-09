import React from 'react';

export default function ListTitle(props) {
    return (
      <header role="banner">
          <h1>{props.listName}</h1>
      </header>
    );
}
