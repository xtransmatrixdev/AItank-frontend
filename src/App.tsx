import React from 'react';
import Layout from './shared/Layout';
import Main from './pages/home/components/main';
import Join_our_community from './pages/home/components/join_our_community';

const App: React.FC = () => {
  return (
    <Layout>
      <Main />
      <Join_our_community />
    </Layout>
  );
};

export default App;
