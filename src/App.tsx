import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './styles/glass.css';
import Landing from './pages/Landing';
import ListingDetail from './pages/ListingDetail';
import CreateListing from './pages/CreateListing';

const qc = new QueryClient();

export default function App(){
  // Keep columns order fixed; only text direction may flip elsewhere
  document.documentElement.dir = document.documentElement.dir || 'ltr';

  return (
    <QueryClientProvider client={qc}>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/listing/:id" element={<ListingDetail/>} />
            <Route path="/create" element={<CreateListing/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
