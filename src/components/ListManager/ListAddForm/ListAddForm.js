import React from 'react';
import { connect } from 'react-redux';
import { addListItem } from '../../../actions';

export class ListAddForm extends React.Component {

    constructor(props) {
        super(props);
    }

    onSubmit(event) {
        event.preventDefault();

        const value = this.input.value.trim();
        this.props.dispatch(addListItem(value));
        this.input.value = '';
        this.input.focus();

    }

    render() {
        return (
            <section>
                <form onSubmit={e => this.onSubmit(e)}>
                    <label htmlFor="addItem">{props.itemDefinitions.itemLabel}</label>
                    <input
                        type="text"
                        name="addItem"
                        id="addItem"
                        placeholder={props.itemDefinitions.itemInputPlaceholder}
                        style={props.formStyles.inputText}
                        ref={input => this.textInput = input}
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

}

const mapStateToProps = state => ({
    list: state.list
});

export default connect (mapStateToProps)(ListAddForm);