import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import DocumentLocale from './components/DocumentLocale';
import LanguageWelcomeModal from './components/LanguageWelcomeModal';
import Home from './pages/Home';
import QuellenPage from './pages/Quellen';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <DocumentLocale />
      <ScrollToTop />
      <LanguageWelcomeModal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quellen" element={<QuellenPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
