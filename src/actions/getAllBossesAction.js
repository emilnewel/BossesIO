import { GET_BOSSES } from '../constants'

const getBosses = (dispatch) => {
    return fetch('http://localhost:4500/api/bosses').then(response => {
        if(response.ok){
            return response.json();
        } else {
            console.log(response.status);
            //dispatch(getBossesFromServerFailed(response.status));
        }
    }).then(bossInfo => {
        if(bossInfo) {
            dispatch(getBossesFromServerSuccess(bossInfo));
        }
    });
}

export const getBossesFromServer = () => {
    return getBosses
        
}

const getBossesFromServerSuccess = bossInfo => {
    return {
        type: GET_BOSSES,
        payload: bossInfo
    };
};
