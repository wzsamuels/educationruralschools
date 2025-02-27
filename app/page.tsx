import Image from "next/image";
import bannerImage from "@/public/banner.jpg"
import readingImage from "@/public/reading.jpg"

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12 bg-background text-text">

      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-primary">Welcome to KERRS</h1>
        <p className="mt-4 text-lg text-secondary">
          Kenya Educational Resources For Rural Schools, Inc. (KERRS) is a non-profit organization dedicated to promoting academic excellence in rural schools.
        </p>
        <div className="mt-6">
          <Image src={bannerImage} alt="Hero" className="mx-auto rounded-lg shadow-lg" />
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
        <Image src={readingImage} alt="Education" className="rounded-lg shadow-lg" />
      </section>

      {/* Kenya's Educational Challenges */}
      <section className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold text-primary">Challenges in Rural Kenya</h2>
        <p className="mt-4 text-text">
          Although Kenya has made significant progress by making primary education free and compulsory, many underprivileged children in rural areas lack access to quality education due to poverty, inequitable school funding, and unstable political climates.
        </p>
        <p className="mt-4 text-text">
          The 2017 implementation of the Competency-Based Curriculum (CBC) further exacerbated these challenges. Parents struggle to afford textbooks, school uniforms, and essential learning materials, leading to high dropout rates and poor academic performance.
        </p>
        <div className="mt-6 flex justify-center">
          {/*<img src="/path-to-challenges-image.jpg" alt="Challenges" className="rounded-lg shadow-lg" />*/}
          <svg className="rounded-lg shadow-lg w-full h-64 bg-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <text x="50" y="50" textAnchor="middle" alignmentBaseline="middle" fontSize="10" fill="#555">Challenges Image</text>
          </svg>
        </div>
      </section>

      {/* KERRS Role Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        {/*<img src="/path-to-support-image.jpg" alt="Support" className="rounded-lg shadow-lg" />*/}
        <svg className="rounded-lg shadow-lg w-full h-64 bg-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <text x="50" y="50" textAnchor="middle" alignmentBaseline="middle" fontSize="10" fill="#555">Support Image</text>
        </svg>
        <div>
          <h2 className="text-3xl font-semibold text-primary">How KERRS Helps</h2>
          <p className="mt-4 text-text">
            KERRS supports rural schools by providing essential resources such as books, laptops, teacher training, and fully equipped libraries. Our goal is to break the cycle of poverty, empower students, and enable them to contribute to their communities and the global economy.
          </p>
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
