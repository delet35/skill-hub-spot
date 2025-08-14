import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchListing } from '../api/listings';
import GlassCard from '../components/GlassCard';

export default function ListingDetail(){
  const { id = '' } = useParams();
  const { data, isLoading, isError, error } = useQuery({ queryKey:['listing', id], queryFn:()=>fetchListing(id), enabled: !!id });

  if (isLoading) return <div className="container"><div className="glass h-[480px]" /></div>;
  if (isError || !data) return <div className="container"><GlassCard className="p-4 text-red-800 bg-red-50/80">Failed: {(error as Error)?.message ?? 'Not found'}</GlassCard></div>;

  return (
    <div className="container grid grid-cols-[1fr_360px] gap-4">
      <GlassCard className="p-4">
        <img src={data.coverImages[0]} alt={data.title} className="w-full aspect-[3/2] object-cover rounded-xl" />
        <h1 className="mt-3 text-2xl font-semibold">{data.title}</h1>
        <p className="mt-2 opacity-80">{data.longDesc}</p>
      </GlassCard>
      <GlassCard className="p-4 sticky top-20">
        <div className="text-xl font-semibold">{data.price === 0 ? 'Free' : `${data.currency} ${data.price}`}</div>
        <button className="mt-3 w-full px-4 py-3 rounded-xl bg-gold/90 text-ink font-semibold">Message Seller</button>
        <button className="mt-2 w-full px-4 py-3 rounded-xl bg-white/80 border border-white/40">Save</button>
      </GlassCard>
    </div>
  );
}
