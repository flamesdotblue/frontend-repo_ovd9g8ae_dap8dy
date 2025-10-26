import { Globe, Filter, Clock, Bell } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Wide Coverage",
    desc: "Monitors national, state, municipal, and private procurement portals across industries.",
  },
  {
    icon: Filter,
    title: "Smart Matching",
    desc: "AI-powered keyword and category filters ensure you only see relevant tenders.",
  },
  {
    icon: Clock,
    title: "Instant Alerts",
    desc: "Get notified the moment a tender is published via email, SMS, or Slack.",
  },
  {
    icon: Bell,
    title: "Digest & Summaries",
    desc: "Daily and weekly recaps with deadlines, budgets, and quick-read highlights.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Built for speed and relevance</h2>
          <p className="mt-3 text-gray-600">Save hours of manual searching. Let Tender Tracker surface the opportunities that matter to your business.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <article key={f.title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-600">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
              <div className="mt-4 text-xs text-indigo-600 opacity-0 group-hover:opacity-100 transition">Learn more →</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
