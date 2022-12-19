import React from 'react';
import css from './FriendList.module.css';
import clsx from "clsx";
import PropTypes from 'prop-types';


export const FriendListItem = ({ isOnline, avatar, name }) => {
    return <li className={clsx(css.item)}>
        {isOnline ? <span className={clsx(css.status)}>{isOnline}</span> : <span className={clsx(css.isOffline,)}>{isOnline}</span>}    
            <img className = { clsx(css.avatar) } src = { avatar } alt = "User avatar"/>
            <p className={clsx(css.name)}>{name}</p>
    </li>
}

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}