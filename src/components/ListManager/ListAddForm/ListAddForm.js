import React from 'react';

export default function ListAddForm(props) {
    return (
        <section className="add-item-form">
            <h2>Add an item</h2>
            <form>
                <input type="text" name="addItem" id="addItem" />
                <input type="submit" name="submit" id="submit" value="Add Item" />
            </form>
        </section>
    );
}
