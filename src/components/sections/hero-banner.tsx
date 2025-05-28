'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Set your offer end date here (1 week from today)
const offerEndDate = new Date('2025-06-04T23:59:59+05:30'); // Example: 1 week from May 28, 2025

function getTimeLeft(endDate: Date) {
  const total = endDate.getTime() - new Date().getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}

export default function HeroBanner() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(offerEndDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(offerEndDate));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const offerActive = timeLeft.total > 0;

  return (
    <section className="bg-gradient-to-r from-primary to-blue-400 text-primary-foreground py-12 md:py-20 rounded-lg shadow-xl mb-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          🚀 Download 100% FREE Viral Reels & Shorts Bundles!
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Supercharge your Instagram and YouTube growth with our exclusive, ready-to-use video packs. No sign-up, no payment—just instant access to trending content!
        </p>
        <Button
          size="lg"
          variant="secondary"
          asChild
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold"
        >
          <Link href="#bundles">Get Free Bundles Now</Link>
        </Button>
        <div className="mt-4 text-sm text-primary-foreground/80 font-medium">
          {offerActive ? (
            <>
              <span className="text-red-600 font-bold">
                Limited Time Offer! Ends in:&nbsp;
                <span className="inline-block px-2">
                  {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                </span>
              </span>
              <span className="ml-2">• New viral content added weekly • Unlimited downloads • <span className="underline">Follow us for updates!</span></span>
            </>
          ) : (
            <span className="text-red-600 font-bold">
              The free offer has ended. Follow us for future giveaways!
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
