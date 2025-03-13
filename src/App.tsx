import Layout from './shared/Layout';
import Main from './pages/home/components/main';
import Join_our_community from './pages/home/components/join_our_community';
import Aitank_event_banner from './pages/home/components/aitank_event_banner';
import Contact from './shared/contact';

import ScrollEffectSection from './pages/home/components/scrolleffect';
import HoverEffectSection from './pages/home/components/hovereffect';




const App = () => {
  return (
    <Layout>
      <Main />
      <Join_our_community />
      <Aitank_event_banner />
      <ScrollEffectSection />
      <HoverEffectSection />

      <Contact />
    </Layout>
  );
};

export default App;
