import { all } from "redux-saga/effects"
import loginSaga from './components/login/login-saga'

export default function* combibedSaga() {
    yield all([loginSaga()]);
}


// export default function* rootSaga() {
//     yield all([fetchApi()]);
// }
