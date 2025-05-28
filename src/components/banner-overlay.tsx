'use client';

import { useEffect, useState } from 'react';

interface BannerOverlayProps {
  onContinue: () => void;
}

export default function BannerOverlay({ onContinue }: BannerOverlayProps) {
  const [secondsLeft, setSecondsLeft] = useState(10);
  const [currentAd, setCurrentAd] = useState(0);

  const ads = [
    { id: 1, content: "🔥 Special Offer! Get 50% off your next bundle purchase!" },
    { id: 2, content: "📱 Download our app for exclusive content & deals!" },
    { id: 3, content: "🚀 Follow @ReelMojo on Instagram for daily viral reels!" }
  ];

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const timer = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
      setCurrentAd(prev => (prev + 1) % ads.length);
    }, 1000);
    return () => clearInterval(timer);
  }, [secondsLeft, ads.length]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full p-6 space-y-6">
        <h2 className="text-2xl font-bold text-center">Your Download is Ready!</h2>
        <div className="text-center text-lg font-medium">
          Please wait {secondsLeft} seconds while we prepare your download...
        </div>
        {/* Ad Container */}
        <div className="space-y-4">
          {ads.map((ad, index) => (
            <div 
              key={ad.id}
              className={`p-4 rounded-lg border-2 transition-all duration-500 ${
                currentAd === index 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-transparent opacity-0 h-0 overflow-hidden'
              }`}
            >
              <div className="text-center font-medium">{ad.content}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button
            onClick={onContinue}
            disabled={secondsLeft > 0}
            className={`px-8 py-3 rounded-lg font-bold ${
              secondsLeft > 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-green-500 text-white hover:bg-green-600'
            }`}
          >
            {secondsLeft > 0 ? `${secondsLeft}s` : 'Continue to Download'}
          </button>
        </div>
      </div>
    </div>
  );
}
