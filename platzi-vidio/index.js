import React from 'react';
import {render} from 'react-dom';
import Playlist from '../src/playlist/components/playlist'
import data from '../src/api.json'

//const root = document.getElementById('root');
//const holaMundo = <h1>Hola Estudiante</h1>;


render( <Playlist data={data} /> ,root);
//console.log("js");