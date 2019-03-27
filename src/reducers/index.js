import { combineReducers } from 'redux'
import bosses from './bossesReducer'

const reducer = combineReducers({
    bosses
});

export default reducer;