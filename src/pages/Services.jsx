import { services } from '../data/siteData.js';
import SectionTitle from '../components/SectionTitle.jsx';
import MediaCard from '../components/MediaCard.jsx';

export default function Services() {
  return (
    <section className="pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20">
      <div className="px-10">
        <SectionTitle eyebrow="خدمات" title="همه خدمات تخصصی BIOSHAPE3D" muted="برای ایده تا تولید" />
        <div className="mt-8 space-y-12 sm:mt-14 sm:space-y-16 md:space-y-20">
          {services.map((item) => <MediaCard key={item.slug} item={item} />)}
        </div>
      </div>
    </section>
  );
}
