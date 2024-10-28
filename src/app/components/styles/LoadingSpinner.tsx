// components/LoadingSpinner.tsx
import React from "react";
import styles from "./LoadingSpinner.module.css"; // CSS Module

const LoadingSpinner: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.slice}></div>
      <div className={styles.slice}></div>
      <div className={styles.slice}></div>
      <div className={styles.slice}></div>
      <div className={styles.slice}></div>
      <div className={styles.slice}></div>
    </div>
  );
};

export default LoadingSpinner;
