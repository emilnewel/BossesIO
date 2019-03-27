
const initialState = {
    bosses : [],
    boss : {}
}

const bossesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_BOSSES':
            return {...state,
                bosses : action.payload};
        case 'GET_BOSS':
            return {
                ...state, 
                boss : action.payload
            };
        case 'UPDATE_BOSS':
            return {
                ...state,
                boss : action.payload
            }
        case 'DELETE_BOSS':
            console.log(state.bosses)
            // let id = action.payload;
            // let oldBosses = state.bosses;
            // let newBossList = oldBosses.filter(boss => boss.id != id);
            // console.log(newBossList)
            return state;
        case 'ADD_BOSS':
            console.log(action.payload)
            return action.payload;
        default: return state;
    };
};
export default bossesReducer

 