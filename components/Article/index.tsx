import React from 'react';
import Header from './Header';
import Body from './Body';
import styles from './styles.less';
const Article = () => {
  return (
    <div className={styles.warp}>
      <Header />
      <Body />
    </div>
  );
};

export default Article;
