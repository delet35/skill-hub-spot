import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Landing from "./pages/Landing";
import ListingDetail from "./pages/ListingDetail";
import CreateListing from "./pages/CreateListing";

export default function App() {
  // Keep columns order fixed even in RTL
  document.documentElement.dir = document.documentElement.dir || "ltr";

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <nav style={{position:'sticky', top:0, padding:'8px 12px'}}>
          <Link to="/" style={{marginRight:12}}>Home</Link>
          <Link to="/create">Create</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/listing/:id" element={<ListingDetail />} />
          <Route path="/create" element={<CreateListing />} />
          {/* Fallback to avoid blank page on bad routes */}
          <Route path="*" element={<div style={{padding:24}}>Not found</div>} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
