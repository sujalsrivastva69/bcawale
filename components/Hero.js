import Link from "next/link";

const stats = [
  ["6", "Semesters covered"],
  ["100%", "IGNOU BCA focus"],
  ["0", "Boring signup forms"],
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Spotlights */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#f5b301]/20 blur-[140px]" />
      <div className="pointer-events-none absolute right-[-10%] top-40 h-[400px] w-[400px] rounded-full bg-red-600/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 pb-24 pt-20 sm:px-8 lg:grid-cols-2 lg:pt-28">
        {/* Left */}
        <div className="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
            <span className="h-2 w-2 rounded-full bg-[#f5b301]" />
            Batch of Survivors
          </span>

          <h1 className="font-display mt-7 text-6xl leading-[0.95] sm:text-7xl lg:text-8xl">
            DEGREE KE LIYE <br />
            AAYE THE.
            <br />
            <span className="text-gold-gradient">GANG BAN GAYA.</span>
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-relaxed text-white/60">
            IGNOU BCA students ka apna internet gang. Same semester, same
            backlogs, same struggle, toh dosti pakki. Assignments, notes aur
            deadlines bhi ek hi jagah.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/onboarding"
              className="rounded-full bg-[#f5b301] px-8 py-4 text-base font-bold text-black shadow-[0_0_40px_-8px_#f5b301] transition hover:scale-105 hover:bg-[#ffc933]"
            >
              Apni Gang Dhoondo →
            </Link>
            <a
              href="#features"
              className="rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white/90 transition hover:bg-white/10"
            >
              Kya milega?
            </a>
          </div>

          <dl className="mt-14 flex flex-wrap gap-10 border-t border-white/10 pt-8">
            {stats.map(([value, label]) => (
              <div key={label}>
                <dt className="font-display text-4xl text-[#f5b301]">
                  {value}
                </dt>
                <dd className="mt-1 text-sm text-white/50">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: floating match card */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="animate-float">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.12] to-white/[0.03] p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#f5b301] to-red-500 text-xl font-bold text-black">
                  R
                </div>
                <div>
                  <p className="font-semibold">Rohit</p>
                  <p className="text-sm text-white/50">
                    3rd Sem • Uttar Pradesh
                  </p>
                </div>
                <span className="ml-auto rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-300">
                  92% match
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {["2-3 backlogs 💀", "DSA survivor", "Night owl 🦉"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-[#f5b301] to-red-500" />
              </div>
              <p className="mt-2 text-xs text-white/40">
                Same semester • Same backlog range • Same state
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button className="rounded-xl border border-white/15 py-3 text-sm font-semibold text-white/70">
                  Skip
                </button>
                <button className="rounded-xl bg-[#f5b301] py-3 text-sm font-bold text-black">
                  Say Hi 👋
                </button>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-neutral-900/90 px-4 py-3 text-sm shadow-xl backdrop-blur">
            <span className="mr-2">🔥</span>
            Match request accepted
          </div>
          <div className="absolute -right-4 -top-5 rounded-2xl border border-white/10 bg-neutral-900/90 px-4 py-3 text-sm shadow-xl backdrop-blur">
            <span className="mr-2">📚</span>
            New assignment added
          </div>
        </div>
      </div>
    </section>
  );
}
