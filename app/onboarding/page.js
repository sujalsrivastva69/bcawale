"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { onboardingSteps } from "@/data/onboarding";

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [reaction, setReaction] = useState(null);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const total = onboardingSteps.length;
  const done = step >= total;
  const current = onboardingSteps[step];
  const progress = Math.round((Math.min(step, total) / total) * 100);

  function choose(option) {
    if (reaction) return;
    setAnswers((a) => ({ ...a, [current.id]: option }));
    setReaction(option);
    timer.current = setTimeout(() => {
      setStep((s) => s + 1);
      setReaction(null);
    }, 1200);
  }

  function goBack() {
    if (step > 0 && !reaction) setStep((s) => s - 1);
  }

  const panel = reaction
    ? { emoji: reaction.emoji, text: reaction.roast, gif: reaction.gif }
    : current?.idle;

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/3 h-[500px] w-[700px] rounded-full bg-[#f5b301]/15 blur-[140px]" />

      <header className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <Link href="/" className="font-display text-2xl tracking-wider">
          BCAWALE
        </Link>
        <span className="text-sm text-white/50">
          {done ? "Complete" : `Step ${step + 1} of ${total}`}
        </span>
      </header>
      <div className="relative mx-auto h-1 max-w-7xl bg-white/10 sm:mx-8 sm:rounded-full">
        <div
          className="h-full rounded-full bg-[#f5b301] transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {!done ? (
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-2">
          <section>
            {step > 0 && (
              <button
                onClick={goBack}
                className="mb-6 text-sm text-white/50 transition hover:text-white"
              >
                ← Peeche
              </button>
            )}
            <h1 className="font-display text-5xl leading-none sm:text-6xl">
              {current.question}
            </h1>

            <div
              className={`mt-10 grid gap-3 ${
                current.options.length > 4 ? "sm:grid-cols-2" : ""
              }`}
            >
              {current.options.map((opt) => {
                const selected = reaction?.value === opt.value;
                return (
                  <button
                    key={opt.value}
                    onClick={() => choose(opt)}
                    disabled={!!reaction}
                    className={`flex items-center gap-4 rounded-2xl border px-5 py-4 text-left transition ${
                      selected
                        ? "border-[#f5b301] bg-[#f5b301]/15"
                        : "border-white/10 bg-white/[0.04] hover:border-white/30 hover:bg-white/[0.08]"
                    } disabled:cursor-not-allowed ${
                      reaction && !selected ? "opacity-40" : ""
                    }`}
                  >
                    <span className="text-2xl">{opt.emoji}</span>
                    <span>
                      <span className="block font-semibold">{opt.label}</span>
                      {opt.sub && (
                        <span className="block text-sm text-white/50">
                          {opt.sub}
                        </span>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          <aside className="flex items-center justify-center">
            <div className="flex aspect-square w-full max-w-md flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-8 text-center shadow-2xl">
              <div key={panel.text} className="pop flex flex-col items-center">
                {panel.gif ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={panel.gif}
                    alt="reaction"
                    className="h-56 w-56 rounded-2xl object-cover"
                  />
                ) : (
                  <span className="text-8xl">{panel.emoji}</span>
                )}
                <p className="font-display mt-6 text-3xl leading-tight">
                  {panel.text}
                </p>
                {reaction && (
                  <span className="mt-4 rounded-full bg-red-500/20 px-3 py-1 text-xs font-bold text-red-300">
                    ROAST MODE
                  </span>
                )}
              </div>
            </div>
          </aside>
        </div>
      ) : (
        <div className="relative mx-auto max-w-2xl px-5 py-20 text-center sm:px-8">
          <span className="pop text-7xl">🎬</span>
          <h1 className="font-display mt-6 text-6xl leading-none">
            PROFILE READY,
            <br />
            <span className="text-gold-gradient">SURVIVOR.</span>
          </h1>

          <ul className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03] text-left">
            {onboardingSteps.map((s) => (
              <li
                key={s.id}
                className="flex items-center justify-between px-6 py-4"
              >
                <span className="text-white/50">{s.question}</span>
                <span className="font-semibold">
                  {answers[s.id]?.emoji} {answers[s.id]?.label}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => {
                setStep(0);
                setAnswers({});
              }}
              className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              Dobara bharo
            </button>
            <Link
              href="/"
              className="rounded-full bg-[#f5b301] px-8 py-3 font-bold text-black transition hover:scale-105"
            >
              Aage badho →
            </Link>
          </div>
          <p className="mt-6 text-xs text-white/35">
            Abhi ye data save nahi ho raha. Auth aur database next step mein
            judega.
          </p>
        </div>
      )}
    </main>
  );
}
