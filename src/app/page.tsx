
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-white text-gray-900 font-sans">

      <main className="flex-grow max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-center text-green-700 tracking-wide">
          Welcome to Our MERN Stack Development Training
        </h2>

        <section className="mb-14 max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Master the complete MERN Stack: MongoDB, Express.js, React.js, and Node.js with our comprehensive training program.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-10 rounded-full shadow-lg transition duration-300">
            Enroll Now
          </button>
        </section>

        <section className="grid gap-12 sm:grid-cols-2 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-200 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-green-600 mb-6 border-b border-green-200 pb-2">
              Course Highlights
            </h3>
            <ul className="space-y-4 text-gray-700 text-base">
              {[
                { icon: "fas fa-database", text: "MongoDB Database Management" },
                { icon: "fab fa-node-js", text: "Express.js Backend Development" },
                { icon: "fab fa-react", text: "React.js Frontend Development" },
                { icon: "fab fa-node", text: "Node.js Server-Side Programming" },
                { icon: "fas fa-laptop-code", text: "Real-world Project Development" },
              ].map(({ icon, text }, i) => (
                <li key={i} className="flex items-center gap-3">
                  <i className={`${icon} text-green-600 text-xl`} />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-200 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-green-600 mb-6 border-b border-green-200 pb-2">
  What You&apos;ll Learn
</h3>
            <ul className="list-disc list-inside text-gray-700 text-base space-y-3">
              <li>Full-Stack JavaScript Development</li>
              <li>RESTful API Development</li>
              <li>Database Design & Integration</li>
              <li>Authentication & Authorization</li>
              <li>Deployment & DevOps Basics</li>
            </ul>
          </div>
        </section>

        <section className="max-w-4xl mx-auto bg-green-50 p-10 rounded-3xl shadow-lg border border-green-200 text-gray-700">
          <h3 className="text-3xl font-bold text-green-700 mb-8 text-center tracking-wide">
            Training Benefits
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            <div>
              <h4 className="font-semibold text-lg mb-3">Hands-on Experience</h4>
              <p>Build real-world applications from scratch</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3">Industry Expert Mentors</h4>
              <p>Learn from experienced MERN developers</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3">Job Ready Skills</h4>
              <p>Get prepared for full-stack developer roles</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
