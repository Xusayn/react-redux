import {
    LOADING,
    SUCCESS,
    ERROR

} from './gettypes'

function fetchUsersRequest() {
    return{
        type:LOADING,
    };
}
function fetchUsersSuccess(users) {
    return{
        type:SUCCESS,
        payload: users,
    };
}
function fetchUsersFailure(error) {
    return{
        type:FAILURE,
        payload: error,
    };
}

export { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure }