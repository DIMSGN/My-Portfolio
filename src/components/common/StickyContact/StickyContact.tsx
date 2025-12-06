import { FC } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import styles from './StickyContact.module.css';

interface StickyContactProps {
  isVisible: boolean;
}

const StickyContact: FC<StickyContactProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className={styles.stickyContact}>
      <div className={styles.container}>
        <a
          href="mailto:siganos.dimitrios@gmail.com"
          className={styles.link}
          aria-label="Email me"
          title="Email"
        >
          <Mail size={20} />
        </a>
        <a
          href="https://github.com/DIMSGN"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
          aria-label="GitHub profile"
          title="GitHub"
        >
          <Github size={20} />
        </a>
        <a
          href="https://linkedin.com/in/dimitris-siganos"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
          aria-label="LinkedIn profile"
          title="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
      </div>
    </div>
  );
};

export default StickyContact;
