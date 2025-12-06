import { FC } from 'react';
import { MapPin } from 'lucide-react';
import { PERSONAL_INFO, TECH_STACK, CORE_VALUES } from '@constants/index';
import { getDelayClass } from '@utils/animationUtils';
import styles from './About.module.css';

const About: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.header} fade-in-up`}>
          <h2 className="heading-futuristic" data-text="About Me">About Me</h2>
        </div>

        <div className={`${styles.content} fade-in-up delay-100`}>
          <div className={styles.personalCard}>
            <div className={styles.avatarSection}>
              <div className={styles.avatar}>
                <span>DS</span>
              </div>
              <div className={styles.location}>
                <MapPin size={16} />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            <div className={styles.personalInfo}>
              <h3 className={styles.personalName}>{PERSONAL_INFO.name}</h3>
              <p className={styles.personalDescription}>
                I'm a full stack developer based in Athens, coming into tech
                after several years in other industries. Currently studying at
                the AUEB Coding Factory and strengthening my skills through
                consistent self-study, I focus on React, Angular, and building
                clean, scalable applications. I enjoy understanding how systems
                work end-to-end and expanding my knowledge step by step, without
                shortcuts. My goal right now is simple: learn deeply, improve
                steadily, and become a strong contributor in real-world software
                teams.
              </p>

              <div className={styles.techStack}>
                <h4 className={styles.techTitle}>Current Tech Stack:</h4>
                <div className={styles.techTags}>
                  {TECH_STACK.map((tech, index) => (
                    <span key={index} className={styles.tag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.valuesSection} fade-in-up delay-200`}>
          <h3 className={styles.valuesTitle}>My Core Values</h3>
          <div className={styles.valuesGrid}>
            {CORE_VALUES.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className={`${styles.valueCard} fade-in-up ${getDelayClass(index, 3)}`}
                >
                  <div className={styles.valueIcon}>
                    <IconComponent size={24} />
                  </div>
                  <h4 className={styles.valueTitle}>{value.title}</h4>
                  <p className={styles.valueDescription}>{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
