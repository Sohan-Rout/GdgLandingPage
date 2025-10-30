"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  const items = [
    {
      id: "item-1",
      title: "Cloud Study Jams Info Session",
      summary:
        "Build practical cloud and GenAI skills with hands-on sessions and expert guidance.",
      image:
        "https://res.cloudinary.com/startup-grind/image/upload/c_scale,w_2560/v1/gcs/platform-data-goog/event_banners/blob_RR4axNE",
    },
    {
      id: "item-2",
      title: "HOW TO BUILD WITH AI",
      summary:
        "Join this immersive AI event to learn and build with cutting-edge AI technologies.",
      image:
        "https://res.cloudinary.com/startup-grind/image/upload/c_scale,w_2560/v1/gcs/platform-data-goog/event_banners/gd%20logo_YLM1yfn.jpg",
    },
    {
      id: "item-3",
      title: "CYBER SHIELD WORKSHOP",
      summary:
        "Interactive cybersecurity workshop — protect systems and learn ethical hacking basics.",
      image:
        "https://res.cloudinary.com/startup-grind/image/upload/c_scale,w_2560/v1/gcs/platform-data-goog/event_banners/GDG_Bevy_DefaultEventBanner_ofeKgys.png",
    },
    {
      id: "item-4",
      title: "GOOGLE SOLUTION CHALLENGE 2025",
      summary:
        "Compete globally by solving UN SDGs using Google technologies.",
      image:
        "https://res.cloudinary.com/startup-grind/image/upload/c_scale,w_2560/v1/gcs/platform-data-goog/event_banners/GOOGLE%20SOLUTION%20CHALLENGE_eLx0rc4.jpg",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const el = containerRef.current;
      if (!el) return;

      const width = el.scrollWidth / 2; // duplicate items width
      gsap.to(el, {
        x: `-${width}px`,
        duration: 20,
        repeat: -1,
        ease: "linear",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-16">
      <h2 className="mb-12 text-center text-4xl font-semibold">Past Events</h2>

      <div
        ref={containerRef}
        className="flex w-max gap-12 overflow-hidden"
        onMouseEnter={() => gsap.globalTimeline.pause()}
        onMouseLeave={() => gsap.globalTimeline.resume()}
      >
        {[...items, ...items].map((item) => (
          <div
            key={item.id + Math.random()}
            className="group w-[400px] flex-shrink-0 cursor-pointer border rounded-xl px-4 py-4"
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src={item.image}
                alt={item.title}
                className="h-[200px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-gray-500 line-clamp-2">
              {item.summary}
            </p>
            <div className="mt-3 flex items-center text-sm text-blue-600">
              Read more
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}