import type { Metadata } from "next";
import { GalleryClient } from "@/components/gallery-client";
import { SectionHeading } from "@/components/section-heading";
import { GALLERY } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Gallery — buddha_.tattz",
  description: "Recent work from Buddha — blackwork, traditional, fine line, and more.",
};

export default function GalleryPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="The full archive"
          title={
            <>
              Every piece, <br />
              <span className="italic text-blood">on the wall.</span>
            </>
          }
          description="Filter by style. Tap any piece for a closer look."
          align="center"
          className="mb-14"
        />
        <GalleryClient items={GALLERY} />
      </div>
    </div>
  );
}
