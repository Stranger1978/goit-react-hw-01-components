import React from "react";
import PropTypes from "prop-types";
import style from "./Profile.module.css";

const Profile = ({ username, avatar, tag, location, stats: { followers, views, likes } }) => { 
    
    return (
        <div class={style.profile}>
            <div class={style.description}>
                <img
                    src={avatar}
                    alt={username}
                    class={style.avatar}
                />
                <p class={style.name}>{username}</p>
                <p class="tag">@{tag}</p>
                <p class="location">{location}</p>
            </div>

            <ul class={style.stats}>
                <li class={style.stats_item}>
                <span class={style.stats_item_label}>Followers</span> 
                    <span class={style.stats_item_quantity}>{followers}</span>
                </li>
                <li class={style.stats_item}>
                <span class={style.stats_item_label}>Views</span>
                    <span class={style.stats_item_quantity}>{views}</span>
                </li>
                <li class={style.stats_item}>
                <span class={style.stats_item_label}>Likes</span>
                    <span class={style.stats_item_quantity}>{likes}</span>
                </li>
            </ul>
        </div>
    );
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        }),
    )
};

export default Profile;
