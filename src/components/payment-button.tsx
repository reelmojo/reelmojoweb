'use client';

import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import type { Bundle } from '@/lib/constants';

export default function PaymentButton({ bundle }: { bundle: Bundle }) {
  const { toast } = useToast();

  const handlePayment = () => {
    // Placeholder: Replace with Razorpay/Stripe integration
    toast({
      title: 'Payment Initiated',
      description: `You are buying "${bundle.title}" for ₹${bundle.price}.`,
      variant: 'default',
    });
    // Example: window.location.href = bundle.paymentUrl;
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
