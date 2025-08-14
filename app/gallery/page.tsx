"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Caption from "../components/Caption";

// Sample gallery items - easily expandable
const galleryItems = [
  {
    id: 1,
    type: "image",
    src: "/20240730_112239.jpg",
    alt: "School activity",
    caption: "Students engaged in learning activities"
  },
  {
    id: 2,
    type: "image",
    src: "/20240730_120034.jpg",
    alt: "Educational resources",
    caption: "Educational resources being distributed"
  },
  {
    id: 3,
    type: "image",
    src: "/20240730_120038.jpg",
    alt: "Community engagement",
    caption: "Community members participating in educational initiatives"
  }
];

export default function GalleryPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-14 bg-background text-text">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16 rounded-2xl text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-6"
          >
            Our Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl leading-relaxed opacity-90"
          >
            Capturing moments of impact, growth, and community in rural Kenyan schools. 
            See the difference your support makes in the lives of students and educators.
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-white rounded-2xl shadow-xl p-12 border border-gray-100">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">Photos & Videos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {item.type === "image" ? (
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className="relative aspect-[16/9] bg-gray-200 flex items-center justify-center">
                  <div className="text-gray-500 text-4xl">▶️</div>
                  {/* Video component will go here */}
                </div>
              )}
              <div className="p-6">
                <Caption text={item.caption} className="text-left mt-0" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-accent to-yellow-500 py-16 rounded-2xl text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Be Part of Our Story</h2>
          <p className="text-xl leading-relaxed opacity-90 mb-8">
            Every photo tells a story of transformation. Help us create more moments like these.
          </p>
          <a 
            href="https://givebutter.com/IM1HHL" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-accent hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Support Our Mission
          </a>
        </div>
      </section>
    </div>
  );
}