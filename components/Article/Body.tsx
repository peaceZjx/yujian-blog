import React from 'react';
import ReactMarkdown from 'react-markdown';
import Code from '../Code';
import styles from './styles.less';

let markdown = '```jsx \n' + 'console \n' + '```\n' + '`ddddd`';

const Header = () => {
  return (
    <div className={styles.bodyWarp}>
      <ReactMarkdown
        source={markdown}
        escapeHtml={false} //不进行HTML标签的转化
        renderers={{
          code: Code,
        }}
      />
    </div>
  );
};

export default Header;
