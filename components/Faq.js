const faqs = [
  [
    "Kya BCAWale official IGNOU website hai?",
    "Nahi. Ye students ke liye students ka banaya unofficial community project hai. Official assignments ke liye hum IGNOU ke links dikhayenge.",
  ],
  [
    "Mera phone number kisi ko dikhega?",
    "Bilkul nahi. Phone number public profile par kabhi nahi dikhega, aur registration mein minimum information hi li jayegi.",
  ],
  [
    "Matching compulsory hai?",
    "Nahi. Matching opt-in hai, tum kabhi bhi on ya off kar sakte ho. Chat tabhi khulegi jab dono taraf se request accept ho.",
  ],
  [
    "Koi pareshan kare toh?",
    "Har chat mein block aur report option hoga. Reports admin team review karegi.",
  ],
  [
    "Kya ye free hai?",
    "Haan, core features students ke liye free rahenge.",
  ],
];

export default function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-28 sm:px-8">
      <h2 className="font-display text-center text-5xl sm:text-6xl">
        SAWAAL-JAWAAB
      </h2>
      <div className="mt-12 space-y-3">
        {faqs.map(([q, a]) => (
          <details
            key={q}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 open:border-[#f5b301]/40"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
              {q}
              <span className="text-2xl text-[#f5b301] transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 leading-relaxed text-white/55">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
