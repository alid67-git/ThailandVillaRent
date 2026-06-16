import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StayDetailView } from "@/components/StayDetailView";
import { getStayBySlug, getAllStaySlugs } from "@/data/stays/catalog";

export function generateStaticParams() {
  return getAllStaySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const stay = getStayBySlug(slug);
  if (!stay) return {};
  return {
    title: `${slug.replace(/-/g, " ")} — Thailand Villa Rent`,
  };
}

export default async function StayDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const stay = getStayBySlug(slug);
  if (!stay) notFound();
  return <StayDetailView stay={stay} />;
}
