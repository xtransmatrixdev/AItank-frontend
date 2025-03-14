import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './shared/Layout';
import Home from './pages/home/Home';
import ComingSoon from './shared/ComingSoon';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
      </Layout>
    </Router>
  );
};
export default App;