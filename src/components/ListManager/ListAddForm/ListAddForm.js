import React from 'react';

export default function ListAddForm(props) {console.log(props);

    return (
        <section>
            <form>
                <label htmlFor="addItem">{props.itemDefinitions.itemLabel}</label>
                <input
                    type="text"
                    name="addItem"
                    id="addItem"
                    placeholder={props.itemDefinitions.itemInputPlaceholder}
                    style={props.formStyles.inputText}
                />
                <input
                    type="submit"
                    name="submit"
                    id="submit"
                    value={props.itemDefinitions.itemSubmitLabel}
                    style={props.formStyles.inputSubmit}
                />
            </form>
        </section>
    );
}