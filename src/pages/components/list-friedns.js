import React from 'react';
import './fist-friends.css'

const ListFriends = props => {
    return(
        <div className="ListFriends">
        <h1>Lista de amigos</h1>
            {
                props.listfriends.map(item=>{
                    return(
                        <div key={item.id}>
                            <img src={item.src} />
                            <span>{item.nombre}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ListFriends;