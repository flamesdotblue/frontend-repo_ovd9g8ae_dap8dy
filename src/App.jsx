import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="how" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              <Step index={1} title="Track">We continuously scan official and private portals for fresh tenders.</Step>
              <Step index={2} title="Match">Filters and keywords match opportunities to your business profile.</Step>
              <Step index={3} title="Alert">You receive instant notifications with key details and deadlines.</Step>
            </div>
          </div>
        </section>
        <CTA />
        <footer className="py-12 border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
            <p>© {new Date().getFullYear()} Tender Tracker. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-gray-900">Privacy</a>
              <a href="#" className="hover:text-gray-900">Terms</a>
              <a href="#" className="hover:text-gray-900">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function Step({ index, title, children }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-indigo-600 text-white font-semibold">{index}</span>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-gray-600 text-sm">{children}</p>
    </div>
  );
}

export default App;
