import { Routes, Route } from 'react-router-dom';

import SiteLayout from './components/layout/SiteLayout';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import USProductSourcing from './pages/USProductSourcing';
import ExportCoordination from './pages/ExportCoordination';
import SriLankaTradeLane from './pages/SriLankaTradeLane';
import ProductCategories from './pages/ProductCategories';
import HowItWorks from './pages/HowItWorks';
import ForSriLankaBuyers from './pages/ForSriLankaBuyers';
import ForUSSuppliers from './pages/ForUSSuppliers';
import ImportWholesale from './pages/ImportWholesale';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AccessibilityStatement from './pages/AccessibilityStatement';
import TradeComplianceDisclaimer from './pages/TradeComplianceDisclaimer';
import RestrictedItemsPolicy from './pages/RestrictedItemsPolicy';
import CookiePolicy from './pages/CookiePolicy';

function NotFound() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
          404
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          The page you requested could not be found. Return home or contact Link International Trading Company for sourcing and trade facilitation support.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Return Home
        </a>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/us-product-sourcing" element={<USProductSourcing />} />
        <Route path="/export-coordination" element={<ExportCoordination />} />
        <Route path="/sri-lanka-trade-lane" element={<SriLankaTradeLane />} />
        <Route path="/product-categories" element={<ProductCategories />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/for-sri-lanka-buyers" element={<ForSriLankaBuyers />} />
        <Route path="/for-us-suppliers" element={<ForUSSuppliers />} />
        <Route path="/import-wholesale" element={<ImportWholesale />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/accessibility" element={<AccessibilityStatement />} />
        <Route path="/trade-compliance" element={<TradeComplianceDisclaimer />} />
        <Route path="/restricted-items-policy" element={<RestrictedItemsPolicy />} />
        <Route path="/cookies" element={<CookiePolicy />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
