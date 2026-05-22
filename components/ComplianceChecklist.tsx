"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { complianceChecklist } from "@/lib/legal-content";

const STORAGE_KEY = "cascade-crest-compliance-checklist";

type ChecklistItem = (typeof complianceChecklist.sections)[number]["items"][number];

function itemKey(sectionIndex: number, itemIndex: number) {
  return `${sectionIndex}-${itemIndex}`;
}

function formatDetail(detail: ChecklistItem["detail"]) {
  if (Array.isArray(detail)) {
    return (
      <ul className="mt-1 list-disc space-y-1 pl-5">
        {detail.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    );
  }
  return <span>{detail}</span>;
}

export function ComplianceChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setChecked(JSON.parse(raw) as Record<string, boolean>);
    } catch {
      /* ignore corrupt storage */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
    } catch {
      /* ignore quota / private mode */
    }
  }, [checked]);

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
      <p className="mb-6">
        <Link
          href="/"
          className="text-sm text-teal underline-offset-2 hover:underline"
        >
          ← Home
        </Link>
      </p>
      <h1 className="font-serif text-4xl font-light text-purple">
        {complianceChecklist.title}
      </h1>
      <div className="mt-10 space-y-10">
        {complianceChecklist.sections.map((section, sectionIndex) => (
          <section key={section.heading}>
            <h2 className="font-serif text-xl text-purple">{section.heading}</h2>
            <ul className="mt-4 space-y-4">
              {section.items.map((item, itemIndex) => {
                const key = itemKey(sectionIndex, itemIndex);
                const isChecked = Boolean(checked[key]);
                return (
                  <li key={key}>
                    <label className="flex cursor-pointer gap-3 text-base leading-relaxed text-foreground/80">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) =>
                          setChecked((prev) => ({
                            ...prev,
                            [key]: e.target.checked,
                          }))
                        }
                        className="mt-1 size-4 shrink-0 accent-teal"
                      />
                      <span className={isChecked ? "opacity-60" : undefined}>
                        <span className="font-medium text-foreground">
                          {item.label}:
                        </span>{" "}
                        {formatDetail(item.detail)}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
      <p className="mt-12 border-t border-purple-light/40 pt-8 text-sm leading-relaxed text-foreground/60">
        {complianceChecklist.disclaimer}
      </p>
    </article>
  );
}
