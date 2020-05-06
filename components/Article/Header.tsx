import React from 'react';
import { Avatar } from 'antd';
import styles from './styles.less';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
const Header = () => {
  return (
    <div className={styles.headerWarp}>
      <div className={styles.headerInfo}>
        <div className={styles.flex}>
          <Avatar>Z</Avatar>
          <span className={styles.tips} style={{ marginLeft: 10 }}>
            By
          </span>
          <span style={{ color: '#bae637' }}>Zjx</span>
          <span className={styles.dot}></span>
          <span className={styles.time}>{dayjs('2020-05-03 14:00:00').fromNow()}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
