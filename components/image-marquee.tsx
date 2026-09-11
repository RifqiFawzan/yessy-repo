import Image from "next/image";

const marqueeImages = [
  "/YESSY-TANJUNGBIAS (2 of 51).jpg",
  "/YESSY-TANJUNGBIAS (3 of 51).jpg",
  "/YESSY-TANJUNGBIAS (4 of 51).jpg",
  "/YESSY-TANJUNGBIAS (5 of 51).jpg",
  "/YESSY-TANJUNGBIAS (6 of 51).jpg",
  "/YESSY-TANJUNGBIAS (7 of 51).jpg",
  "/YESSY-TANJUNGBIAS (10 of 51).jpg",
  "/YESSY-TANJUNGBIAS (12 of 51).jpg",
  "/YESSY-TANJUNGBIAS (14 of 51).jpg",
  "/YESSY-TANJUNGBIAS (22 of 51).jpg",
];

export function ImageMarquee() {
  return (
    <section className="w-full py-4 sm:py-6 overflow-hidden bg-background">
      <div className="relative flex w-full overflow-hidden">
        <div className="flex w-max animate-marquee gap-3 sm:gap-4 pl-3 sm:pl-4">
          {[...marqueeImages, ...marqueeImages, ...marqueeImages].map((src, i) => (
            <div key={i} className="relative h-40 sm:h-56 md:h-64 aspect-[3/4] sm:aspect-square md:aspect-[4/5] shrink-0 overflow-hidden rounded-2xl border border-sand/40 shadow-sm group">
              <Image
                src={src}
                alt="Yessy gallery"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 160px, (max-width: 768px) 224px, 256px"
              />
              <div className="absolute inset-0 bg-brown/25 mix-blend-multiply transition-colors duration-700 group-hover:bg-brown/0" />
              <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(59,42,34,0.2)] pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

