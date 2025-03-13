
import ScrollEffectSection from './components/scrolleffect';
import HoverEffectSection from './components/hovereffect';


const App = () => {
  return (
    <div className="bg-black text-white min-h-screen w-full relative overflow-hidden">
      
      <HoverEffectSection />
      <ScrollEffectSection />
      <HoverEffectSection />
    </div>
  );
};

export default App;
