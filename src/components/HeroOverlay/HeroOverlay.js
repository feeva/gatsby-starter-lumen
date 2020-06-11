// @flow strict
import React from 'react';

// import styles from './HeroOverlay.module.scss';

const HeroOverlay = (props) => (
    <div className="page__hero--overlay" style={{ backgroundColor: '#5e616c', backgroundImage: `url("${props.image}")` }}>
        <div className="wrapper">
            <h1 id="page-title" className="page__title" itemProp="headline">
                {props.title}
            </h1>
            <p className="page__lead">
                {props.subtitle}
            </p>
        </div>
    </div>
);

export default HeroOverlay;
