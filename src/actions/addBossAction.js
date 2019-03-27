import { ADD_BOSS } from '../constants'


export const addBoss = (newBoss) => {
    console.log(newBoss);
    return function(dispatch) {
        console.log(newBoss);
        return fetch('http://localhost:4500/api/bosses', {
            method: 'POST',
            data: JSON.stringify(newBoss)
        }).then(response => {
            if(response.status === 404){
                console.log(response.status);
            } else {
                dispatch(addBossSuccess(newBoss));
            }
        });
    }
}   

const addBossSuccess = boss => {
    console.log(boss);
    return {
        type: ADD_BOSS,
        payload: boss
    };
};

