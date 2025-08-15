import Image from "next/image";

export default function TributePage() {
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
            src="/tribute/anny-featured.jpg"
            alt="Anny Mutindi Mutiso"
            width={800}
            height={600}
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </section>

      {/* Photo Gallery */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Photo Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative aspect-square">
            <Image
              src="/tribute/gallery-1.jpg"
              alt="Book distribution"
              fill
              className="rounded-lg shadow-md object-cover"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/tribute/gallery-2.jpg"
              alt="Book loading process"
              fill
              className="rounded-lg shadow-md object-cover"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/tribute/gallery-3.jpg"
              alt="School visit"
              fill
              className="rounded-lg shadow-md object-cover"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/tribute/gallery-4.jpg"
              alt="With students"
              fill
              className="rounded-lg shadow-md object-cover"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/tribute/gallery-5.jpg"
              alt="Book distribution to schools"
              fill
              className="rounded-lg shadow-md object-cover"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/tribute/gallery-6.jpg"
              alt="Educational work"
              fill
              className="rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
} 