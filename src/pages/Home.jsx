import { useRef } from 'react';
import Hero from '../components/sections/Hero.jsx';
import ServicesShowcase from '../components/sections/ServicesShowcase.jsx';
import TechnologyPanel from '../components/sections/TechnologyPanel.jsx';
import SectorSlider from '../components/sections/SectorSlider.jsx';
import CompanyNewsJobs from '../components/sections/CompanyNewsJobs.jsx';
import useScrollReveal from '../hooks/useScrollReveal.js';

export default function Home() {
  const homeRef = useRef(null);

  useScrollReveal(homeRef);

  return (
    <div ref={homeRef}>
      <Hero />
      <ServicesShowcase />
      <TechnologyPanel />
      <SectorSlider />
      <CompanyNewsJobs />
    </div>
  );
}
