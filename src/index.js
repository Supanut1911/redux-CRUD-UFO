import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios'
import {Provider} from 'react-redux'
import {createStore,combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'







//======action=======
//action : getAllStd
export const getStdSuccess = (std) => {
    console.log("do")
    return {
        type:"GET_STD_SUCCESS",
        payload : std
        
    }
    
}

export const getStdFail = () => {
    return {
        type :"GET_STD_FAIL"
    }
}

//action : getEspescillyStd
export const getStdId = (value) => {
    return {
        type:"GET_STD_ID",
        payload : value
    }
}


//=======functional=======
//function:getALLstd
export const getStd = () => async (dispatch) => {
   
    try {
        const res = await axios.get('http://localhost/api/psu')
        const resBody =await res.data
        dispatch( getStdSuccess (resBody))

    }catch (error){
        dispatch ( getStdFail() )

    }
}
//function:getEspescillyStd
export const getStdById = (id) => async (dispatch) => {
    console.log("data pass :" + id)
    try{
        const res = await axios.get(`http://localhost/api/psu/${id}`)
        const resBody = await res.data
        console.log("data :" +resBody)
        dispatch( getStdId (resBody))
    }catch (error) {
        console.log('error')
    }
}
//function:Add
export const addStd = (value) => async (dispatch) => {
    // try{
    //     const res = await axios.post(`http://localhost/api/psu/${id}`)
    // }
}



//======reducer
export const stdReducer = (state =[], action) => {
    switch(action.type){
        case "GET_STD_SUCCESS" :
            console.log("action : success" , action.std)
            return action.payload
        case "GET_STD_FAIL" :
            return action.payload
        case "GET_STD_ID" :
            return action.payload
        default :
            return state

    }
    
}


export const rootReducer = combineReducers({
    std : stdReducer
})

export const store = createStore(rootReducer ,applyMiddleware(thunk))


ReactDOM.render(<Provider store = {store}>
                <App />
            </Provider>, document.getElementById('root'));

serviceWorker.unregister();
