import PropTypes from 'prop-types';
import React from 'react';
import css from './FriendList.module.css';
import clsx from "clsx";
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
    return (   
        <ul className={clsx(css.wrapper)}>
                {friends.map(({ id, isOnline, avatar, name }) => {
                    return (<FriendListItem isOnline={isOnline} avatar={avatar} name={name} key={id} />                     
            )
            })}
        </ul>
        )   
}

FriendList.propTypes = {
    item: PropTypes.exect({
        id: PropTypes.string.isRequired,
        avatar: PropTypes.string,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
})
}

