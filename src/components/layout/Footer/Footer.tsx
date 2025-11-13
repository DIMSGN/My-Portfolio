import { FC } from 'react';
import { Code2, Heart } from 'lucide-react';
import { SOCIAL_LINKS_CONFIG, PERSONAL_INFO } from '@constants/index';
import styles from './Footer.module.css';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.content}>
          
          {}
          <div className={styles.brand}>
            <div className={styles.logo} aria-hidden="true">
              <Code2 size={24} />
            </div>
            <h2 className={styles.name}>{PERSONAL_INFO.name}</h2>
            <p className={styles.role}>{PERSONAL_INFO.role}</p>
          </div>

          {}
          <nav className={styles.social} aria-label="Social media links">
            {SOCIAL_LINKS_CONFIG.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={link.ariaLabel}
                >
                  <Icon size={20} aria-hidden="true" />
                  <span className={styles.srOnly}>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {}
          <div className={styles.copyright}>
            <p className={styles.copyrightText}>
              <span>© {currentYear} {PERSONAL_INFO.name}.</span>
              <span className={styles.builtWith}>
                Built with <Heart size={14} className={styles.heartIcon} aria-hidden="true" /> using React & CSS
              </span>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
