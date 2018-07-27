import React from 'react';
import {render} from 'react-dom';
import data from '../../src/api.json';
import Home from '../pages/containers/home';

const homeContainer = document.getElementById('home-container');
//const holaMundo = <h1>Hola Estudiante</h1>;


render( <Home data={data} /> ,homeContainer);
//console.log("js");