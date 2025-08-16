"use client";
import Image from "next/image";
import { useState } from "react";
import gallery1 from "@/public/tribute/gallery-1.jpg";
import gallery2 from "@/public/tribute/gallery-2.jpg";
import gallery3 from "@/public/tribute/gallery-3.jpg";
import gallery4 from "@/public/tribute/gallery-4.jpg";
import gallery5 from "@/public/tribute/gallery-5.jpg";
import gallery6 from "@/public/tribute/gallery-6.jpg";
import gallery7 from "@/public/tribute/gallery-7.jpg";
import gallery8 from "@/public/tribute/gallery-8.jpg";
import gallery9 from "@/public/tribute/gallery-9.jpg";
import gallery10 from "@/public/tribute/gallery-10.jpg";
import gallery11 from "@/public/tribute/gallery-11.jpg";
import gallery12 from "@/public/tribute/gallery-12.jpg";
import gallery13 from "@/public/tribute/gallery-13.jpg";
import gallery14 from "@/public/tribute/gallery-14.jpg";  
import featuredImage from "@/public/tribute/anny.jpg";

const galleryPhotos = [
  {
    src: gallery1,
    alt: "Book distribution",
    caption: "Dr. Mutiso with the portion of the books assigned to Kitwii Girls (2017)"
  },
  {
    src: gallery2,
    alt: "Book loading process", 
    caption: "Packaging books in the United States"
  },
  {
    src: gallery3,
    alt: "Books traveling to Kenya.",
    caption: "Loading books for Kenya"
  },
  {
    src: gallery4,
    alt: "With students",
    caption: "Books on their way to a United States seaport to be shipped to Kenya"
  },
  {
    src: gallery5,
    alt: "Book distribution to schools",
    caption: "Books in storage in Kenya"
  },
  {
    src: gallery6,
    alt: "Educational work",
    caption: "Distributing books"
  },
  {
    src: gallery7,
    alt: "With volunteers",
    caption: "Volunteers loading books"
  },
  {
    src: gallery8,
    alt: "Community engagement",
    caption: "Books arriving at the school"
  },
  {
    src: gallery9,
    alt: "Book distribution",
    caption: "Students holding books with thumbs up, celebrating the donated books"
  },
  {
    src: gallery10,
    alt: "Final farewell",
    caption: "Parents led by the school's principal, Mr. James Kioko, outside the new makeshift school library"
  },
  {
    src: gallery11,
    alt: "Books in storage",
    caption: "Dr. Mutiso's former primary school teachers: 1st grade teacher, Mrs. John, 3rd grade teacher, and Mrs. Kakindu Nzioki. The school's principal at the time, Mr. Ndunda, presided over the ground breaking event."
  },
  {
    src: gallery12,
    alt: "Books in transit",
    caption: "Empowering teachers"
  },
  {
    src: gallery13,
    alt: "Books in transit",
    caption: "Empowering teachers"  
  },
  {
    src: gallery14,
    alt: "Books in transit",
    caption: "Students celebrating outside their new makeshift school library at the ground breaking event"
  }
];

export default function TributePage() {
  const [lightboxImage, setLightboxImage] = useState<typeof galleryPhotos[0] | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 bg-background text-text">
      {/* Tribute Message */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-8 text-primary">A Tribute to my dearest late sister Anny Mutindi Mutiso</h1>
        <div className="max-w-4xl mx-auto text-lg leading-relaxed space-y-6">
          <p>
            Writing your name brings a sense of your presence, yet the reality is that you are no longer with us physically. Nevertheless, you remain in my heart. As I officially launch our organization's website, I want to share that you were the first face of KERRS, Inc. before it became an official organization.
          </p>
          <p>
            You were a dedicated educator, viewing your teaching not merely as a job but as a calling. Your love for all students, regardless of their school locations, is exemplified in the image of you distributing books upon their arrival from the United States to various schools. Your smile reflected the joy you found in this work.
          </p>
          <p>
            KERRS Inc., now a registered organization, honors you by continuing the mission you started. This page features photographs of the book loading process in the United States and you overseeing their distribution to various schools, reminding us that our acts of kindness can endure beyond our lifetimes.
          </p>
          <p>
            And thank you for capturing the images and videos in Kenya, providing us with valuable memories. We are forever grateful for your contributions to the community.
          </p>
          <p>
            May the efforts of the KERRS' leadership team, our volunteers, and our valued donors leave a positive impact, influencing people and the world for the generations to come.
          </p>
          <p className="font-semibold">
            Rest in Peace until we meet again.
          </p>
          <p className="italic">
            Your sister, Beritah Mutiso, KERRS' Founder & President.
          </p>
        </div>
      </section>

      {/* Featured Photo */}
      <section className="mb-16">
        <div className="relative w-full max-w-2xl mx-auto">
          <Image
            src={featuredImage}
            alt="Anny Mutindi Mutiso"
            width={800}
            height={600}
            className="rounded-lg shadow-lg w-full h-auto"
          />
          <p className="text-sm text-gray-600 text-center mt-2">Anny Mutindi Mutiso</p>
        </div>
      </section>

      

      {/* Photo Gallery */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Bringing Books to Kenya</h2>
        <div className="w-full mb-12">
        <div className="flex items-center justify-center">
           <video width="320" height="400" controls preload="none" autoPlay muted className="w-full max-w-[800px] h-full">
            <source src="tribute/video.mp4" type="video/mp4" />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
                </div>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryPhotos.map((photo, index) => (
            <div key={index} className="relative">
              <div 
                className="relative aspect-square cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setLightboxImage(photo)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="rounded-lg shadow-md object-cover"
                />
              </div>
              {photo.caption && (
                <p className="text-sm text-gray-600 text-center mt-2">{photo.caption}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50 p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-4 right-4 hover:opacity-70 z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
            onClick={(e) => { e.stopPropagation(); setLightboxImage(null); }}
          >
            <div className="relative w-4 h-4">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -translate-y-1/2 rotate-45"></div>
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -translate-y-1/2 -rotate-45"></div>
            </div>
          </button>
          <div className="relative max-w-4xl w-full" style={{ maxHeight: lightboxImage.caption ? 'calc(100vh - 8rem)' : 'calc(100vh - 2rem)' }}>
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          {lightboxImage.caption && (
            <p className="text-white text-center mt-4 px-4">{lightboxImage.caption}</p>
          )}
        </div>
      )}
    </div>
  );
} 
