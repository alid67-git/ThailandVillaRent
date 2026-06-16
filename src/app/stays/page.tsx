import { Suspense } from "react";
import { StaysListPage } from "@/components/StaysListPage";
import { LoadingText } from "@/components/LoadingText";

export default function StaysPage() {
  return (
    <Suspense fallback={<LoadingText className="p-12 text-center text-neutral-500" />}>
      <StaysListPage />
    </Suspense>
  );
}
