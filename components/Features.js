const features = [
  {
    emoji: "💀",
    title: "Backlog Matching",
    desc: "Semester, backlog range aur centre ke basis par same-struggle students se match hoga. Dono taraf se accept hone par hi chat khulegi.",
    big: true,
  },
  {
    emoji: "🎬",
    title: "Cinematic Onboarding",
    desc: "Boring form nahi. Har answer ke saath roast aur reaction badlega.",
  },
  {
    emoji: "📚",
    title: "Assignment Adda",
    desc: "Semester-wise assignments, PYQs, notes aur deadline tracker ek jagah.",
  },
  {
    emoji: "📍",
    title: "Apne Centre Ke Log",
    desc: "State se regional centre se study centre tak, apni local community dhoondo.",
  },
  {
    emoji: "🛡️",
    title: "Safe By Design",
    desc: "Block, report aur privacy controls. Phone number kabhi public nahi hoga.",
    big: true,
  },
  {
    emoji: "⏰",
    title: "Deadline Reminders",
    desc: "Assignment submission miss mat karo, reminder tumhe yaad dilayega.",
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-5 py-28 sm:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f5b301]">
        Features
      </p>
      <h2 className="font-display mt-4 max-w-3xl text-5xl leading-none sm:text-6xl">
        EK DEGREE. SAU KAHANIYAAN.
      </h2>
      <p className="mt-5 max-w-xl text-white/55">
        Yahan padhai ke saath struggle bhi share hota hai. Ye sab milega ek hi
        platform pe.
      </p>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {features.map((f) => (
          <article
            key={f.title}
            className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#f5b301]/50 ${
              f.big ? "md:col-span-2" : ""
            }`}
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#f5b301]/10 blur-3xl transition group-hover:bg-[#f5b301]/25" />
            <div className="relative">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-3xl">
                {f.emoji}
              </div>
              <h3 className="font-display mt-6 text-3xl">{f.title}</h3>
              <p className="mt-3 max-w-md leading-relaxed text-white/55">
                {f.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
