import React from 'react';
import css from './FriendList.module.css';
import clsx from "clsx";



export const FriendListItem = ({ isOnline, avatar, name }) => {
    return <li className={clsx(css.item)}>
        {isOnline ? <span className={clsx(css.status)}>{isOnline}</span> : <span className={clsx(css.isOffline,)}>{isOnline}</span>}    
            <img className = { clsx(css.avatar) } src = { avatar } alt = "User avatar"/>
            <p className={clsx(css.name)}>{name}</p>
    </li>
}