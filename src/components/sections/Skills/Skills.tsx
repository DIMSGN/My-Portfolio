import { FC } from 'react';
import { SKILL_CATEGORIES } from '@constants/index';
import { getDelayClass } from '@utils/animationUtils';
import styles from './Skills.module.css';

const Skills: FC = () => {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.header} fade-in-up`}>
          <h2 className="heading-futuristic" data-text="Technical Skills">Technical Skills</h2>
        </div>

        <div className={styles.grid}>
          {SKILL_CATEGORIES.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className={`${styles.category} fade-in-up ${getDelayClass(index, 1)}`}
              >
                <div className={styles.categoryHeader}>
                  <div className={styles.categoryIcon}>
                    <IconComponent size={24} />
                  </div>
                  <div className={styles.categoryInfo}>
                    <h3 className={styles.categoryTitle}>{category.title}</h3>
                    <p className={styles.categoryDescription}>
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className={styles.skillsList}>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className={styles.skillItem}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span
                        className={
                          styles[`level${skill.level.replace(/\s+/g, '')}`]
                        }
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
