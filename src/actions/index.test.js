import * as actions from '../actions';

describe('addListItem', () => {
    it('Should return the action', () => {
        const action = actions.addListItem();
        expect(action.type).toEqual(actions.ADD_LIST_ITEM);
    });
});