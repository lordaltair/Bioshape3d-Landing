import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout.jsx';
import Home from './pages/Home.jsx';
import './styles.css';

const About = lazy(() => import('./pages/About.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail.jsx'));
const Technologies = lazy(() => import('./pages/Technologies.jsx'));
const Sectors = lazy(() => import('./pages/Sectors.jsx'));
const Materials = lazy(() => import('./pages/Materials.jsx'));
const News = lazy(() => import('./pages/News.jsx'));
const Careers = lazy(() => import('./pages/Careers.jsx'));
const Quote = lazy(() => import('./pages/Quote.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

const Loading = () => <div className="min-h-screen bg-spring-ink text-white grid place-items-center">در حال بارگذاری...</div>;

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <Suspense fallback={<Loading />}><About /></Suspense> },
      { path: 'services', element: <Suspense fallback={<Loading />}><Services /></Suspense> },
      { path: 'services/:slug', element: <Suspense fallback={<Loading />}><ServiceDetail /></Suspense> },
      { path: 'security-services', element: <Suspense fallback={<Loading />}><ServiceDetail forcedSlug="security-services" /></Suspense> },
      { path: 'web-hosting', element: <Suspense fallback={<Loading />}><ServiceDetail forcedSlug="web-hosting" /></Suspense> },
      { path: 'corporate-networks', element: <Suspense fallback={<Loading />}><ServiceDetail forcedSlug="corporate-networks" /></Suspense> },
      { path: 'technologies', element: <Suspense fallback={<Loading />}><Technologies /></Suspense> },
      { path: 'sectors', element: <Suspense fallback={<Loading />}><Sectors /></Suspense> },
      { path: 'materials', element: <Suspense fallback={<Loading />}><Materials /></Suspense> },
      { path: 'news', element: <Suspense fallback={<Loading />}><News /></Suspense> },
      { path: 'careers', element: <Suspense fallback={<Loading />}><Careers /></Suspense> },
      { path: 'quote', element: <Suspense fallback={<Loading />}><Quote /></Suspense> },
      { path: 'contact', element: <Suspense fallback={<Loading />}><Contact /></Suspense> },
      { path: '*', element: <Suspense fallback={<Loading />}><NotFound /></Suspense> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
