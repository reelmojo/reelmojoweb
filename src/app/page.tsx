import HeroBanner from '@/components/sections/hero-banner';
import BundleShowcase from '@/components/sections/bundle-showcase';
import TrustIndicators from '@/components/sections/trust-indicators';
import Testimonials from '@/components/sections/testimonials';

export default function HomePage() {
  return (
    <div className="space-y-12 md:space-y-16">
      <HeroBanner />
      <BundleShowcase />
      <TrustIndicators />
      <Testimonials />
    </div>
  );
}
