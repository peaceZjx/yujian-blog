import React from 'react';
import styles from './style.less';
// import EyesIcon from '../Icons/Eyes';

const ArticleCard: React.FC = () => {
  return (
    <div className={styles.cardWarp}>
      <div className={styles.cardContainer}>
        <img className={styles.coverImage} src="/example.jpeg" />
        <div className={styles.info}>
          <div className={styles.tips}>
            <span>2020-05-01</span>
          </div>
          <div className={styles.articleCtx}>
            吉德津科部队空军基地恐怖的叫苦不迭看见不可得兼不断进步军基地恐怖的叫苦不迭看见不可得兼不断进步军基地恐怖的叫苦不迭看见不可得兼不断进步
          </div>
          <div className={styles.tips}>
            <span className={styles.flex}>
              Key <span className={styles.author}>性能优化 & css</span>
            </span>

            <span className={styles.flex}>{/* <EyesIcon /> <span>12</span> */}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
