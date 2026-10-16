"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { onboardingSteps } from "@/data/onboarding";
import "./onboarding.css";

const NAME_MIN = 2;
const NAME_MAX = 40;
const REACTION_MS = 1400;

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [reaction, setReaction] = useState(null);
  const [gifUrl, setGifUrl] = useState(null);
  const timer = useRef(null);
  const nameInput = useRef(null);

  const total = onboardingSteps.length;
  const done = step >= total;
  const current = onboardingSteps[step];
  const isText = current?.type === "text";

  useEffect(() => () => clearTimeout(timer.current), []);

  // Fetch a reaction GIF for the chosen option (needs GIPHY_API_KEY).
  useEffect(() => {
    setGifUrl(null);
    if (!reaction?.gif) return;
    const controller = new AbortController();
    fetch(`/api/gif?q=${encodeURIComponent(reaction.gif)}`, {
      signal: controller.signal,
    })
      .then((r) => r.json())
      .then(({ urls }) => {
        if (urls?.length) {
          setGifUrl(urls[Math.floor(Math.random() * urls.length)]);
        }
      })
      .catch(() => {});
    return () => controller.abort();
  }, [reaction]);

  useEffect(() => {
    if (isText && !done) nameInput.current?.focus();
  }, [isText, done]);

  // Keep the finished profile on this device until accounts exist.
  useEffect(() => {
    if (!done) return;
    try {
      const profile = Object.fromEntries(
        Object.entries(answers).map(([id, a]) => [id, a.value])
      );
      localStorage.setItem("bcawale.profile", JSON.stringify(profile));
    } catch {
      /* storage can be unavailable; the profile screen still works */
    }
  }, [done, answers]);

  function choose(option) {
    if (reaction) return;
    setAnswers((a) => ({ ...a, [current.id]: option }));
    setReaction(option);
    timer.current = setTimeout(() => {
      setStep((s) => s + 1);
      setReaction(null);
    }, REACTION_MS);
  }

  function submitName(event) {
    event.preventDefault();
    const value = name.trim().replace(/\s+/g, " ");
    if (value.length < NAME_MIN || value.length > NAME_MAX) {
      setNameError(
        `Naam ${NAME_MIN} se ${NAME_MAX} akshar ke beech me likho.`
      );
      return;
    }
    setName(value);
    setNameError("");
    setAnswers((a) => ({ ...a, [current.id]: { value, label: value } }));
    setStep((s) => s + 1);
  }

  function goBack() {
    if (step > 0 && !reaction) setStep((s) => s - 1);
  }

  function restart() {
    setStep(0);
    setAnswers({});
    setName("");
    setNameError("");
  }

  const progress = Math.round((Math.min(step, total) / total) * 100);
  const panel = reaction
    ? { text: reaction.roast, gif: gifUrl }
    : current?.idle;

  return (
    <main className="ob">
      <header className="ob-top">
        <Link href="/" className="ob-brand">
          BCAWALE
        </Link>
        <p className="ob-count">
          {done ? "Profile ready" : `Sawaal ${step + 1} / ${total}`}
        </p>
      </header>
      <div
        className="ob-progress"
        role="progressbar"
        aria-label="Onboarding progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
      >
        <span style={{ width: `${progress}%` }} />
      </div>

      {!done ? (
        <div className="ob-stage">
          <section className="ob-main">
            <button
              type="button"
              onClick={goBack}
              className="ob-back"
              hidden={step === 0}
            >
              Peeche jao
            </button>

            <h1 className="ob-question">{current.question}</h1>

            {isText ? (
              <form className="ob-form" onSubmit={submitName} noValidate>
                <label className="ob-label" htmlFor="ob-name">
                  Tera naam
                </label>
                <input
                  id="ob-name"
                  ref={nameInput}
                  className="ob-input"
                  type="text"
                  value={name}
                  maxLength={NAME_MAX}
                  autoComplete="nickname"
                  placeholder={current.placeholder}
                  aria-invalid={nameError ? "true" : "false"}
                  aria-describedby={nameError ? "ob-name-error" : undefined}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (nameError) setNameError("");
                  }}
                />
                {nameError && (
                  <p id="ob-name-error" className="ob-error" role="alert">
                    {nameError}
                  </p>
                )}
                <button type="submit" className="ob-primary">
                  Profile banao
                </button>
              </form>
            ) : (
              <ul className="ob-options">
                {current.options.map((opt) => {
                  const selected = reaction?.value === opt.value;
                  return (
                    <li key={opt.value}>
                      <button
                        type="button"
                        onClick={() => choose(opt)}
                        disabled={!!reaction}
                        aria-pressed={selected}
                        className="ob-option"
                        data-selected={selected}
                        data-dim={!!reaction && !selected}
                      >
                        <span className="ob-option__label">{opt.label}</span>
                        {opt.sub && (
                          <span className="ob-option__sub">{opt.sub}</span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </section>

          <figure className="ob-still">
            <div className="ob-still__frame">
              {panel.gif ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="ob-still__img" src={panel.gif} alt="" />
              ) : (
                <span className="ob-still__title" aria-hidden="true">
                  BCAWALE
                </span>
              )}
            </div>
            <figcaption
              key={panel.text}
              className="ob-still__sub"
              aria-live="polite"
            >
              {panel.text}
            </figcaption>
          </figure>
        </div>
      ) : (
        <div className="ob-done">
          <h1 className="ob-question ob-done__title">
            {answers.name?.label}, tu gang mein hai.
          </h1>
          <p className="ob-done__lead">
            Ye tera profile hai. Isi se tujhe same semester, same backlog aur
            same centre ke log dikhenge.
          </p>

          <dl className="ob-cast">
            {onboardingSteps.map((s) => (
              <div key={s.id} className="ob-cast__row">
                <dt>{s.summaryLabel}</dt>
                <dd>{answers[s.id]?.label}</dd>
              </div>
            ))}
          </dl>

          <div className="ob-actions">
            <Link href="/" className="ob-primary">
              Home pe jao
            </Link>
            <button type="button" onClick={restart} className="ob-secondary">
              Dobara bharo
            </button>
          </div>
          <p className="ob-note">
            Ye profile abhi sirf is device pe saved hai. Login (Google ya
            email) judne ke baad ye tere account se jud jayega.
          </p>
        </div>
      )}
    </main>
  );
}
