import LoadingSpinner from "@/common/components/LoadingSpinner/LoadingSpinner";

export default function LoadingFallback() {
  return (
    <div className="container flex items-center justify-center h-[50vh]">
      <div className="text-center">
        <LoadingSpinner size="lg" className="mb-4" />
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}
