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
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center text-white overflow-hidden"
        style={{ backgroundImage: `url(${bannerImage.src})` }}
      >
        <div className="absolute inset-0 gradient-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-7xl font-black tracking-tight mb-6 leading-tight"
          >
            Welcome to <span className="text-accent">KERRS</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-8"
          >
            Kenya Educational Resources For Rural Schools, Inc. (KERRS) is a non-profit organization dedicated to promoting academic excellence in rural schools.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="#mission" className="bg-accent hover:bg-accent/90 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Learn More
            </a>
            <a href="https://givebutter.com/IM1HHL" target="_blank" rel="noopener noreferrer" className="border-2 border-white hover:bg-white hover:text-primary text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105">
              Donate Now
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Donation Section */}
      <section className="bg-gradient-to-br from-primary to-secondary section-padding text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Support Our Mission
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Your donation helps provide essential educational resources, technology, and training for students in rural Kenya. Together, we can make a lasting impact on their future.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a href="https://givebutter.com/IM1HHL" target="_blank" rel="noopener noreferrer">
              <button className="bg-accent hover:bg-accent/90 text-white font-bold py-4 px-8 rounded-full text-xl shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent/30 min-w-[200px]">
                Donate Now
              </button>
            </a>
            <div className="text-center">
              <p className="text-sm opacity-90">Every dollar makes a difference</p>
              <p className="text-xs opacity-75">Tax-deductible donations</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center bg-white p-8 rounded-xl shadow-lg border-l-4 border-primary">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Students Supported</div>
            </div>
            <div className="text-center bg-white p-8 rounded-xl shadow-lg border-l-4 border-secondary">
              <div className="text-4xl font-bold text-secondary mb-2">15</div>
              <div className="text-gray-600">Schools Partnered</div>
            </div>
            <div className="text-center bg-white p-8 rounded-xl shadow-lg border-l-4 border-accent">
              <div className="text-4xl font-bold text-accent mb-2">10,000+</div>
              <div className="text-gray-600">Books Donated</div>
            </div>
            <div className="text-center bg-white p-8 rounded-xl shadow-lg border-l-4 border-primary">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Teachers Empowered</div>
            </div>
          </div>
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
          <Image src={image1} alt="Support" className="rounded-xl shadow-xl max-w-lg w-full" />
          <Caption className="max-w-lg" text="The Saint Martin's Kitwii Primary School's principal, Mr. James Kioko, giving a speech during the reception of donated books in the presence of Dr. Mutiso's parents - Mr. Abraham & Elizabeth Mutiso, Dr. Mutiso's former primary school teachers, parents, teachers, students, clergy, and community leaders. " />        
        </div>
      </section>

      {/* KERRS Role Section */}
      <section className="bg-white rounded-2xl shadow-xl p-4 md:p-12 border border-gray-100">
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
          <div className="md:w-1/2 w-full flex-1">
            <h2 className="text-4xl font-bold text-primary mb-6">How KERRS Helps</h2>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700">Essential educational resources and books</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700">Technology and laptops for digital learning</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700">Professional development for teachers</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700">Fully equipped libraries and learning spaces</span>
              </div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Breaking the cycle of poverty through education and empowering students to contribute to their communities.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={image3} alt="Education" className="rounded-lg shadow-lg w-full max-w-lg mx-auto" />
          <Caption text="Teachers at the library holding donated books." />
          </div>
        </div>
      </section>

      {/* Kenya's Educational Challenges */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 p-12 rounded-2xl">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-primary text-center mb-8">Overcoming Educational Barriers</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-red-600 text-xl">📚</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-primary">Resource Scarcity</h3>
              <p className="text-gray-600 text-sm">Limited access to textbooks, learning materials, and educational resources in rural schools.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-yellow-600 text-xl">💰</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-primary">Economic Barriers</h3>
              <p className="text-gray-600 text-sm">Families struggle with school fees, uniforms, and essential learning supplies.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl">🎓</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-primary">Curriculum Changes</h3>
              <p className="text-gray-600 text-sm">CBC implementation created new resource needs that many schools cannot meet.</p>
            </div>
          </div>
          <div className="text-center">
            <Image src={readingImage} alt="Educational Transformation" className="rounded-2xl shadow-xl max-w-4xl w-full mx-auto" />
            <Caption text="A classroom turned library at Saint Martins Primary, formerly Kitwii Girls Primary School, in Kangundo." className="mt-4" />
          </div>
        </div>
      </section>

      {/* Vision, Mission, and Values Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Foundation</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-white text-2xl">🔭</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="opacity-90 leading-relaxed">
                To equip rural Kenyan students with 21st-century skills including critical thinking, technology literacy, collaboration, and leadership.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="opacity-90 leading-relaxed">
                To enhance education quality in rural Kenya through books, technology, teacher empowering, and digital learning opportunities.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-white text-2xl">❤️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <div className="space-y-2 text-sm opacity-90">
                <div className="flex items-center justify-center"><span className="w-2 h-2 bg-accent rounded-full mr-2"></span>Respect & Integrity</div>
                <div className="flex items-center justify-center"><span className="w-2 h-2 bg-accent rounded-full mr-2"></span>Accountability</div>
                <div className="flex items-center justify-center"><span className="w-2 h-2 bg-accent rounded-full mr-2"></span>Compassion</div>
                <div className="flex items-center justify-center"><span className="w-2 h-2 bg-accent rounded-full mr-2"></span>Community Focus</div>
              </div>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Our Core Values</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <div><strong>Respect:</strong> We foster a culture of trust and respect for all individuals, regardless of age, gender, ethnicity, or socioeconomic background.</div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <div><strong>Accountability:</strong> We adhere to government regulations and maintain transparency with our donors and stakeholders.</div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <div><strong>Compassion:</strong> We recognize the struggles of rural students and actively seek solutions to address their educational needs.</div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <div><strong>Integrity:</strong> We operate ethically and transparently, prioritizing what is right for students and communities.</div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <div><strong>Community-Oriented:</strong> We collaborate with local communities to ensure students receive the support they need.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
