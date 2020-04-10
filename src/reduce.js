import { combineReducers } from 'redux';
const initialUser = () => {
    let aa = 2;
    return aa
};
const userReducer = (state = 1, action) => {
    switch (action.type) {
        case "increment":
            return state + 2;
        case "decrement":
            return state - 3;
        default:
            return state;
    }
};
const Reducer = combineReducers({
    initialUser,
    userReducer,

})

export default Reducer