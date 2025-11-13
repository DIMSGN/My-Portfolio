
import { FC, useState, useEffect } from 'react';
import { Download, ChevronDown } from 'lucide-react';
import { SOCIAL_LINKS_CONFIG, PERSONAL_INFO, TECH_STACK, RESUME_FILES } from '@constants/index';
import styles from './Hero.module.css';

const Hero: FC = () => {

  const [showResumeDropdown, setShowResumeDropdown] = useState(false);
  const toggleResumeDropdown = () => {
    setShowResumeDropdown((prev) => !prev);
  };
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        showResumeDropdown &&
        !(event.target as HTMLElement).closest(
          `.${styles.resumeDropdownContainer}`
        )
      ) {
        setShowResumeDropdown(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && showResumeDropdown) {
        setShowResumeDropdown(false);
      }
    };

    if (showResumeDropdown) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      return () => {
        document.removeEventListener('click', handleClickOutside);
        document.removeEventListener('keydown', handleEscapeKey);
      };
    }
  }, [showResumeDropdown]);

  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.container}>
        <div className={styles.content}>
          {}
          <div className={styles.badgeSuccess} role="status" aria-live="polite">
            <span className={styles.badgeDot} aria-hidden="true"></span>
            <span>Actively seeking work opportunities</span>
          </div>

          {}
          <div className={styles.heading}>
            <h1 id="hero-title" className={styles.title}>
              <span className={styles.name}>{PERSONAL_INFO.name}</span>
              <span className={styles.role}>{PERSONAL_INFO.role}</span>
            </h1>
            <p className={styles.description}>
              I enjoy building web applications and solving problems with code.
              Currently learning full-stack development with React and Node.js,
              and always excited to take on new challenges.
            </p>
          </div>

          {}
          <div
            className={styles.skills}
            role="list"
            aria-label="Technical expertise"
          >
            {TECH_STACK.slice(0, 5).map((skill) => (
              <span key={skill} className={styles.skill} role="listitem">
                {skill}
              </span>
            ))}
          </div>

          {}
          <div className={styles.actions}>
            {}
            <div className={styles.resumeDropdownContainer}>
              <button
                className="btn btn-secondary btn-lg"
                onClick={toggleResumeDropdown}
                aria-label="Download resume"
                aria-expanded={showResumeDropdown}
              >
                <Download size={18} aria-hidden="true" />
                Download Resume
                <ChevronDown size={16} className={styles.dropdownIcon} />
              </button>

              {}
              {showResumeDropdown && (
                <div className={styles.resumeDropdown}>
                  <a
                    href={RESUME_FILES.greek.path}
                    download={RESUME_FILES.greek.downloadName}
                    className={styles.dropdownItem}
                    onClick={() => setShowResumeDropdown(false)}
                  >
                    {RESUME_FILES.greek.label}
                  </a>
                  <a
                    href={RESUME_FILES.english.path}
                    download={RESUME_FILES.english.downloadName}
                    className={styles.dropdownItem}
                    onClick={() => setShowResumeDropdown(false)}
                  >
                    {RESUME_FILES.english.label}
                  </a>
                </div>
              )}
            </div>
          </div>

          {}
          <nav className={styles.social} aria-label="Social media profiles">
            {SOCIAL_LINKS_CONFIG.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                  rel={
                    link.url.startsWith('mailto:')
                      ? undefined
                      : 'noopener noreferrer'
                  }
                  className={styles.socialLink}
                  aria-label={link.ariaLabel}
                >
                  <IconComponent size={20} aria-hidden="true" />
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Hero;
