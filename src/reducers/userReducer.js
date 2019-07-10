import { ADD_USER, UPDATE_USER, DELETE_USER } from '../constants/type'


const initialState = [{
    name: 'Use Redux',
    age: 0,
    id: 0,
}];

export default function users(state = initialState, action) {
    switch (action.type) {
        case ADD_USER:
            return [{
                id: (state.length === 0) ? 0 : state[0].id + 1,
                name: action.data.name,
                age: action.data.age
            }, ...state];
        case UPDATE_USER:
            return [{
                id: action.data.id,
                name: action.name
            }, ...state];
        case DELETE_USER:
            return state.filter( (user) => user.id !== action.id);
        default:
            return state;
    }
}
