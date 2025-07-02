export default function DonatePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-14 bg-background text-text">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16 rounded-2xl text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Transform Lives Through Education</h1>
          <p className="text-xl leading-relaxed opacity-90">
            Your donation directly impacts rural Kenyan students by providing essential educational resources and opportunities for a brighter future.
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-white rounded-2xl shadow-xl p-12 border border-gray-100">
        <h2 className="text-4xl font-bold text-primary text-center mb-8">Your Impact</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-white text-2xl">📚</span>
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">$25</h3>
            <p className="text-gray-600">Provides textbooks for one student for a full semester</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-white text-2xl">💻</span>
            </div>
            <h3 className="text-xl font-bold text-secondary mb-2">$100</h3>
            <p className="text-gray-600">Funds digital learning resources for an entire classroom</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-white text-2xl">🏫</span>
            </div>
            <h3 className="text-xl font-bold text-accent mb-2">$500</h3>
            <p className="text-gray-600">Establishes a complete library setup for a rural school</p>
          </div>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed text-center">
          While Kenya has established primary education as a fundamental right, many children from impoverished backgrounds lack access to quality schooling. Your generous contribution enables us to provide essential resources, helping students succeed in their national examinations and enhancing literacy through books and computers.
        </p>
      </section>

      {/* Donation CTA */}
      <section className="bg-gradient-to-r from-accent to-yellow-500 py-16 rounded-2xl text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Make a Difference Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Every donation, no matter the size, creates lasting change in rural Kenya's educational landscape.
          </p>
          <a href="https://givebutter.com/IM1HHL" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-primary hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-xl shadow-xl transition-all duration-300 transform hover:scale-105 min-w-[250px]">
              Donate Now
            </button>
          </a>
          <div className="mt-6 text-sm opacity-75">
            <p>Tax-deductible donations • Secure payment processing</p>
          </div>
        </div>
      </section>
    </div>
  )
}