import { takeEvery, takeLatest, call, put } from "@redux-saga/core/effects";
import { LOGIN } from "./login-constants";
import { useDispatch } from "react-redux";
import { logIn, logInSaga } from "./login-service";
import { Action } from 'redux-actions';
import { makeLogin } from "./login-action";


function* processLogin(action: Action<any>) {
    try {
        const result = yield call(logInSaga, action.payload)
        yield put(makeLogin({ ...action.payload, token: result }))
    } catch (error) {
        yield put({ type: LOGIN.REJECTED })
        console.log('error', error)
    }

}

function* loginSaga() {
    yield takeLatest(LOGIN.PENDING, processLogin)
}

export default loginSaga
