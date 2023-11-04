import React from 'react';
import { Layout } from 'antd';

import {GameLayout} from "../game";

const { Header, Footer, Content } = Layout;

function App() {
  return (
      <Layout style={{ height: '100vh' }}>
        <Header>Header</Header>
        <Content>
          <GameLayout />
        </Content>
        <Footer>
          Footer
        </Footer>
      </Layout>
  );
}

export default App;
