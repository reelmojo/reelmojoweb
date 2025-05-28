'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import BannerOverlay from '@/components/banner-overlay';
import type { Bundle } from '@/lib/constants';

export default function BundlePageClient({ bundle }: { bundle: Bundle }) {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleDownloadClick = () => setShowOverlay(true);
  const handleContinue = () => {
    setShowOverlay(false);
    window.location.href = bundle.downloadUrl;
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Button variant="link" asChild className="mb-8">
          <Link href="/">← All Bundles</Link>
        </Button>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <Image
                src={bundle.imageUrl}
                alt={bundle.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {bundle.images?.length > 0 && (
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

          {/* Details Section */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{bundle.title}</h1>
            <p className="text-gray-600 text-lg">{bundle.description}</p>
            <div className="text-2xl font-bold text-primary">₹{bundle.price}</div>

            <Button 
              onClick={handleDownloadClick}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg"
            >
              Download Now
            </Button>

            {bundle.features?.length > 0 && (
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Includes:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  {bundle.features.map((feature, i) => (
                    <li key={i} className="text-gray-700">{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {bundle.tags?.length > 0 && (
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {bundle.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {bundle.platform?.length > 0 && (
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Works With:</h3>
                <div className="flex gap-2">
                  {bundle.platform.map((platform, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm capitalize"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Ad Overlay */}
        {showOverlay && <BannerOverlay onContinue={handleContinue} />}
      </div>
    </div>
  );
}
