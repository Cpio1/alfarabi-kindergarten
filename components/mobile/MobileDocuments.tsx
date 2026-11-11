"use client";

import { ExternalLink, FileText, FolderOpen, Hourglass, Mail } from "lucide-react";
import { links, site } from "@/config/site";
import { documents } from "@/config/content";
import { DocsVisual } from "../shared/DocsVisual";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { Wave } from "../shared/Wave";

export function MobileDocuments() {
  const { googleDriveUrl, items } = site.documents;
  const hasDocs = !!googleDriveUrl || items.length > 0;

  return (
    <section id="m-documents" aria-labelledby="m-documents-title" className="relative overflow-hidden bg-sun-50 pb-12 pt-5">
      <div className="relative z-[2] mx-auto w-full max-w-[480px] px-4">
        <SectionHeading eyebrow={documents.eyebrow} title={documents.title} size="mobile" id="m-documents-title" />

        <Reveal className="relative mt-5 pr-1 pt-8">
          <div aria-hidden="true" className="absolute left-5 top-0 flex h-9 items-center gap-1.5 rounded-t-[16px] border-[1.5px] border-b-0 border-ink bg-white px-4 font-hand text-[18px] font-bold text-leaf-700">
            <FolderOpen className="h-4 w-4" /> ата-аналарға
          </div>
          <div className="sticker sticker-sm relative rounded-[6px_26px_26px_26px] bg-white p-4" style={{ ["--sc" as string]: "#FFD76A" }}>
            <div className="flex items-center gap-3">
              <DocsVisual className="w-[88px] shrink-0" />
              <p className="min-w-0 text-[13.5px] leading-relaxed text-ink-soft">{documents.text}</p>
            </div>

            {hasDocs ? (
              <div className="mt-3 grid gap-2.5">
                {googleDriveUrl && (
                  <a
                    href={googleDriveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[52px] items-center gap-3 rounded-[16px] border-[1.5px] border-ink bg-leaf p-2.5 text-white active:scale-[0.98]"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[12px] bg-white/20">
                      <FolderOpen className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1 font-display text-[14.5px] font-bold">{documents.driveButton}</span>
                    <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </a>
                )}
                {items.map((d) => (
                  <a
                    key={d.url}
                    href={d.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[52px] items-center gap-3 rounded-[16px] border-[1.5px] border-ink bg-cream p-2.5"
                  >
                    <FileText className="h-5 w-5 shrink-0 text-leaf-700" aria-hidden="true" />
                    <span className="min-w-0 flex-1 text-[14px] font-bold text-ink">{d.title}</span>
                    <ExternalLink className="h-4 w-4 shrink-0 text-ink-soft" aria-hidden="true" />
                  </a>
                ))}
              </div>
            ) : (
              <div className="mt-3 rounded-[18px] border-2 border-dashed border-ink/25 bg-cream p-3">
                <p className="flex items-center gap-2 font-display text-[14px] font-bold text-ink">
                  <Hourglass className="h-4 w-4 shrink-0 text-leaf-700" aria-hidden="true" />
                  {documents.pendingTitle}
                </p>
                <p className="mt-1 text-[12.5px] leading-relaxed text-ink-soft">{documents.pendingText}</p>
                <a
                  href={links.email}
                  className="mt-2.5 flex h-11 min-w-0 items-center justify-center gap-2 rounded-[14px] border-[1.5px] border-ink bg-white px-3 text-[13.5px] font-bold text-leaf-700"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="truncate">{site.contacts.email}</span>
                </a>
              </div>
            )}
          </div>
        </Reveal>
      </div>
      <Wave fill="#FFF9ED" variant={3} />
    </section>
  );
}
