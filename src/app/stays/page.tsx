import { Suspense } from "react";
import { StaysListPage } from "@/components/StaysListPage";

export default function StaysPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-neutral-500">…</div>}>
      <StaysListPage />
    </Suspense>
  );
}
