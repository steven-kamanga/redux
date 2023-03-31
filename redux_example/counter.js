const { createStore } = require('redux')

//Steps:

//Initial state
//constains properties to keep track of
//single count state
const initialState = {
    count: 0,
};
//actions = action -action creator
//increment & decrement
//resett
//increase by amount
//action
{
    type: 'INCREMENT';

}
//aciton creator
const incrementAction = () => {
    return {
        type: 'INCREMENT',
    }
}
//aciton creator
const decrementAction = () => {
    return {
        type: 'DECREMENT',
    }
}
//aciton creator
const resetAction = () => {
    return {
        type: 'RESET',
    }
}
//aciton creator
const incrementByAmountAction = () => {
    return {
        type: 'RESET',
    }
}
//reducers
const counterReducer = (state = initialState, action) => {
    //check the action being passed in to the reducer
    if (action.type === 'INCREMENT') {
        return {
            count: state.count + 1,
        }
    } else if (action.type === 'DECREMENT') {
        return {
            count: state.count - 1,
        }
    } else if (action.type === 'RESET') {
        return {
            count: state.count = 0,
        }
    }
}
//store
const store = createStore(counterReducer);

//getState

const stateData = store.getState();
//subscribe to store
store.subscribe(() => {
    const data = store.getState();
    console.log(data);
})
//dispatch action
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(decrementAction());
store.dispatch(decrementAction());
store.dispatch(decrementAction());
store.dispatch(incrementAction());
store.dispatch(resetAction());




