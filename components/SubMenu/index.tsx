import React, { useState } from 'react';
import className from 'classnames';
import Card from './Card';
import styles from './style.less';

const SubMenu = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className={styles.subContainer}>
      <div className={className(styles.subTitle)}>
        <div
          className={className(styles.commonTitle, { [styles.chose]: index === 0 })}
          onClick={() => setIndex(0)}
        >
          <div className={styles.category}>Latest</div>
        </div>
        <div
          className={className(styles.commonTitle, { [styles.chose]: index === 1 })}
          onClick={() => setIndex(1)}
        >
          <div className={styles.category}>Popular</div>
        </div>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.cardArea}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default SubMenu;
