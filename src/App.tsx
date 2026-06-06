import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ReviewPage } from './pages/ReviewPage';
import { ProductReviewPage } from './pages/ProductReviewPage';
import { ComparePage } from './pages/ComparePage';
import { SearchPage } from './pages/SearchPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { AffiliateDisclosurePage } from './pages/AffiliateDisclosurePage';
import { AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <Router>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reviews/:categoryId" element={<ReviewPage />} />
            <Route path="/review/:productId" element={<ProductReviewPage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/affiliate-disclosure" element={<AffiliateDisclosurePage />} />
            {/* Redirect legacy tools path to home or new tool location */}
            <Route path="/tools/laptop-recommender" element={<HomePage />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </Router>
  );
}
