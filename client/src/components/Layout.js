import React from 'react';
import { Layout } from 'antd';
import Header from './Header';
import Footer from './Footer';

const { Content } = Layout;

export default ({ children, hero }) => (
  <div className="App">
    <Layout style={{ background: '#F0F0F0' }}>
      <Header />
      {hero || null}
      <Content className="container">{children}</Content>
      <Footer />
    </Layout>
  </div>
);
