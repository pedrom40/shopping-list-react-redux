export const ADD_LIST_ITEM = 'ADD_LIST_ITEM';
export const addListItem = item => ({
    type: ADD_LIST_ITEM,
    item
});

export const DELETE_LIST_ITEM = 'DELETE_LIST_ITEM';
export const deleteListItem = item => ({
    type: DELETE_LIST_ITEM,
    item
});