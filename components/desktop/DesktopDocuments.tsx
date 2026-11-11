"use client";

import { ExternalLink, FileText, FolderOpen, Hourglass, Mail } from "lucide-react";
import { motion } from "motion/react";
import { links, site } from "@/config/site";
import { documents } from "@/config/content";
import { DocsVisual } from "../shared/DocsVisual";
import { Float, Sparkle } from "../shared/Decor";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { Wave } from "../shared/Wave";

export function DesktopDocuments() {
  const { googleDriveUrl, items } = site.documents;
  const hasDocs = !!googleDriveUrl || items.length > 0;

  return (
    <section id="documents" aria-labelledby="documents-title" className="relative overflow-hidden bg-sun-50 pb-24 pt-14">
      <div className="relative z-[2] mx-auto w-full max-w-[1100px] px-8">
        <Reveal>
          <div className="grid grid-cols-[300px_1fr] items-center gap-10 rounded-[44px] bg-white p-10 shadow-soft ring-1 ring-sun/40 xl:grid-cols-[340px_1fr]">
            <div className="relative">
              <div aria-hidden="true" className="blob-b absolute inset-2 bg-sun-100" />
              <Float y={8} rotate={2} duration={6}>
                <DocsVisual className="relative w-full" />
              </Float>
              <Float className="absolute right-2 top-0 w-7" y={6} rotate={30} duration={5}>
                <Sparkle className="w-full" />
              </Float>
            </div>

            <div className="min-w-0">
              <SectionHeading eyebrow={documents.eyebrow} title={documents.title} text={documents.text} align="left" id="documents-title" />

              {hasDocs ? (
                <div className="mt-6 space-y-3">
                  {googleDriveUrl && (
                    <a
                      href={googleDriveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-[24px] bg-leaf p-4 pr-6 text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-leaf-600"
                    >
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/20">
                        <FolderOpen className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-[17px] font-black">{documents.driveTitle}</span>
                        <span className="block text-[14px] text-white/85">{documents.driveText}</span>
                      </span>
                      <span className="inline-flex items-center gap-2 text-[15px] font-extrabold">
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
                            className="flex items-center gap-3 rounded-[20px] bg-cream p-3.5 ring-1 ring-sun/40 transition hover:bg-sun-100"
                          >
                            <FileText className="h-5 w-5 shrink-0 text-leaf-700" aria-hidden="true" />
                            <span className="min-w-0 flex-1 text-[15px] font-bold text-ink">{d.title}</span>
                            <ExternalLink className="h-4 w-4 shrink-0 text-ink-soft" aria-hidden="true" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="mt-6 flex items-start gap-4 rounded-[28px] border-2 border-dashed border-sun bg-sun-50/60 p-5"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sun text-ink">
                    <Hourglass className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-[18px] font-black text-ink">{documents.pendingTitle}</span>
                    <span className="mt-1 block text-[15px] leading-relaxed text-ink-soft">{documents.pendingText}</span>
                    <a
                      href={links.email}
                      className="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[14.5px] font-extrabold text-leaf-700 shadow-softer transition hover:text-leaf-600"
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      {site.contacts.email}
                    </a>
                  </span>
                </motion.div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
      <Wave fill="#FFF9ED" variant={3} />
    </section>
  );
}
