import { createStore, applyMiddleware, combineReducers } from 'redux';
// import zoximaReducer from './reducer';
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'
import { logger } from 'redux-logger';
import reducer from './reducer';


// const reducer = combineReducers({
//     zoximaReducer
// });

// const configureStore = () => {
//     return createStore(rootReducer, applyMiddleware(sagaMiddleware));
// }

// const configureStore = createStore(
//     rootReducer,
//     applyMiddleware(sagaMiddleware),
// );
// // then run the saga
// sagaMiddleware.run(mySaga)

const sagaMiddleware = createSagaMiddleware()

const configureStore = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(mySaga);

export default configureStore;