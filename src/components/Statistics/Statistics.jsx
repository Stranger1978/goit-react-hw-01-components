import React from 'react';
import PropTypes from "prop-types";
import style from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
    return (
        <section class={style.statistics}>
            {title && <h2 class={style.title}>{title}</h2>}
            <ul class={style.stat_list}>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <li class={style.item} id={id} style={{ backgroundColor: getRandomHexColor() }}>
                        <span class="label">{label}</span>
                            <span class={style.item_percentage}>{percentage}%</span>
                    </li>)
                })}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
title: PropTypes.string,
label: PropTypes.string,
percentage: PropTypes.number,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export default Statistics;