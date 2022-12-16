import PropTypes from 'prop-types';
import React from 'react';
import css from './Profile.module.css';
import clsx from "clsx";


export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
    return (
        <div className={clsx(css.profileCard)}>
        <div className={clsx(css.description)}>
            <img className={clsx(css.userAvatar)}
                src={avatar}
                alt="User avatar"
            />
            <p className={clsx(css.username)}>{username}</p>
            <p className={clsx(css.username__info)}>@{tag}</p>
            <p className={clsx(css.username__info)}>{location}</p>
        </div>

        <ul className={clsx(css.stats)}>
            <li className={clsx(css.stats__item)}>
                <span className={clsx(css.stats__headers)}>Followers</span>
                    <span className={clsx(css.numbers)}>{followers ? followers : 0}</span>
            </li>
            <li className={clsx(css.stats__item)}>
                <span className={clsx(css.stats__headers)}>Views</span>
                <span className={clsx(css.numbers)}>{views ? views : 0}</span>
            </li>
            <li className={clsx(css.stats__item)}>
                <span className={clsx(css.stats__headers)}>Likes</span>
                <span className={clsx(css.numbers)}>{likes ? likes : 0}</span>
            </li>
        </ul>
    </div>);
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
}