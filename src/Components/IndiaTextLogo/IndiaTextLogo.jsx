import React from 'react';
import styles from './IndiaTextLogo.module.css';

function IndiaTextLogo(props) {
    return (
        <div className={styles.fontStyle}>
            <h1>{props.text ? props.text : "INDIA"}</h1>
        </div>
    );
}

export default IndiaTextLogo;