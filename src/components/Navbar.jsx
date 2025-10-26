import { Rocket, Bell } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
            <Rocket className="h-5 w-5" />
          </span>
          <span className="text-lg font-semibold tracking-tight">Tender Tracker</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition">Features</a>
          <a href="#how" className="hover:text-gray-900 transition">How it works</a>
          <a href="#pricing" className="hover:text-gray-900 transition">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 h-10 px-4 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition">
            <Bell className="h-4 w-4" />
            <span>Demo Alerts</span>
          </button>
          <a href="#cta" className="inline-flex items-center h-10 px-4 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition">Get started</a>
        </div>
      </div>
    </header>
  );
}
