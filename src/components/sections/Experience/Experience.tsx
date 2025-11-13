import { FC } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { EXPERIENCES } from '@constants/index';
import { getDelayClass } from '@utils/animationUtils';
import styles from './Experience.module.css';

const Experience: FC = () => {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.header} fade-in-up`}>
          <h2 className="heading-futuristic" data-text="Experience & Education">Experience & Education</h2>
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineLine}></div>

          {EXPERIENCES.map((exp, index) => {
            const IconComponent = exp.icon;
            const isLeft = index % 2 === 0;
            
            if (!IconComponent) return null;

            return (
              <div
                key={index}
                className={`${isLeft ? styles.itemLeft : styles.itemRight} fade-in-up ${getDelayClass(index, 1)}`}
              >
                <div className={styles.icon}>
                  <IconComponent size={20} />
                </div>

                <div className={styles.card}>
                  <div className={styles.meta}>
                    <div className={styles.period}>
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className={styles.location}>
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <h3 className={styles.cardTitle}>{exp.title}</h3>
                  <p className={styles.organization}>{exp.organization}</p>

                  <p className={styles.description}>{exp.description}</p>

                  <div className={styles.skillsSection}>
                    <h4 className={styles.skillsTitle}>
                      Key Skills & Technologies:
                    </h4>
                    <div className={styles.skillsList}>
                      {exp.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className={styles.tag}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
