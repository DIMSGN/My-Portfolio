
import { FC } from 'react';
import { Menu, X } from 'lucide-react';
import styles from '../Navigation.module.css';

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const HamburgerButton: FC<HamburgerButtonProps> = ({ isOpen, onClick }) => {
  return (
    <button
      className={styles.hamburger}
      onClick={onClick}
      aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
    >
      {isOpen ? (
        <X size={24} aria-hidden="true" />
      ) : (
        <Menu size={24} aria-hidden="true" />
      )}
    </button>
  );
};
