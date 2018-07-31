import React from 'react';
import { render } from 'react-dom';
//import data from '../../src/api.json';
import Home from '../pages/containers/home';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers/index'
import data from '../schemas/index';
import { Map as map } from 'immutable';



/*const initialState = {
    data: {
        //...data,
        entities: data.entities,
        categories: data.result.categories,
        search: [],
    },
    modal:{
        visibility: false,
        mediaId: null,
    }
    
}*/

const store = createStore(
    reducer,
    map(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


const homeContainer = document.getElementById('home-container');
//const holaMundo = <h1>Hola Estudiante</h1>;


render(
    <Provider store={store}>
        <Home data={data} />
    </Provider>
    , homeContainer);
//console.log("js");