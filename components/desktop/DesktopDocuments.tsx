"use client";

import { ExternalLink, FileText, FolderOpen, Hourglass, Mail } from "lucide-react";
import { links, site } from "@/config/site";
import { documents } from "@/config/content";
import { DocsVisual } from "../shared/DocsVisual";
import { Float, Twinkle } from "../shared/Decor";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { Wave } from "../shared/Wave";

export function DesktopDocuments() {
  const { googleDriveUrl, items } = site.documents;
  const hasDocs = !!googleDriveUrl || items.length > 0;

  return (
    <section id="documents" aria-labelledby="documents-title" className="relative overflow-hidden bg-sun-50 pb-20 pt-12">
      <div className="relative z-[2] mx-auto w-full max-w-[980px] px-8">
        <Reveal className="relative pt-9">
          {/* карточка в форме папки: «ушко» сверху */}
          <div
            aria-hidden="true"
            className="absolute left-10 top-0 h-11 w-52 rounded-t-[22px] border-[1.5px] border-b-0 border-ink bg-white"
          >
            <span className="flex h-full items-center gap-2 px-5 font-hand text-[21px] font-bold text-leaf-700">
              <FolderOpen className="h-4 w-4" /> ата-аналарға
            </span>
          </div>
          <div
            className="sticker relative grid grid-cols-[230px_1fr] items-center gap-10 rounded-[8px_36px_36px_36px] bg-white p-8 xl:grid-cols-[260px_1fr]"
            style={{ ["--sc" as string]: "#FFD76A" }}
          >
            <div className="relative">
              <div aria-hidden="true" className="clip-blob absolute inset-0 bg-sun-100" />
              <Float y={6} rotate={2} duration={6}>
                <DocsVisual className="relative w-full" />
              </Float>
              <Float className="absolute right-0 top-0 w-7" y={6} rotate={30} duration={5}>
                <Twinkle className="w-full" color="#66B88C" />
              </Float>
            </div>

            <div className="min-w-0">
              <SectionHeading eyebrow={documents.eyebrow} title={documents.title} text={documents.text} align="left" id="documents-title" />

              {hasDocs ? (
                <div className="mt-5 space-y-3">
                  {googleDriveUrl && (
                    <a
                      href={googleDriveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sticker sticker-hover sticker-press flex items-center gap-4 rounded-[22px] bg-leaf p-3.5 pr-5 text-white"
                      style={{ ["--sc" as string]: "#244438" }}
                    >
                      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/20">
                        <FolderOpen className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-[16px] font-bold">{documents.driveTitle}</span>
                        <span className="block text-[13.5px] text-white/85">{documents.driveText}</span>
                      </span>
                      <span className="inline-flex items-center gap-2 text-[14.5px] font-bold">
                        {documents.driveButton}
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </a>
                  )}
                  {items.length > 0 && (
                    <ul className="grid grid-cols-2 gap-3">
                      {items.map((d) => (
                        <li key={d.url}>
                          <a
                            href={d.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 rounded-[18px] border-[1.5px] border-ink bg-cream p-3 transition hover:bg-sun-100"
                          >
                            <FileText className="h-5 w-5 shrink-0 text-leaf-700" aria-hidden="true" />
                            <span className="min-w-0 flex-1 text-[14.5px] font-bold text-ink">{d.title}</span>
                            <ExternalLink className="h-4 w-4 shrink-0 text-ink-soft" aria-hidden="true" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <div className="mt-5 flex items-start gap-4 rounded-[24px] border-2 border-dashed border-ink/25 bg-cream p-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-[1.5px] border-ink bg-sun text-ink">
                    <Hourglass className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-[16px] font-bold text-ink">{documents.pendingTitle}</span>
                    <span className="mt-1 block text-[14px] leading-relaxed text-ink-soft">{documents.pendingText}</span>
                    <a
                      href={links.email}
                      className="mt-2.5 inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink bg-white px-3.5 py-1.5 text-[13.5px] font-bold text-leaf-700 transition hover:bg-leaf-50"
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      {site.contacts.email}
                    </a>
                  </span>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
      <Wave fill="#FFF9ED" variant={3} />
    </section>
  );
}
