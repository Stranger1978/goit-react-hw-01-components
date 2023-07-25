import React from 'react';
import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => {
    return (
        <section class="statistics">
            {title && <h2 class="title">{title}</h2>}
            <ul class="stat-list">
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <li class="item" id={id}>
                        <span class="label">{label}</span>
                        <span class="percentage">{percentage}%</span>
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

export default Statistics;