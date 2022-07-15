import React from 'react';
import styles from './style.module.css';

export default function ({ children, title }) {
  if (title) {
    return (
      <div className={styles.card}>
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>{children}</div>
      </div>
    );
  } else {
    return (
      <div className={styles.card}>
        <div className={styles.contentHeadless}>{children}</div>
      </div>
    );
  }
}
