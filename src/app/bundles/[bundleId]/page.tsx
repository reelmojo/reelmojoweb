import { notFound } from 'next/navigation';
import { bundles, type Bundle } from '@/lib/constants';
import BundlePageClient from '@/components/bundle-page-client';

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

  return <BundlePageClient bundle={bundle} />;
}
