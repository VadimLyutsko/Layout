import React from 'react';
import styles from './Works.module.css'
import styleContainer from "../common/styles/Container.module.css";
import Work from "./work/Work";


function Works() {
    return (
        <div className={styles.worksBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>My Works...</h2>
                <div className={styles.skills}>
                    <Work title="Название-1" description="What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s"/>
                    <Work title="Название-2"
                           description="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."/>

                </div>

            </div>
        </div>
    );
}

export default Works;
