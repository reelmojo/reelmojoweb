'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { Bundle } from '@/lib/constants';
import { Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface BundleCardProps {
  bundle: Bundle;
}

export default function BundleCard({ bundle }: BundleCardProps) {
  const { toast } = useToast();

  const handleDownloadNow = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
//redirect to individual bundle page
    if (bundle.id) {
      window.location.href = `/bundles/${bundle.id}`;
    }
    
  }

  return (
    <Link href={`/bundles/${bundle.id}`} className="block h-full">
      <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out group">
        <CardHeader className="p-0 relative">
          <div className="aspect-video relative w-full">
            <Image
              src={bundle.imageUrl}
              alt={bundle.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </CardHeader>
        
        <CardContent className="p-6 flex-grow">
          <CardTitle className="text-xl mb-2 line-clamp-2">{bundle.title}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground mb-4 line-clamp-3">
            {bundle.description}
          </CardDescription>
          
          <div className="flex items-center justify-between mt-4">
            <p className="text-2xl font-bold text-primary">₹{bundle.price}</p>
            {Array.isArray(bundle.tags) && bundle.tags.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {(bundle.tags ?? []).slice(0, 2).map(tag => (
                  <span 
                    key={tag} 
                    className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0">
          <Button
            onClick={handleDownloadNow}
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            size="lg"
          >
            <Download className="mr-2 h-5 w-5" />
           Download Now
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
