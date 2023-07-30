import React from 'react';
import PropTypes from "prop-types";
import FriendListItem from './FriendList';
import style from './FriendList.module.css';

const FriendList = ({ friends }) => {
    return (
        <ul class={style.friend_list}>
            {friends.map(({ id, avatar, name, isOnline }) => {
                return (
                    <FriendListItem
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
                );
            })}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    )
};

export default FriendList;