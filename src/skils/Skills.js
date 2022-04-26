import React from 'react';
import styles from './Skills.module.css'
import styleContainer from "../common/styles/Container.module.css";
import Skill from "./skil/Skill";


function Skills() {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>My Skills...</h2>
                <div className={styles.skills}>
                    <Skill title="HTML" description="What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s"/>
                    <Skill title="JS"
                           description="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."/>
                    <Skill title="REACT"
                           description="  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
                </div>

            </div>
        </div>
    );
}

export default Skills;
