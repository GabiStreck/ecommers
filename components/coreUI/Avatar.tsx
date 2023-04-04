import React from 'react';
import Image from 'next/image';

import styles from '@/styles/coreUI/avatar.module.css';

interface Props {
  src: string;
  alt: string;
}

const Avatar: React.FC<Props> = ({ src, alt }) => {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        className={styles.avatar}
        loading="lazy"
        width={32}
        height={32}
      />
    </div>
  );
};

export default Avatar;
