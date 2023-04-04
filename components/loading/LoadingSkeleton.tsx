import { FC, memo } from 'react';

import styles from '@/styles/loading/Skeleton.module.css';

interface PropsRectangule {
  width: string;
  height: string;
  rounded?: string;
}

interface PropsCircle {
  size: string;
}

const CircleSkeleton: FC<PropsCircle> = memo(({ size }) => {
  return (
    <div className={styles.circle} style={{ width: size, height: size }} />
  );
});

const RectangleSkeleton: FC<PropsRectangule> = memo(
  ({ width, height, rounded }) => {
    return (
      <div
        className={styles.rectangle}
        style={{ width, height, borderRadius: rounded ? rounded : 0 }}
      />
    );
  }
);

export { CircleSkeleton, RectangleSkeleton };
