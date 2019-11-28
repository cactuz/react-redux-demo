export default (state, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_TECHNOLOGY":
            return {
                ...state,
                tech: action.text
            };
            //You should not mutate the state received in your Reducer. Instead, you should always return a new copy of the state.
            //Use ES6 spread operator ...

        default:
            return state;
    }
}
