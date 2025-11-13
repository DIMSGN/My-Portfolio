
import { FC } from 'react';
import styles from './SkeletonLoader.module.css';

interface SkeletonLoaderProps {
  variant?: 'card' | 'text' | 'avatar' | 'section';
  width?: string;
  height?: string;
  count?: number;
  className?: string;
}

const SkeletonLoader: FC<SkeletonLoaderProps> = ({
  variant = 'card',
  width,
  height,
  count = 1,
  className = ''
}) => {
  const skeletons = Array.from({ length: count }, (_, i) => i);

  const getSkeletonClass = () => {
    switch (variant) {
      case 'card':
        return styles.skeletonCard;
      case 'text':
        return styles.skeletonText;
      case 'avatar':
        return styles.skeletonAvatar;
      case 'section':
        return styles.skeletonSection;
      default:
        return styles.skeletonCard;
    }
  };

  const style = {
    ...(width && { width }),
    ...(height && { height })
  };

  return (
    <>
      {skeletons.map((index) => (
        <div
          key={index}
          className={`${styles.skeleton} ${getSkeletonClass()} ${className}`}
          style={style}
          aria-label="Loading content"
          aria-busy="true"
        >
          <div className={styles.shimmer} />
        </div>
      ))}
    </>
  );
};

export default SkeletonLoader;
