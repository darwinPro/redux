import React from 'react';
import logo from '../../../assets/logo.png';
import './releted.css';
import ListFriends from './list-friedns';

function Releated(props) {
    return (
        <div className="Related">
            <img src={logo} width={250} />
            <h1>Mi Playlist</h1>
            {
                props.playlist.map((item) => {
                    return (
                        <div className="Related-content"
                            key={item.id}
                        >
                            <span>{item.id}</span>
                            <span>{item.title}</span>
                        </div>
                    )
                })
            }
            <ListFriends
                listfriends={props.listfriends}
            />

        </div>
    )
}

export default Releated;