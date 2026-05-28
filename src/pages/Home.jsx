import Hero from '../components/sections/Hero.jsx';
import ServicesShowcase from '../components/sections/ServicesShowcase.jsx';
import TechnologyPanel from '../components/sections/TechnologyPanel.jsx';
import SectorSlider from '../components/sections/SectorSlider.jsx';
import CompanyNewsJobs from '../components/sections/CompanyNewsJobs.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesShowcase />
      <TechnologyPanel />
      <SectorSlider />
      <CompanyNewsJobs />
    </>
  );
}
