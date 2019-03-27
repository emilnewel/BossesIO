import { UPDATE_BOSS } from '../constants'


export const updateBoss = (boss) => {
    const { id } = boss
    return (dispatch) => {
        
        return fetch('http://localhost:4500/api/bosses/' + id, {
            method: 'PATCH',
            data: JSON.stringify(boss)
        }).then(response => {
            console.log(response);
            if(response.status === 404){
                console.log(response.status);
            } else {
                dispatch(updateBossSuccess(boss));
            }
        });
    }
}   

const updateBossSuccess = boss => {
    return {
        type: UPDATE_BOSS,
        payload: boss
    };
};

