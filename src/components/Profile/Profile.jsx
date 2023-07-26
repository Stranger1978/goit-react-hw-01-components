import React from "react";
import PropTypes from "prop-types";
import style from "./Profile.module.css";

const Profile = ({ username, avatar, tag, location, stats: {followers}, stats: {views}, stats: {likes} }) => { 
    
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
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default Profile;
