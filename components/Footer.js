import Link from "next/link";

export default function Footer() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#f5b301]/30 bg-gradient-to-br from-[#f5b301]/20 via-transparent to-red-600/10 px-8 py-16 text-center">
          <h2 className="font-display text-5xl leading-none sm:text-7xl">
            TERA BACKLOG,
            <br />
            <span className="text-gold-gradient">HUMARA PROBLEM.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-white/60">
            Ek minute mein profile banao aur apni gang dhoondo.
          </p>
          <Link
            href="/onboarding"
            className="mt-8 inline-block rounded-full bg-[#f5b301] px-10 py-4 font-bold text-black transition hover:scale-105"
          >
            Shuru Karo →
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-white/40 sm:flex-row sm:px-8">
          <span className="font-display text-xl tracking-wider text-white/80">
            BCAWALE
          </span>
          <p>Degree sabki, struggle apna-apna. Unofficial student project.</p>
        </div>
      </footer>
    </>
  );
}
