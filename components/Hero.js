import Image from "next/image";
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

        {/* Right: community photo */}
        <div className="fade-up relative mx-auto w-full max-w-xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-[#f5b301]/15 blur-3xl"
          />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <Image
              src="/images/bcawale-gang.jpg"
              alt="BCA students ka ek group park me saath baithe hue, camera ki taraf dekhte hue"
              width={982}
              height={940}
              priority
              sizes="(min-width: 1024px) 560px, (min-width: 640px) 576px, 100vw"
              className="h-auto w-full"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/50 to-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
