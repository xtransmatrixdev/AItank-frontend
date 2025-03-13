import React from 'react';
import Layout from './shared/Layout';
import Main from './pages/home/components/main';
import Join_our_community from './pages/home/components/join_our_community';
import MarqueeText from './pages/home/components/MarqueeText';
import MaskedCursor from './pages/home/components/MaskedCursor';
import SplineComp from './pages/home/components/Spline';

const App: React.FC = () => {
  return (
    <Layout>
      <Main /> 
      {/* <Join_our_community /> */}
      <MarqueeText/>
      <MaskedCursor/>
     <SplineComp/>
    </Layout>
  );
};

export default App;
