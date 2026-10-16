const steps = [
  ["01", "Profile banao", "Semester, state, backlog status aur humour style chuno."],
  ["02", "Match dhoondo", "Tumhare jaise students ki list milegi, opt-in hone par hi."],
  ["03", "Request bhejo", "Dono taraf se accept hone par hi private chat khulegi."],
  ["04", "Chat karo", "Block aur report controls har chat mein available honge."],
];

const messages = [
  { me: false, text: "Bhai 3rd sem mein DSA ne kitna rulaya tumhe?" },
  { me: true, text: "Linked list tak theek tha, trees ne hi maar diya." },
  { me: false, text: "Assignment kab tak submit karna hai, pata hai?" },
  { me: true, text: "Hub mein deadline dekh le, reminder bhi laga diya ⏰" },
];

export default function MatchDemo() {
  return (
    <section
      id="matching"
      className="border-y border-white/10 bg-gradient-to-b from-neutral-950 to-black py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f5b301]">
            Killer feature
          </p>
          <h2 className="font-display mt-4 text-5xl leading-none sm:text-6xl">
            SAME BACKLOG.
            <br />
            SAME STRUGGLE.
            <br />
            <span className="text-gold-gradient">SAME GANG.</span>
          </h2>

          <ol className="mt-12 space-y-6">
            {steps.map(([n, title, desc]) => (
              <li key={n} className="flex gap-5">
                <span className="font-display text-3xl text-[#f5b301]">
                  {n}
                </span>
                <div>
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="text-white/55">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Chat mock */}
        <div className="mx-auto w-full max-w-md">
          <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-neutral-950 shadow-[0_0_80px_-20px_#f5b301]">
            <div className="flex items-center gap-3 border-b border-white/10 bg-white/5 px-5 py-4">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#f5b301] to-red-500 font-bold text-black">
                R
              </div>
              <div>
                <p className="text-sm font-semibold">Rohit</p>
                <p className="text-xs text-emerald-400">● online</p>
              </div>
              <span className="ml-auto rounded-full bg-white/10 px-3 py-1 text-xs text-white/60">
                92% match
              </span>
            </div>

            <div className="space-y-3 px-5 py-6">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.me ? "justify-end" : "justify-start"}`}
                >
                  <p
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                      m.me
                        ? "rounded-br-sm bg-[#f5b301] font-medium text-black"
                        : "rounded-bl-sm bg-white/10 text-white/90"
                    }`}
                  >
                    {m.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 border-t border-white/10 px-5 py-4">
              <div className="flex-1 rounded-full bg-white/10 px-4 py-2.5 text-sm text-white/40">
                Message likho...
              </div>
              <div className="grid h-10 w-10 place-items-center rounded-full bg-[#f5b301] text-black">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M3 20.5v-6.8l9-1.7-9-1.7V3.5L22 12 3 20.5z" /></svg>
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-white/35">
            Demo chat, design preview ke liye.
          </p>
        </div>
      </div>
    </section>
  );
}
