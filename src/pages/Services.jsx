import { services } from '../data/siteData.js';
import SectionTitle from '../components/SectionTitle.jsx';
import MediaCard from '../components/MediaCard.jsx';

export default function Services() {
  return (
    <section className="pt-36 pb-20">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <SectionTitle eyebrow="خدمات" title="همه خدمات تخصصی BioShape۳D" muted="برای ایده تا تولید" />
        <div className="mt-14 space-y-20">
          {services.map((item) => <MediaCard key={item.slug} item={item} />)}
        </div>
      </div>
    </section>
  );
}
