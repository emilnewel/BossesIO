import { ADD_BOSS } from '../constants'


export const addBoss = (newBoss) => {
    return function(dispatch) {
        return fetch('http://localhost:4500/api/bosses', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(newBoss)
        }).then(response => {
            if(response.status === 404){
                console.log(response.status);
            } else {
                return response.json();
            }
        }).then(newId => {
            dispatch(addBossSuccess({newBoss, newId}));
        });
    }
}   

const addBossSuccess = bossData => {
    bossData.newBoss.id = bossData.newId.id;
    return {
        type: ADD_BOSS,
        payload: bossData.newBoss
    };
};

