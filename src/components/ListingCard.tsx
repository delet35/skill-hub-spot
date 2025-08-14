import React from 'react';
import { Listing } from '../types/marketplace';
import { Link } from 'react-router-dom';
import GlassCard from './GlassCard';

export default function ListingCard({ l }: { l: Listing }){
  return (
    <GlassCard className="card">
      <Link to={`/listing/${l.id}`} aria-label={l.title} className="block no-underline text-ink">
        <div className="img-wrap">
          <img className="w-full h-full object-cover" src={l.coverImages[0]} alt={l.title} />
          <div className="price-pill">{l.price === 0 ? 'Free' : `${l.currency} ${l.price}`}</div>
        </div>
        <div className="p-3">
          <div className="font-semibold leading-tight min-h-[40px] line-clamp-2">{l.title}</div>
          <div className="flex gap-2 items-center text-sm text-slate-600 mt-1">
            <span>★ {(l.rating ?? 4.7).toFixed(1)}</span>
            <span>· {(l.sales ?? 120)} sales</span>
            {l.tags?.slice(0,2).map(t => <span key={t} className="px-2 py-0.5 rounded-full bg-white/60 border border-white/40">{t}</span>)}
            {l.tags && l.tags.length>2 && <span className="px-2 py-0.5 rounded-full bg-white/60 border border-white/40">+{l.tags.length-2}</span>}
          </div>
        </div>
      </Link>
    </GlassCard>
  );
}
