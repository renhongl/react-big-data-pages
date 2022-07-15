import React from 'react';
import styles from './style.module.css';

export default function () {
  return (
    <div className={styles.card}>
      <div className={styles.title}>Title</div>
      <div className={styles.content}>content</div>
    </div>
  );
}
