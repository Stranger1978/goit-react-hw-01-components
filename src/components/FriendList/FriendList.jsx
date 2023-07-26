import React from 'react';
import PropTypes from "prop-types";
import style from './FriendList.module.css';

const FriendList = ({ friends }) => {
    return (
        <ul class={style.friend_list}>
            {friends.map(({ id, avatar, name, isOnline }) => {
                return (
                    <li class={style.item} id={id}>
                        {isOnline ? (
                            <span class={style.status_green}>OnLine</span>
                        ) : (
                            <span class={style.status_red}>OffLine</span>
                        )}
                        
                        <img class="avatar" src={avatar} alt="User avatar" width="48" />
                        <p class={style.name}>{name}</p>
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