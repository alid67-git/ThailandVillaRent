import { notFound } from "next/navigation";
import { DestinationDetailView } from "@/components/DestinationDetailView";
import { getDestinationBySlug, getAllDestinationSlugs } from "@/data/destinations/catalog";

export function generateStaticParams() {
  return getAllDestinationSlugs().map((slug) => ({ slug }));
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const spot = getDestinationBySlug(slug);
  if (!spot) notFound();
  return <DestinationDetailView spot={spot} />;
}
