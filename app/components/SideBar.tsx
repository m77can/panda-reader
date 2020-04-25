import React from 'react';
import styles from './SideBar.scss';

export default function TitleBar() {
  return (
    <div className={styles['side-bar']}>
      <div className="left-column">
        <ul>
          <li>t</li>
        </ul>
        <ul className="bottom">
          <li>s</li>
        </ul>
      </div>
      <div className="right-column" />
      <div className="drag-bar" />
    </div>
  );
}
