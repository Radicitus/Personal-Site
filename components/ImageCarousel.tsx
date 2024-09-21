"use client";

import { ImageType } from "@/types/imageType";
import Image from "next/image";

export default function ImageCarousel(media: { data: ImageType[] }) {
  if (media.data.length > 3) {
    return (
      <div className="flex w-full max-w-4xl flex-col">
        <div
          className="group flex flex-nowrap gap-2 overflow-hidden
    [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
          <div className="group-hover:pause flex animate-loop-scroll items-center justify-center gap-2 md:justify-start [&_img]:max-w-none">
            {media.data.map((media) => (
              <Image
                src={media.attributes.url}
                alt={media.attributes.alternativeText}
                width={225}
                height={225}
                key={media.attributes.url}
                className="pointer-events-none h-40 w-40 select-none rounded object-cover md:h-60 md:w-60"
              />
            ))}
          </div>
          <div className="group-hover:pause flex animate-loop-scroll items-center justify-center gap-2 md:justify-start [&_img]:max-w-none">
            {media.data.map((media) => (
              <Image
                src={media.attributes.url}
                alt={media.attributes.alternativeText}
                width={225}
                height={225}
                key={media.attributes.url}
                className="pointer-events-none h-40 w-40 select-none rounded object-cover md:h-60 md:w-60"
              />
            ))}
          </div>
        </div>
        <div className="pt-4 text-center text-sm font-light opacity-60">
          Hover or Tap to pause
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-row flex-wrap justify-center gap-2">
        {media.data.map((media) => (
          <Image
            src={media.attributes.url}
            alt={media.attributes.alternativeText}
            width={225}
            height={225}
            key={media.attributes.url}
            className="z-0 h-40 w-40 select-none rounded object-cover transition-all delay-100
            duration-200 ease-in-out [-webkit-user-drag:none]
            hover:z-10 hover:-translate-y-12 hover:scale-150 md:h-60 md:w-60 hover:md:-translate-y-24 hover:md:scale-125"
          />
        ))}
      </div>
    );
  }
}
