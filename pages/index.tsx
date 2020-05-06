import React from 'react';
import SubMenu from '../components/SubMenu';
import Article from '../components/Article';

const AboutPage: React.FunctionComponent = () => {
  return (
    <div className="wrapper">
      <SubMenu />
      <Article />
      <style jsx>{`
        .wrapper {
          display: flex;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
