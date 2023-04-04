import { FC, ReactNode } from 'react';

interface Props {
  color: string;
  children: ReactNode;
  borderRadius?: number;
  colorText?: string;
}

const Tag: FC<Props> = ({ color, children, borderRadius, colorText }) => {
  return (
    <div
      style={{
        backgroundColor: '#fffff', //rgba
        borderRadius: `${borderRadius}px`,
      }}
    >
      <div
        style={{
          backgroundColor: `${color}5e`,
          width: '100%',
          padding: '0.2rem',
          color: colorText || color,
          display: 'flex',
          alignItems: 'center',
          fontWeight: 600,
          gap: 5,
          fontSize: 12,
          borderRadius: `${borderRadius ?? 0}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Tag;
