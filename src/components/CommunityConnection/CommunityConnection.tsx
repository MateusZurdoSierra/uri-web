import React from 'react';
import styles from './CommunityConnection.module.css';

interface CommunityConnectionProps {
  text: string;
  level?: number;
}

const CommunityConnection: React.FC<CommunityConnectionProps> = ({ text }) => {
  return (
    <div className={styles.fullScreenContainer}>
      <div className={styles.textWrapper}>
        <h1 className={styles.heading}>{text}</h1>
      </div>
    </div>
  );
};

export default CommunityConnection;
