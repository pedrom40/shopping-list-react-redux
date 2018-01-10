import * as actions from '../actions';

const initialState = {
    list: ['Banking', 'Home', 'Auto', 'Life']
};

export default (state = initialState, action) => {

    if (action.type === actions.ADD_LIST_ITEM) {

        return Object.assign({}, state, {
            list: [...state.list, action.item]
        });

    }

    else if (action.type === actions.DELETE_LIST_ITEM) {

        return Object.assign({}, state, {
            list: state.list.filter(item => item !== action.item)
        });

    }

    return state;
};