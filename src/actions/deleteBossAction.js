import { DELETE_BOSS } from '../constants'

export const deleteBoss = (id) => {
    return function(dispatch) {
        return fetch('http://localhost:4500/api/bosses/' + id, {
            method: 'DELETE',
            data: id
        }).then(response => {
            if(response.ok){
                return;
            } else {
                console.log(response.status);
                //dispatch(getBossesFromServerFailed(response.status));
            }
        }).then(() => {
            dispatch(deleteBossFromServerSuccess(id));
        });
    }
    
}   

const deleteBossFromServerSuccess = id => {
    return {
        type: DELETE_BOSS,
        payload: id
    };
};
