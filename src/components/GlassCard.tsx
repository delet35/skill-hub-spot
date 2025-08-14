import React from 'react';
import clsx from 'clsx';

type Props = React.PropsWithChildren<{ className?: string; as?: React.ElementType }>;
export default function GlassCard({ className, as: Tag = 'div', children }: Props){
  return <Tag className={clsx('bg-white/60 border border-white/40 backdrop-blur-[22px] rounded-2xl shadow-glass', className)}>{children}</Tag>;
}
