const semesters = ["Sem 1", "Sem 2", "Sem 3", "Sem 4", "Sem 5", "Sem 6"];

const rows = [
  { title: "Data Structures and Algorithms", type: "Assignment", tag: "Current session", color: "emerald" },
  { title: "Database Management Systems", type: "Assignment", tag: "Deadline soon", color: "amber" },
  { title: "Operating Systems", type: "Previous year paper", tag: "PYQ", color: "sky" },
  { title: "Computer Networks", type: "Notes", tag: "Community", color: "violet" },
];

const colors = {
  emerald: "bg-emerald-400/15 text-emerald-300",
  amber: "bg-amber-400/15 text-amber-300",
  sky: "bg-sky-400/15 text-sky-300",
  violet: "bg-violet-400/15 text-violet-300",
};

export default function Hub() {
  return (
    <section id="hub" className="mx-auto max-w-7xl px-5 py-28 sm:px-8">
      <div className="grid items-center gap-14 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f5b301]">
            Assignment Adda
          </p>
          <h2 className="font-display mt-4 text-5xl leading-none sm:text-6xl">
            PADHAI BHI.
            <br />
            DEADLINE BHI.
          </h2>
          <p className="mt-6 leading-relaxed text-white/55">
            Semester-wise assignments, previous-year papers aur notes, sab
            clearly labelled. Official IGNOU links ke saath, taaki tum sahi
            session ka assignment hi uthao.
          </p>
          <ul className="mt-8 space-y-3 text-white/70">
            {[
              "Current aur previous session alag-alag",
              "Submission deadline tracker",
              "Community notes, moderation ke baad",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="text-[#f5b301]">✦</span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl">
            <div className="flex flex-wrap gap-2">
              {semesters.map((s, i) => (
                <span
                  key={s}
                  className={`rounded-full px-4 py-1.5 text-sm font-semibold ${
                    i === 2
                      ? "bg-[#f5b301] text-black"
                      : "border border-white/10 text-white/60"
                  }`}
                >
                  {s}
                </span>
              ))}
            </div>

            <ul className="mt-6 divide-y divide-white/10">
              {rows.map((r) => (
                <li key={r.title} className="flex items-center gap-4 py-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-xl">
                    📄
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold">{r.title}</p>
                    <p className="text-sm text-white/45">{r.type}</p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${colors[r.color]}`}
                  >
                    {r.tag}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-3 text-center text-xs text-white/35">
            Sample data, design preview ke liye.
          </p>
        </div>
      </div>
    </section>
  );
}
