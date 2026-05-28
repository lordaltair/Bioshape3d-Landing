import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { useEffect } from 'react';

export default function AppLayout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return (
    <div className="min-h-screen bg-white text-spring-charcoal">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
