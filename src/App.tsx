import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { QuoteMarquee } from "./components/QuoteMarquee";
import { HomePage } from "./pages/HomePage";
import { NewsPage } from "./pages/NewsPage";
import { BylawsPage } from "./pages/BylawsPage";
import { BudgetPage } from "./pages/BudgetPage";
import { BlogPage } from "./pages/BlogPage";
import { FAQPage } from "./pages/FAQPage";

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash, pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <QuoteMarquee />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/bylaws" element={<BylawsPage />} />
        <Route path="/budget" element={<BudgetPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
      <Navigation />
    </BrowserRouter>
  );
}
