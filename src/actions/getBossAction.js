import { GET_BOSS } from '../constants'

export const getBoss = (id) => {
    return function(dispatch) {
        return fetch('http://localhost:4500/api/bosses/' + id).then(response => {
            if(response.ok){
                return response.json();
            } else {
                console.log(response.status);
                //dispatch(getBossesFromServerFailed(response.status));
            }
        }).then(boss => {
            if(boss) {
                dispatch(getBossFromServerSuccess(boss));
            }
        });
    }
    
}   

const getBossFromServerSuccess = boss => {
    return {
        type: GET_BOSS,
        payload: boss
    };
};
