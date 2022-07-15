import React from 'react';
import styles from './style.module.css';

export default function ({ children }) {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>{children[0]}</div>
      <div style={{display: 'flex',
    height: '70%'}}>
        <div className={styles.left}>{children[1]}</div>
        <div className={styles.center}>{children[2]}</div>
        <div className={styles.right}>{children[3]}</div>
      </div>
      <div className={styles.footer}>{children[4]}</div>
    </div>
  );
}
