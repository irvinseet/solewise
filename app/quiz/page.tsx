"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getQuiz } from "@/lib/data";

export default function QuizPage() {
  const questions = getQuiz();
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const q = questions[step];
  const selected = answers[q.id];
  const isLast = step === questions.length - 1;

  const choose = (val: string) =>
    setAnswers((prev) => ({ ...prev, [q.id]: val }));

  const next = () => {
    if (isLast) {
      const params = new URLSearchParams(answers).toString();
      router.push(`/quiz/results?${params}`);
    } else {
      setStep((s) => s + 1);
    }
  };

  return (
    <div className="page">
      <div className="quiz-wrap">
        <div style={{ textAlign: "center", marginBottom: "0.5rem" }}>
          <span className="section-label">
            Barefoot Finder — Question {step + 1} of {questions.length}
          </span>
        </div>

        <div className="quiz-progress">
          <div
            className="quiz-progress-bar"
            style={{ width: `${((step + 1) / questions.length) * 100}%` }}
          />
        </div>

        <div className="quiz-step" key={step}>
          <div className="quiz-emoji">{q.emoji}</div>
          <div className="quiz-question">{q.question}</div>
          <div className="quiz-options">
            {q.options.map((o) => (
              <button
                key={o.value}
                className={`quiz-option ${selected === o.value ? "selected" : ""}`}
                onClick={() => choose(o.value)}
              >
                <span className="opt-emoji">{o.emoji}</span>
                <span>{o.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="quiz-nav">
          <button
            className="btn-ghost"
            onClick={() => step > 0 && setStep((s) => s - 1)}
            style={{ opacity: step === 0 ? 0 : 1 }}
          >
            ← Back
          </button>
          <button
            className="btn-primary"
            disabled={!selected}
            onClick={next}
          >
            {isLast ? "See My Recommendations →" : "Next →"}
          </button>
        </div>
      </div>
    </div>
  );
}
