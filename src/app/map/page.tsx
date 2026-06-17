import { Suspense } from "react";
import { StaysMapPage } from "@/components/StaysMapPage";

export default function MapPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-neutral-50 dark:bg-ink-950" />}>
      <StaysMapPage />
    </Suspense>
  );
}
