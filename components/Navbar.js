import Link from "next/link";

const links = [
  ["Features", "#features"],
  ["Matching", "#matching"],
  ["Assignments", "#hub"],
  ["FAQ", "#faq"],
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="font-display grid h-9 w-9 place-items-center rounded-lg bg-[#f5b301] text-xl text-black">
            B
          </span>
          <span className="font-display text-2xl tracking-wider">BCAWALE</span>
        </Link>

        <ul className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="transition hover:text-white">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <Link
          href="/onboarding"
          className="rounded-full bg-[#f5b301] px-5 py-2 text-sm font-bold text-black transition hover:bg-[#ffc933]"
        >
          Join the Gang
        </Link>
      </nav>
    </header>
  );
}
