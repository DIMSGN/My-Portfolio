
import { FC } from 'react';
import { Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '@constants/index';
import styles from '../Navigation.module.css';

interface LogoProps {
  onClick: () => void;
}

export const Logo: FC<LogoProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={styles.logoContainer}
      aria-label="Navigate to home section"
    >
      <div className={styles.logoIcon}>
        <Code2 size={24} strokeWidth={2} aria-hidden="true" />
      </div>
      <span className={styles.logoText}>{PERSONAL_INFO.name}</span>
    </button>
  );
};
