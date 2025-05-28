import { Card, CardContent } from '@/components/ui/card';
import { Download, ShieldCheck, Zap, Award } from 'lucide-react';

const trustItems = [
  {
    icon: <Download className="h-8 w-8 text-primary" />,
    title: '1000+ Downloads',
    description: 'Join a growing community of creators.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: '100% Safe & Secure',
    description: 'Secure payments and downloads you can trust.',
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Instant Delivery',
    description: 'Get your download links immediately after purchase.',
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'Premium Quality',
    description: 'High-resolution, professionally crafted content.',
  },
];

export default function TrustIndicators() {
  return (
    <section className="py-12 bg-muted/50 rounded-lg my-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose ReelMojo?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item) => (
            <Card key={item.title} className="text-center shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
