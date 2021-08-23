import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import reducer from './reducer';

const middlWare = [thunk]

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middlWare))

)

export default store;