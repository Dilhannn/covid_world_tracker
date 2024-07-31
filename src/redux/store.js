import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer'
import watchFetchCountryData from './sagas';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  );
  
  sagaMiddleware.run(watchFetchCountryData);

  export default store;