export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-gradient-to-b from-white to-indigo-50" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-indigo-100 bg-white p-8 sm:p-12 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 id="cta-heading" className="text-3xl font-bold tracking-tight text-gray-900">Be first to know about new tenders</h2>
              <p className="mt-3 text-gray-600">Join the waitlist and get early access. We’ll help you never miss an opportunity again.</p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                alert(`Welcome aboard, ${data.get("name") || "there"}!`);
              }}
              className="flex w-full max-w-md flex-col sm:flex-row gap-3 sm:gap-2 sm:justify-end"
            >
              <input
                name="name"
                type="text"
                placeholder="Your name"
                className="flex-1 rounded-lg border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-200"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Work email"
                className="flex-1 rounded-lg border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-200"
              />
              <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white hover:bg-indigo-500 transition">
                Join waitlist
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
