import { AppProps } from 'next/app';
import { Row, Col } from 'antd';
import MainMenu from '../components/MainMenu';
import styles from '../styles/common.less';
import 'antd/dist/antd.less';

export default ({ Component, pageProps }: AppProps) => {
  return (
    <div className={styles.appContainer}>
      <Row>
        <Col>
          <MainMenu />
        </Col>
        <Col style={{ flex: 1 }}>
          <Component {...pageProps} />
        </Col>
      </Row>
    </div>
  );
};
