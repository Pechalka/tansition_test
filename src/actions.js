import { push } from 'redux-router';

export function appStart() {
    return (dispatch, getState) => {
        console.log(' APP START ');
    };
}
