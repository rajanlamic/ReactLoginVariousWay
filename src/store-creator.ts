import { createStore, applyMiddleware, compose } from "redux";
import combibedReducers from "./combined-reducers";
import createSagaMiddleware from 'redux-saga'
import combibedSaga from './combined-saga'
import loginReducer from "./components/login/login-reducer";
import loginSaga from "./components/login/login-saga";

declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
}

window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || {};

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const sagaMiddleware = createSagaMiddleware();

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
    // other store enhancers if any
);

const store = createStore(combibedReducers, enhancer);
sagaMiddleware.run(loginSaga)

export default store






// 	const composeEnhancers =
// 		typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// 			? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
// 					{
// 						// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
// 					}
// 				)
// 			: '';

// 	store = createStore(
// 		reducers,
// 		composeEnhancers(
// 			applyMiddleware(logger, trackingMiddleware, sagaMiddleware)
// 			// other store enhancers if any
// 		)
// 	);
// 	sagaMiddleware.run(rootSaga);
// } else {
// 	const createStoreWithMiddleware = applyMiddleware(trackingMiddleware, sagaMiddleware)(createStore);

// 	store = createStoreWithMiddleware(reducers);
// 	sagaMiddleware.run(rootSaga);
// }

// export default store;
