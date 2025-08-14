import React, { useCallback, useRef, useState } from 'react';

export type ImageSource =
  | { kind: 'upload'; file: File; previewUrl: string }
  | { kind: 'url'; url: string; previewUrl: string };

type Props = {
  value: ImageSource[];
  onChange: (next: ImageSource[]) => void;
  max?: number;
};

export default function ImagePicker({ value, onChange, max = 10 }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [url, setUrl] = useState('');

  const addFiles = useCallback(
    (files: FileList | null) => {
      if (!files) return;
      const next = [...value];
      Array.from(files).forEach((f) => {
        if (next.length >= max) return;
        next.push({ kind: 'upload', file: f, previewUrl: URL.createObjectURL(f) });
      });
      onChange(next);
    },
    [value, onChange, max]
  );

  const addUrl = useCallback(() => {
    const t = url.trim();
    try {
      const u = new URL(t);
      onChange([...value, { kind: 'url', url: u.toString(), previewUrl: u.toString() }]);
      setUrl('');
    } catch {
      /* invalid */
    }
  }, [url, value, onChange]);

  const move = (from: number, to: number) => {
    if (to < 0 || to >= value.length) return;
    const next = [...value];
    const [it] = next.splice(from, 1);
    next.splice(to, 0, it);
    onChange(next);
  };
  const removeAt = (i: number) => {
    const next = [...value];
    next.splice(i, 1);
    onChange(next);
  };

  return (
    <div>
      <div
        className="glass border-dashed !border-gold text-center p-4 rounded-xl cursor-pointer"
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          addFiles(e.dataTransfer.files);
        }}
      >
        Drop images here or click to upload
        <input
          ref={inputRef}
          type="file"
          accept=".jpg,.jpeg,.png,.webp"
          hidden
          multiple
          onChange={(e) => addFiles(e.target.files)}
        />
      </div>
      <div className="flex gap-2 mt-3">
        <input
          type="url"
          className="flex-1 px-3 py-2 rounded-lg border border-white/40 bg-white/70"
          placeholder="Paste image URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          type="button"
          onClick={addUrl}
          className="px-3 py-2 rounded-lg bg-gold/90 text-ink font-semibold"
        >
          Add
        </button>
      </div>
      <ul className="grid grid-cols-[repeat(auto-fill,120px)] gap-3 mt-3">
        {value.map((img, idx) => (
          <li className="relative" key={idx}>
            <img
              src={img.previewUrl}
              alt={`Selected ${idx + 1}`}
              className="w-[120px] h-[90px] object-cover rounded-lg border border-white/40"
            />
            <div className="absolute top-1.5 right-1.5 flex gap-1.5">
              <button
                type="button"
                onClick={() => move(idx, idx - 1)}
                className="px-1.5 py-0.5 rounded bg-white/80"
              >
                ◀
              </button>
              <button
                type="button"
                onClick={() => move(idx, idx + 1)}
                className="px-1.5 py-0.5 rounded bg-white/80"
              >
                ▶
              </button>
              <button
                type="button"
                onClick={() => removeAt(idx)}
                className="px-1.5 py-0.5 rounded bg-white/80"
              >
                ✕
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
