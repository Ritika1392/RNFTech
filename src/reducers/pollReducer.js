const pollReducer = (state={},action) =>{

    switch(action.type)
    {
        case 'ADD_POLL':
            // console.log(action.data);
            state=action.data;
            // console.log(state);
            
            return state;

        case 'VOTE':
            console.log(action.data);
            return state;
        default:
            return state
    }
}
export default pollReducer;