import { Blog } from "../components/Blog";
import { Footer } from "../components/Footer";

export function BlogPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Blog />
      <Footer />
    </main>
  );
}
