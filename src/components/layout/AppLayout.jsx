import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { useEffect } from 'react';

export default function AppLayout() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (hash) {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  useEffect(() => {
    const isEditableElement = (element) => {
      if (!element) return false;

      const tagName = element.tagName?.toLowerCase();
      return (
        element.isContentEditable ||
        tagName === 'input' ||
        tagName === 'textarea' ||
        tagName === 'select'
      );
    };

    const handleBackspaceNavigation = (event) => {
      if (event.key !== 'Backspace' || isEditableElement(event.target)) return;

      event.preventDefault();
      navigate(-1);
    };

    window.addEventListener('keydown', handleBackspaceNavigation);
    return () => window.removeEventListener('keydown', handleBackspaceNavigation);
  }, [navigate]);

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
