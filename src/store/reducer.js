import * as actionTypes from './actions';

const initialState = {
    persons: []
};

const reducer = (state = initialState , action) => {
    switch(action.type){

        case actionTypes.ADD_PERSON:
            const newPerson = {
                id: Math.random(),
                name: 'Max',
                age: Math.floor( Math.random() * 40 )
            };

            return {
                persons: state.persons.concat(newPerson)
            };

        case actionTypes.DELETE_PERSON:
            return {
                persons: state.persons.filter(el => el.id !== action.payload)
            };
        default:
            return state;
    };
};

export default reducer;