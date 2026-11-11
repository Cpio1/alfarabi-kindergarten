"use client";

import { ExternalLink, FileText, FolderOpen, Hourglass, Mail } from "lucide-react";
import { links, site } from "@/config/site";
import { documents } from "@/config/content";
import { DocsVisual } from "../shared/DocsVisual";
import { Float } from "../shared/Decor";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { Wave } from "../shared/Wave";

export function MobileDocuments() {
  const { googleDriveUrl, items } = site.documents;
  const hasDocs = !!googleDriveUrl || items.length > 0;

  return (
    <section id="m-documents" aria-labelledby="m-documents-title" className="relative overflow-hidden bg-sun-50 pb-16 pt-6">
      <div className="relative z-[2] mx-auto w-full max-w-[640px] px-4">
        <SectionHeading eyebrow={documents.eyebrow} title={documents.title} text={documents.text} size="mobile" id="m-documents-title" />

        <Reveal className="mt-6">
          <div className="rounded-[30px] bg-white p-4 shadow-soft ring-1 ring-sun/40">
            <div className="relative mx-auto w-[62%] max-w-[220px]">
              <div aria-hidden="true" className="blob-b absolute inset-1 bg-sun-100" />
              <Float y={6} rotate={2} duration={6}>
                <DocsVisual className="relative w-full" />
              </Float>
            </div>

            {hasDocs ? (
              <div className="mt-3 grid gap-2.5">
                {googleDriveUrl && (
                  <a
                    href={googleDriveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-14 items-center gap-3 rounded-[20px] bg-leaf p-3 text-white active:scale-[0.98]"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[14px] bg-white/20">
                      <FolderOpen className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-[16px] font-black">{documents.driveButton}</span>
                      <span className="block text-[13px] text-white/85">{documents.driveTitle}</span>
                    </span>
                    <ExternalLink className="h-5 w-5 shrink-0" aria-hidden="true" />
                  </a>
                )}
                {items.map((d) => (
                  <a
                    key={d.url}
                    href={d.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-14 items-center gap-3 rounded-[18px] bg-cream p-3 ring-1 ring-sun/40"
                  >
                    <FileText className="h-5 w-5 shrink-0 text-leaf-700" aria-hidden="true" />
                    <span className="min-w-0 flex-1 text-[15px] font-bold text-ink">{d.title}</span>
                    <ExternalLink className="h-4 w-4 shrink-0 text-ink-soft" aria-hidden="true" />
                  </a>
                ))}
              </div>
            ) : (
              <div className="mt-3 rounded-[22px] border-2 border-dashed border-sun bg-sun-50/60 p-4 text-center">
                <span className="mx-auto grid h-11 w-11 place-items-center rounded-[14px] bg-sun text-ink">
                  <Hourglass className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="mt-2.5 font-display text-[17px] font-black text-ink">{documents.pendingTitle}</p>
                <p className="mt-1 text-[14px] leading-relaxed text-ink-soft">{documents.pendingText}</p>
                <a
                  href={links.email}
                  className="mt-3 flex h-12 w-full min-w-0 items-center justify-center gap-2 rounded-[16px] bg-white px-3 text-[14.5px] font-extrabold text-leaf-700 shadow-softer"
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
