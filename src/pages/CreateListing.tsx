import React, { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import ImagePicker, { ImageSource } from '../components/ImagePicker';
import { createListing, uploadImages, CreateListingDto } from '../api/listings';
import { useMutation } from '@tanstack/react-query';
import GlassCard from '../components/GlassCard';
import { ListingFormat, DeliveryMethod, Level } from '../types/marketplace';

const schema = z.object({
  title: z.string().min(3).max(60),
  price: z.number().nonnegative(),
  currency: z.enum(['USD','EUR','ILS','GBP']),
  categoryId: z.string().min(1),
  format: z.enum(['Coaching_1on1','Guide_PDF','Template_Asset','Live_Workshop','Video_Course']),
  deliveryMethod: z.enum(['Download','Video_Call','Chat','External_Link']),
  level: z.enum(['Beginner','Intermediate','Advanced']),
  shortDesc: z.string().min(10).max(160),
  longDesc: z.string().min(20),
});

type FormValues = z.infer<typeof schema>;

type UploadImage = Extract<ImageSource, { kind: 'upload' }>;
type UrlImage = Extract<ImageSource, { kind: 'url' }>;

export default function CreateListing(){
  const [images, setImages] = useState<ImageSource[]>([]);
  const { register, handleSubmit, formState:{errors, isValid}, watch, setError } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: { currency:'USD', price: 0, format:'Guide_PDF' as ListingFormat, deliveryMethod:'Download' as DeliveryMethod, level:'Beginner' as Level }
  });

  const firstPreview = useMemo(()=> images[0]?.previewUrl, [images]);

  const mutation = useMutation({
    mutationFn: async (v: FormValues) => {
      const uploadFiles = images.filter((i): i is UploadImage => i.kind === 'upload').map(i => i.file);
      const urlImages = images.filter((i): i is UrlImage => i.kind === 'url').map(i => i.url);
      const uploaded = uploadFiles.length ? await uploadImages(uploadFiles) : [];
      const payload: CreateListingDto = {
        ...v,
        coverImages: [...uploaded, ...urlImages],
        languages: ['English'],
        tags: [],
      };
      return createListing(payload);
    }
  });

  const onSubmit = (v: FormValues) => {
    if (images.length === 0) {
      setError('title', { message: 'Add at least one image' });
      return;
    }
    mutation.mutate(v);
  };

  return (
    <div className="container grid grid-cols-[520px_1fr] gap-4 max-[1100px]:grid-cols-1">
      <GlassCard className="p-4">
        <h2 className="text-xl font-semibold mb-3">Create Listing</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <label className="block">
            <span>Title</span>
            <input className="w-full px-3 py-2 rounded-lg border border-white/40 bg-white/70" {...register('title')} />
            {errors.title && <div className="text-red-700">{errors.title.message}</div>}
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label className="block">
              <span>Price</span>
              <input type="number" className="w-full px-3 py-2 rounded-lg border border-white/40 bg-white/70" {...register('price', { valueAsNumber:true })} />
            </label>
            <label className="block">
              <span>Currency</span>
              <select className="w-full px-3 py-2 rounded-lg border border-white/40 bg-white/70" {...register('currency')}>
                <option>USD</option><option>EUR</option><option>ILS</option><option>GBP</option>
              </select>
            </label>
          </div>
          <label className="block">
            <span>Category</span>
            <input className="w-full px-3 py-2 rounded-lg border border-white/40 bg-white/70" {...register('categoryId')} />
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label className="block">
              <span>Format</span>
              <select className="w-full px-3 py-2 rounded-lg border border-white/40 bg-white/70" {...register('format')}>
                <option value="Coaching_1on1">1:1 Coaching</option>
                <option value="Guide_PDF">Guide/PDF</option>
                <option value="Template_Asset">Template/Asset</option>
                <option value="Live_Workshop">Live Workshop</option>
                <option value="Video_Course">Video Course</option>
              </select>
            </label>
            <label className="block">
              <span>Delivery</span>
              <select className="w-full px-3 py-2 rounded-lg border border-white/40 bg-white/70" {...register('deliveryMethod')}>
                <option value="Download">Download</option>
                <option value="Video_Call">Video Call</option>
                <option value="Chat">Chat</option>
                <option value="External_Link">External Link</option>
              </select>
            </label>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <label className="block">
              <span>Level</span>
              <select className="w-full px-3 py-2 rounded-lg border border-white/40 bg-white/70" {...register('level')}>
                <option>Beginner</option><option>Intermediate</option><option>Advanced</option>
              </select>
            </label>
            <label className="block">
              <span>Short Description</span>
              <input className="w-full px-3 py-2 rounded-lg border border-white/40 bg-white/70" {...register('shortDesc')} />
            </label>
          </div>
          <label className="block">
            <span>Long Description</span>
            <textarea rows={6} className="w-full px-3 py-2 rounded-lg border border-white/40 bg-white/70" {...register('longDesc')} />
          </label>
          <div>
            <span>Images</span>
            <ImagePicker value={images} onChange={setImages} />
          </div>
          <button disabled={!isValid || mutation.isPending} className="px-4 py-3 rounded-xl bg-gold/90 text-ink font-semibold disabled:opacity-50">Publish</button>
          {mutation.isSuccess && <div className="text-green-700">Published!</div>}
          {mutation.isError && <div className="text-red-700">{(mutation.error as Error)?.message}</div>}
        </form>
      </GlassCard>

      <GlassCard className="p-4">
        <h3 className="font-semibold mb-2">Preview</h3>
        <div className="card">
          <div className="img-wrap">
            <img src={firstPreview || 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop'} alt="Preview" className="w-full h-full object-cover" />
            <div className="price-pill">{watch('price') ? `USD ${watch('price')}` : '—'}</div>
          </div>
          <div className="p-3 font-semibold">{watch('title') || 'Your title appears here…'}</div>
        </div>
      </GlassCard>
    </div>
  );
}
