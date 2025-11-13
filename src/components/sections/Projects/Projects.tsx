import { FC } from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';
import { PROJECTS } from '@constants/index';
import { getDelayClass } from '@utils/animationUtils';
import styles from './Projects.module.css';

const Projects: FC = () => {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.header} fade-in-up`}>
          <h2 className="heading-futuristic" data-text="My Projects">My Projects</h2>
        </div>

        <div className={styles.grid}>
          {PROJECTS.map((project, index) => (
            <article
              key={project.id}
              className={`${styles.card} fade-in-up ${getDelayClass(index, 1)}`}
            >
              <div className={styles.imagePlaceholder}>
                <Code size={48} strokeWidth={1.5} />
              </div>

              <div className={styles.content}>
                <div className={styles.titleSection}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.subtitle}>{project.subtitle}</p>
                </div>

                <p className={styles.description}>{project.shortDescription}</p>

                <ul className={styles.highlights}>
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className={styles.highlightItem}>
                      <span className={styles.bullet}>→</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className={styles.technologies}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.tag}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.links}>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      className={`${styles.link} ${styles.linkPrimary}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      className={`${styles.link} ${styles.linkSecondary}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code`}
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  )}
                  {!project.demoUrl && !project.codeUrl && (
                    <span className={styles.comingSoon}>In Development</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
