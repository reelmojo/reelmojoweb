import BundleCard from '@/components/bundle-card';
import { bundles, type Bundle } from '@/lib/constants';

export default function ReelsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Buy Reels & Shorts Bundles</h1>
      <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
        Boost your Instagram & YouTube presence with our high-quality, ready-to-post video bundles. Instant download after payment!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {bundles.map((bundle: Bundle) => (
          <BundleCard key={bundle.id} bundle={bundle} />
        ))}
      </div>
    </div>
  );
}
