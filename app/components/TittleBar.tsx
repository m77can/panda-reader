import React from 'react';
import styles from './TitleBar.scss';

export default function TitleBar() {
  return (
    <div>
      <div className={styles['title-bar-editor-bg']} />
      <div className={styles['title-bar']}>
        <div className={styles.title}>
          <span>Panda reader</span>
        </div>
      </div>
    </div>
  );
}
