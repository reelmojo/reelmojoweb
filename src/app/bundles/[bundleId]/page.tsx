import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { bundles, type Bundle } from '@/lib/constants';
import PaymentButton from '@/components/payment-button';
import { Button } from '@/components/ui/button';

export async function generateStaticParams() {
  return bundles.map((bundle) => ({
    bundleId: bundle.id,
  }));
}

export default function BundlePage({
  params,
}: {
  params: { bundleId: string };
}) {
  const bundle = bundles.find((b) => b.id === params.bundleId);

  if (!bundle) return notFound();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Button variant="link" asChild className="mb-8">
          <Link href="/">← All Bundles</Link>
        </Button>

        {/* Bundle Details */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {/* Fixed: Use bundle.imageUrl instead of bundle.image */}
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <Image
                src={bundle.imageUrl}
                alt={bundle.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Multiple preview images (if available) */}
            {bundle.images && bundle.images.length > 0 && (
              <div className="grid grid-cols-3 gap-2">
                {bundle.images.map((img, i) => (
                  <div key={i} className="relative h-20 rounded overflow-hidden">
                    <Image
                      src={img}
                      alt={`Preview ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 33vw, 16vw"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{bundle.title}</h1>
            <p className="text-gray-600 text-lg">{bundle.description}</p>
            <div className="text-2xl font-bold text-primary">₹{bundle.price}</div>
            
            <PaymentButton bundle={bundle} />
            
            {/* Features section */}
            {bundle.features && bundle.features.length > 0 && (
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">What's Included:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  {bundle.features.map((feature, i) => (
                    <li key={i} className="text-gray-700">{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tags section */}
            {bundle.tags && bundle.tags.length > 0 && (
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {bundle.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Platform compatibility */}
            {bundle.platform && bundle.platform.length > 0 && (
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Compatible Platforms:</h3>
                <div className="flex gap-2">
                  {bundle.platform.map((platform, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm capitalize"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
