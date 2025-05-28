import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroBanner() {
  return (
    <section className="bg-gradient-to-r from-primary to-blue-400 text-primary-foreground py-12 md:py-20 rounded-lg shadow-xl mb-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          🔥 Trending Reels & Shorts Starting at Just ₹9!
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Elevate your social media game with our premium, ready-to-use video bundles.
        </p>
        <Button size="lg" variant="secondary" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="#bundles">Explore Bundles</Link>
        </Button>
      </div>
    </section>
  );
}
