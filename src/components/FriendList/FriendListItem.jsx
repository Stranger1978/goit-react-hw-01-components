import React from 'react';
import PropTypes from "prop-types";
import style from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li class={style.item}>
            {isOnline ? (
                <span class={style.status_green}>OnLine</span>
            ) : (
                <span class={style.status_red}>OffLine</span>
            )}
                        
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class={style.name}>{name}</p>
        </li>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,  
};

export default FriendListItem;