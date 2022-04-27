import React from 'react';
import styles from './Work.module.css'


function Work(props) {
    return (
        <div className={styles.work}>
            <a className={styles.icon} href="">Смотреть</a>

            <h3>{props.title}</h3>
            <span>
                {props.description}
            </span>
        </div>
    );
}

export default Work;
