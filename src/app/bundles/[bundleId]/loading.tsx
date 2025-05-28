// bundles/[bundleId]/loading.tsx
export default function Loading() {
  return (
    <div className="animate-pulse container mx-auto px-4 py-12">
      <div className="h-8 bg-gray-200 rounded w-24 mb-8"></div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="h-64 bg-gray-200 rounded-lg"></div>
          <div className="grid grid-cols-3 gap-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-20 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-6 bg-gray-200 rounded w-24"></div>
        </div>
      </div>
    </div>
  );
}
