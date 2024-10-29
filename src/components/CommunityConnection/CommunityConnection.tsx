import React from "react";
import styles from "./CommunityConnection.module.css";

interface CommunityConnectionProps {
  text: string;
  level?: number;
}

const CommunityConnection: React.FC<CommunityConnectionProps> = ({ text }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{text}</h1>
    </div>
  );
};

export default CommunityConnection;
