import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import LoadingScreen from './components/LoadingScreen';
import WhatsAppChat from './components/WhatsAppChat';

import Home from './pages/Home';


function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <MotionConfig reducedMotion="user">
      <Router>
        <Cursor />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        
        <Footer />
        <WhatsAppChat />
      </Router>
    </MotionConfig>
  );
}

export default App;
