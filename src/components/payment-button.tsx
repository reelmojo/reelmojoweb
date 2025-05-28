'use client';

import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import type { Bundle } from '@/lib/constants';

export default function PaymentButton({ bundle }: { bundle: Bundle }) {
  const { toast } = useToast();

  const redirectToDownload = (downloadUrl: string) => {
    // Placeholder: Replace with actual download logic
    window.location.href = downloadUrl;
  };
  const handlePayment = () => {
    // Placeholder: Replace with Razorpay/Stripe integration
    toast({
      title: 'Payment Initiated',
      description: `You are buying "${bundle.title}" for ₹${bundle.price}.`,
      variant: 'default',
    });
    if (bundle.price === 0) {
      toast({
        title: 'Download Ready',
        description: `You can now download "${bundle.title}" for free.`,
        variant: 'success',
      });
       redirectToDownload(bundle.downloadUrl);
    }
    // Simulate a successful payment
   
  };

  return (
    <Button
      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
      size="lg"
      onClick={handlePayment}
    >
      Pay ₹{bundle.price} & Download
    </Button>
  );
}
