import Image from "next/image";
import philipImage from "@/public/team/phillip.jpg";
import marvaImage from "@/public/team/marva.jpg";
import beritahImage from "@/public/team/beritah.jpg";
import joshuaImage from "@/public/team/joshua.jpg";
import sheliaImage from "@/public/team/shelia.jpg";

const team = [
  {
    name: "Beritah Mutiso",
    role: "Founder & President",
    image: beritahImage,
  },
    {
    name: "Professor Philliph Mutisya",
    role: "Board Chair",
    image: philipImage,
  },
  {
    name: "Joshua Towet",
    role: "Vice President",
    image: joshuaImage,
  },
  {
    name: "Shelia Copeland",
    role: "Secretary",
    image: sheliaImage,
  },
  {
    name: "Marva Hicks-Daugherty",
    role: "Secretary",
    image: marvaImage,
  }
]

export default function TeamPage () {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-14 bg-background text-text">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16 rounded-2xl text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Meet Our Team</h1>
          <p className="text-xl leading-relaxed opacity-90">
            A dedicated team is committed to making a real impact in the lives of underserved school children in rural areas. We collaborate closely with the community to form partnerships and nurture relationships that address educational needs in Kenya’s rural schools. Our volunteer teams on the ground, along with our organizational leadership, share a common vision of improving education quality and enhancing student performance in rural Kenya. We believe that, together, we can create lasting positive change.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="bg-white rounded-2xl shadow-xl p-12 border border-gray-100">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">Leadership Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                  width={128}
                  height={128}
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
              <p className="text-gray-600 font-medium">{member.role}</p>
              <div className="w-12 h-1 bg-accent rounded-full mx-auto mt-4"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-gradient-to-r from-accent to-yellow-500 py-16 rounded-2xl text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">United in Purpose</h2>
          <p className="text-xl leading-relaxed opacity-90">
            Our diverse team brings together expertise in education, community development, and organizational leadership to create lasting impact in rural Kenyan schools.
          </p>
        </div>
      </section>
    </div>
  )
}