const items = [
  "ASSIGNMENTS",
  "BACKLOGS",
  "BHAICHARA",
  "PYQs",
  "STUDY CENTRES",
  "DEADLINES",
  "NOTES",
  "SURVIVORS",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-white/10 bg-[#f5b301] py-4">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {[...row, ...row].map((item, i) => (
          <span
            key={i}
            className="font-display flex items-center gap-10 text-2xl text-black"
          >
            {item}
            <span>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
