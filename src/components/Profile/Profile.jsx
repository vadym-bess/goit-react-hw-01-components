import PropTypes from 'prop-types';
import React from 'react';

export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {

    return (<div class="profile">
        <div>
            <img
                src={avatar}
                alt="User avatar"
                class="avatar"
            />
            <p>{username}</p>
            <p>@{tag}</p>
            <p>{location}</p>
        </div>

        <ul>
            <li>
                <span>Followers</span>
                <span>{followers ? followers : 0}</span>
            </li>
            <li>
                <span>Views</span>
                <span>{views ? views : 0}</span>
            </li>
            <li>
                <span>Likes</span>
                <span>{likes ? likes : 0}</span>
            </li>
        </ul>
    </div>);
};

Profile.PropTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
};
