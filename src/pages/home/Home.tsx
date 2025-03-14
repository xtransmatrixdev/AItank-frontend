import Main from './components/main';
import JoinOurCommunity from './components/join_our_community';
import MarqueeText from './components/MarqueeText';
import MaskedCursor from './components/MaskedCursor';
import SplineComp from './components/Spline';
import AitankEventBanner from './components/aitank_event_banner';
import Contact from '../../shared/contact';
import ScrollEffectSection from './components/scrolleffect';
import HoverEffectSection from './components/hovereffect';
import EventEmbed from './components/Eventlink';

const Home = () => {
  return (
    <>
      <Main />
      <JoinOurCommunity />
      <AitankEventBanner />
      <ScrollEffectSection />
      <HoverEffectSection />
      <MarqueeText />
      <MaskedCursor />
      <SplineComp />
      <EventEmbed />

      <Contact />
    </>
  );
};

export default Home;
