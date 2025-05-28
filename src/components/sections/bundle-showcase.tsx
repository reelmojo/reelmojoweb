import BundleCard from '@/components/bundle-card';
import { bundles, type Bundle } from '@/lib/constants';

export default function BundleShowcase() {
  return (
    <section id="bundles" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Our Exclusive Bundles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {bundles.map((bundle: Bundle) => (
          <BundleCard key={bundle.id} bundle={bundle} />
        ))}
      </div>
    </section>
  );
}
