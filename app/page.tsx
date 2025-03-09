"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import bannerImage from "@/public/banner.jpg";
import readingImage from "@/public/reading.jpg";
import image1 from "@/public/Picture2.png";
import image3 from "@/public/Picture1.png";
import Caption from "./components/Caption";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-14 bg-background text-text">
      
      {/* Hero Section with New Banner Design and Animations */}
      <section 
        className="relative h-[500px] flex items-center justify-center bg-cover bg-center text-white text-center"
        style={{ backgroundImage: `url(${bannerImage.src})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-3xl mx-auto px-4"
        >
          <h1 className="text-5xl font-extrabold tracking-tight">Welcome to KERRS</h1>
          <p className="mt-4 text-lg">
            Kenya Educational Resources For Rural Schools, Inc. (KERRS) is a non-profit organization dedicated to promoting academic excellence in rural schools.
          </p>
          
        </motion.div>
      </section>

      {/* Donation Section */}
      <section className="bg-gray-100 py-8 px-6 text-center">
        <h2 className="text-3xl font-semibold text-primary">Support Our Mission</h2>
        <p className="mt-4 text-text max-w-2xl mx-auto">
          Your donation helps provide essential educational resources, technology, and training for students in rural Kenya. Together, we can make a lasting impact on their future.
        </p>
        <div className="mt-6">
          <a href="https://givebutter.com/IM1HHL" target="_blank" rel="noopener noreferrer">
            <button className="bg-accent hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-yellow-300">
              Donate Now
            </button>
          </a>
        </div>
      </section>

      {/* Education Importance Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-primary">Why Education Matters</h2>
          <p className="mt-4 text-text">
            We agree with Nelson Mandela that education is the most powerful tool to change the world and as Kofi Annan, the former UN Secretary-General of the United Nations, once said, “Knowledge is power. Information is liberating. Education is the premise of progress in every society, in every family.”
          </p>
          <p className="mt-4 text-text">
            Education is a powerful tool that empowers individuals to change their destinies, challenge social inequalities, advocate for change, and improve local communities. It is a bedrock of democracy, allowing people to question oppressive policies and create equal opportunities.
          </p>
        </div>
        <div className="flex flex-1 flex-col items-center md:items-start">
          <Image src={image3} alt="Education" className="rounded-lg shadow-lg w-full max-w-lg mx-auto" />
          <Caption text="Teachers at the library holding donated books." />
        </div>
      </section>

      {/* KERRS Role Section */}
      <section className="flex flex-col md:flex-row-reverse gap-8 items-center">
        <div className="md:w-1/2 w-full flex-1">
          <h2 className="text-3xl font-semibold text-primary">How KERRS Helps</h2>
          <p className="mt-4 text-text">
            KERRS supports rural schools by providing essential resources such as books, laptops, professional development for teachers, and fully equipped libraries. Our goal is to break the cycle of poverty, empower students, and enable them to contribute to their communities and the global economy.
          </p>
        </div>
        <div className="flex flex-1 flex-col items-center md:items-start">
          <Image src={image1} alt="Support" className="rounded-lg shadow-lg max-w-lg w-full mx-auto" />
          <Caption text="The school's principal, Mr. James Kioko, giving a speech during the reception of donated books." />
        </div>
      </section>

      {/* Kenya's Educational Challenges */}
      <section className="bg-gray-100 rounded-lg">
        <h2 className="text-3xl font-semibold text-primary">Challenges in Rural Kenya</h2>
        <p className="mt-4 text-text">
          Although Kenya has made significant progress by making primary education free and compulsory, many underprivileged children in rural areas lack access to quality education due to poverty, inequitable school funding, and unstable political climates.
        </p>
        <p className="mt-4 text-text">
          The 2017 implementation of the Competency-Based Curriculum (CBC) further exacerbated these challenges. Parents struggle to afford textbooks, school uniforms, and essential learning materials, leading to high dropout rates and poor academic performance.
        </p>
        <div className="flex flex-col items-center mt-6">
          <Image src={readingImage} alt="Challenges" className="rounded-lg shadow-lg max-w-4xl w-full" />
          <Caption text="A classroom turned library at Saint Martins Primary, formerly Kitwii Girls Primary School, in Kangundo." />
        </div>
      </section>

      {/* Vision, Mission, and Values Section */}
      <section className="bg-secondary p-8 rounded-lg">
        <h2 className="text-3xl font-semibold text-white text-center">Our Vision, Mission & Values</h2>
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-white">Our Vision</h3>
            <p className="text-white mt-2">
              KERRS exists to support school communities in rural Kenya to equip students with 21st-century skills including critical thinking, technology literacy, collaboration, and leadership.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white">Our Mission</h3>
            <p className="text-white mt-2">
              Our mission is to enhance the quality of education and student achievement in rural Kenya by providing educational resources such as books, laptops, teacher training, and digital learning opportunities.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white">Our Values</h3>
            <ul className="list-disc list-inside mt-2 text-white">
              <li><strong>Respect:</strong> We foster a culture of trust and respect for all individuals, regardless of age, gender, ethnicity, or socioeconomic background.</li>
              <li><strong>Accountability:</strong> We adhere to government regulations and maintain transparency with our donors and stakeholders.</li>
              <li><strong>Compassion:</strong> We recognize the struggles of rural students and actively seek solutions to address their educational needs.</li>
              <li><strong>Integrity:</strong> We operate ethically and transparently, prioritizing what is right for students and communities.</li>
              <li><strong>Community-Oriented:</strong> We collaborate with local communities to ensure students receive the support they need.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
