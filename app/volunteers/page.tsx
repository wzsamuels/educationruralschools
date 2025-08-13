"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import volunteerImage from "@/public/volunteers/stephen.jpg";

export default function VolunteerPage () {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-14 bg-background text-text">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-accent py-16 rounded-2xl text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Our Amazing Volunteers</h1>
          <p className="text-xl leading-relaxed opacity-90">
            The devoted volunteer team forms the backbone of KERRS, Inc., dedicating their time, skills, and enthusiasm to further our mission of enhancing educational quality and improving student performance in rural Kenya.
          </p>
        </div>
      </section>



      {/* What Our Volunteers Do */}
      <section className="bg-gray-50 rounded-2xl p-12">
        <h2 className="text-4xl font-bold text-primary text-center mb-8">What Our Volunteers Do</h2>
        <p className="text-lg text-center text-gray-700 mb-12 max-w-4xl mx-auto">
          They assist with a variety of tasks, from collecting and packing educational materials such as books and computers, to purchasing and distributing resources to schools, organizing events, providing administrative support, and directly serving our beneficiaries. We are immensely grateful for their commitment to supporting marginalized schoolchildren in rural areas.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-lg font-bold text-primary mb-3">Collecting & Packing</h3>
            <p className="text-gray-600 text-sm">Educational materials such as books and computers for rural schools</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-lg font-bold text-primary mb-3">Purchasing & Distribution</h3>
            <p className="text-gray-600 text-sm">Resources to schools and organizing delivery logistics</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-lg font-bold text-primary mb-3">Administrative Support</h3>
            <p className="text-gray-600 text-sm">Organizing events and providing operational assistance</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-lg font-bold text-primary mb-3">Direct Service</h3>
            <p className="text-gray-600 text-sm">Working directly with beneficiaries and local communities</p>
          </div>
        </div>
        <p className="text-center text-lg text-primary font-semibold mt-8">
          We extend a warm welcome and heartfelt thanks to our dedicated volunteers for bringing our mission to life.
        </p>
      </section>

      {/* Volunteer Testimonials */}
      <section className="bg-white rounded-2xl shadow-xl p-12 border border-gray-100">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">Volunteer Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
            <div className="text-6xl text-accent mb-4">"</div>
            <p className="text-gray-700 italic mb-6 leading-relaxed">
              Working with KERRS has been one of the most rewarding experiences of my life. Seeing the joy on children's faces when they receive new books is priceless.
            </p>
            <div className="flex flex-col items-center">
              
              <div>
                <p className="font-bold text-primary">Mary Mbula</p>
                <p className="text-sm text-gray-600">Volunteer Coordinator</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8">
            <div className="text-6xl text-accent mb-4">"</div>
            <p className="text-gray-700 italic mb-6 leading-relaxed">
              The dedication of the local teachers and the eagerness of the students to learn motivates me every day. This work truly makes a difference.
            </p>
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <Image
                  src={volunteerImage}
                  alt="Stephen Johnson"
                  className="w-full h-full object-cover"
                  width={128}
                  height={128}
                />
                </div> 
              <div>
                <p className="font-bold text-secondary">Stephen Muasya</p>
                <p className="text-sm text-gray-600">Field Volunteer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16 rounded-2xl text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Join Our Volunteer Family</h2>
          <p className="text-xl leading-relaxed opacity-90 mb-8">
            Ready to make a difference? Whether you can volunteer locally or remotely, there's a place for you in our mission to transform education in rural Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent hover:bg-accent/90 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all duration-300 hover:scale-105">
              Become a Volunteer
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-primary text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}