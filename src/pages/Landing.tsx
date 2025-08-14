import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchListings } from '../api/listings';
import ListingCard from '../components/ListingCard';
import GlassCard from '../components/GlassCard';

export default function Landing(){
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['listings', { page:1, pageSize:24 }],
    queryFn: () => fetchListings({ page:1, pageSize:24, sort:'relevance' }),
  });

  if (isError) {
    return <div className="container"><GlassCard className="p-4 text-red-800 bg-red-50/80">Failed to load listings: {(error as Error).message}</GlassCard></div>;
  }

  return (
    <div className="container">
      <div className="grid grid-cols-[72px_1fr_320px] gap-4">
        {/* Left Rail */}
        <div className="sticky top-4 flex flex-col items-center gap-3">
          <button className="glass w-14 h-14 rounded-2xl" title="Browse">☰</button>
        </div>

        {/* Feed */}
        <section>
          <div className="mb-2 flex items-center gap-2">
            <button className="px-3 py-2 rounded-full bg-white/60 border border-white/40">Filters</button>
            <span className="px-3 py-2 rounded-full bg-white/60 border border-white/40">Sort: Relevance</span>
          </div>

          <div className="feed-grid">
            {isLoading && Array.from({length:8}).map((_,i)=>
              <div key={i} className="glass h-64 rounded-2xl animate-pulse" />
            )}
            {data?.items.map(l => <ListingCard key={l.id} l={l} />)}
          </div>
        </section>

        {/* Right Rail */}
        <aside className="sticky top-20 flex flex-col gap-3">
          <GlassCard className="p-4"><a href="/create" className="px-4 py-3 rounded-xl bg-gold/90 text-ink font-semibold inline-block">Create Listing</a></GlassCard>
          <GlassCard className="p-4">
            <div className="font-semibold mb-1">Boost Credits</div>
            <div>Current <strong>12</strong></div>
            <button className="mt-2 px-3 py-2 rounded-lg bg-white/70 border border-white/40">Buy credits</button>
          </GlassCard>
        </aside>
      </div>
    </div>
  );
}
