import { News } from "../components/News";
import { Footer } from "../components/Footer";

export function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <News />
      <Footer />
    </div>
  );
}
