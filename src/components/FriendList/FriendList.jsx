import React from 'react';
import PropTypes from "prop-types";

const FriendList = ({ friends }) => {
    return (
        <ul class="friend-list">
            {friends.map(({ id, avatar, name, isOnline }) => {
                return (
                    <li class="item" id={id}>
                        {isOnline ? (
                            <span class="status">OnLine</span>
                        ) : (
                            <span class="status">OffLine</span>
                        )}
                        
                        <img class="avatar" src={avatar} alt="User avatar" width="48" />
                        <p class="name">{name}</p>
                    </li>)
            })}
        </ul>
    );
};

FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
};

export default FriendList;