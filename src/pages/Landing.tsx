import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchListings } from "../api/listings";
import GlassCard from "../components/GlassCard";
import ListingCard from "../components/ListingCard";

export default function Landing() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["listings", { page: 1, pageSize: 12 }],
    queryFn: () => fetchListings({ page: 1, pageSize: 12 }),
    retry: 0,
  });

  return (
    <div className="container">
      <h1 style={{marginBottom:8}}>Knowledge Marketplace</h1>
      <div className="feed-grid">
        {isLoading && Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="glass h-64 rounded-2xl animate-pulse" />
        ))}
        {isError && (
          <GlassCard className="p-4 text-red-800 bg-red-50/80">
            Failed to load listings: {(error as Error).message}
          </GlassCard>
        )}
        {data?.items?.length
          ? data.items.map((l) => <ListingCard key={l.id} l={l} />)
          : !isLoading && !isError && <GlassCard className="p-4">No listings yet.</GlassCard>}
      </div>
    </div>
  );
}
