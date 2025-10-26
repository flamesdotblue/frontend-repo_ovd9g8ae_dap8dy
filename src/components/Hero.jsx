import { Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900"
            >
              Monitor every tender. Get notified instantly.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-5 text-lg text-gray-600"
            >
              Tender Tracker scans government and private procurement portals in real time and alerts you the moment a relevant tender is published.
            </motion.p>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const email = data.get("email");
                alert(`Thanks! We'll notify ${email} when we launch.`);
              }}
              className="mt-8 flex w-full max-w-xl rounded-xl border border-gray-200 bg-white p-2 shadow-sm"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your work email"
                className="flex-1 px-4 py-3 rounded-lg outline-none text-gray-900 placeholder:text-gray-400"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition"
              >
                <Zap className="h-4 w-4" />
                Get early access
              </button>
            </motion.form>

            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
              <div className="inline-flex items-center gap-2">
                <Shield className="h-4 w-4 text-emerald-600" />
                <span>100% privacy. No spam.</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Live scanning enabled</span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-100 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="p-6">
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <Card title="Government Portals" value="327 sources" />
                  <Card title="Private Portals" value="189 sources" />
                  <Card title="Tenders Today" value="1,264" />
                  <Card title="Avg. Alert Time" value="< 60s" />
                </div>
                <div className="mt-6 rounded-xl bg-gradient-to-r from-indigo-50 to-sky-50 p-4 border border-indigo-100 text-indigo-900">
                  <strong>Smart Filters</strong> automatically match tenders to your profile by keywords, budget range, category, location, and deadlines.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Card({ title, value }) {
  return (
    <div className="rounded-lg border border-gray-200 p-4">
      <div className="text-gray-500">{title}</div>
      <div className="mt-1 text-2xl font-semibold tracking-tight">{value}</div>
    </div>
  );
}
