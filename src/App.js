import React from "react";

export default function App() {
  // 🔹 Skill categories
  const frontend = ["HTML", "CSS", "JavaScript", "React.js", "Responsive Design"];
  const backend = ["Python", "Django", "Node.js", "Streamlit", "REST APIs", "MongoDB", "SQL"];
  const tools = ["Git", "GitHub", "Netlify", "Vercel", "Firebase", "Postman", "VS Code"];

  const renderSkills = (skills) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
      {skills.map((skill) => (
        <div
          key={skill}
          className="cursor-pointer px-4 py-2 rounded-2xl text-center font-medium bg-gray-800 text-gray-300 
          hover:bg-purple-500 hover:text-white transition transform hover:scale-105 shadow-md"
        >
          {skill}
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-gray-100">
     {/* 🔹 Navbar */}
<header className="fixed top-0 w-full flex justify-between items-center px-8 py-4 bg-black/40 backdrop-blur-md z-50">
  <h1 className="text-white font-bold text-2xl">Lakshmi Sravanthi</h1>
  <nav className="space-x-6">
    <a href="#home" className="hover:text-purple-400">Home</a>
    <a href="#about" className="hover:text-purple-400">About</a>
    <a href="#skills" className="hover:text-purple-400">Skills</a>
    <a href="#projects" className="hover:text-purple-400">Projects</a>
    <a href="#education" className="hover:text-purple-400">Education</a>
    <a href="#contact" className="hover:text-purple-400">Contact</a>
  </nav>

  {/* 🔹 GitHub, LeetCode, LinkedIn */}
  <div className="space-x-3">
    <a
      href="https://github.com/Sravanthi908"
      target="_blank"
      rel="noreferrer"
      className="px-4 py-2 border border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition"
    >
      GitHub
    </a>
    <a
      href="https://leetcode.com/u/Sravanthi34/"
      target="_blank"
      rel="noreferrer"
      className="px-4 py-2 border border-yellow-500 text-yellow-400 rounded-lg font-semibold hover:bg-yellow-500 hover:text-white transition"
    >
      LeetCode
    </a>
    <a
      href="https://www.linkedin.com/in/lakshmi-sravanthi-mushini-115aa6294/"
      target="_blank"
      rel="noreferrer"
      className="px-4 py-2 border border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition"
    >
      LinkedIn
    </a>
  </div>
</header>


      {/* 🔹 Hero Section */}
      <section id="home" className="h-screen flex flex-col justify-center items-center text-center">
        <h2 className="text-5xl font-extrabold text-white">Mushini Lakshmi Sravanthi</h2>
        <p className="mt-4 text-lg text-gray-300">
          Final Year CSE (Artificial Intelligence & Machine Learning) Student | Aspiring Full-Stack Developer <br />
          Skilled in building responsive web applications, solving complex algorithms, and exploring emerging AI & ML technologies.
        </p>
        <div className="mt-6 space-x-4">
          <a href="#projects" className="bg-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-400 transition">
            View Projects
          </a>
          <a href="#contact" className="border border-purple-500 text-purple-400 px-6 py-2 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition">
            Contact
          </a>
        </div>
      </section>

      {/* 🔹 About Section */}
      <section id="about" className="py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-purple-400 mb-6">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          Hello! I’m <strong>Mushini Lakshmi Sravanthi</strong>, a passionate and detail-oriented <strong>Final Year B.Tech student</strong> 
          specializing in <strong>Artificial Intelligence & Machine Learning</strong>. I thrive on solving challenging problems, building efficient solutions, 
          and continuously learning new technologies to enhance my skill set. Over the course of my academic journey, I have successfully solved 
          <strong> 100+ coding problems</strong> on platforms like LeetCode and HackerRank, which sharpened my problem-solving and analytical abilities.
          <br /><br />
          I have hands-on experience in developing <strong>full-stack web applications</strong> such as <strong>MediConnect</strong> and <strong>QuickCart</strong>. 
          These projects allowed me to gain practical knowledge in <strong>React, Django REST Framework, MongoDB, Firebase, and CSS</strong>, as well as an understanding 
          of best practices in <strong>UI/UX design, responsive web development, and cloud deployment</strong>. I also actively use tools like <strong>Git, GitHub, Netlify, 
          Vercel, and Postman</strong> to streamline development workflows and ensure project quality.
          <br /><br />
          Beyond technical skills, I am a strong advocate for teamwork, collaboration, and continuous learning. I have participated in coding competitions, hackathons, 
          and workshops, which have helped me develop <strong>leadership, communication, and problem-solving skills</strong>. I am eager to contribute to meaningful projects 
          where I can apply my knowledge in AI, ML, and web development to create impactful applications.
          <br /><br />
          My ultimate goal is to become a <strong>Full-Stack Developer</strong> who delivers scalable, user-friendly, and innovative solutions. 
          I am highly motivated to work on challenging projects, learn from experienced professionals, and grow in a dynamic tech environment.
        </p>
      </section>

      {/* 🔹 Skills Section */}
      <section id="skills" className="py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-purple-400 mb-10 text-center">Skills</h2>
        
        <h3 className="text-2xl font-bold mb-4 text-purple-300 underline bg-black/30 px-3 py-1 rounded-md inline-block">Frontend Skills</h3>
        {renderSkills(frontend)}

        <h3 className="text-2xl font-bold mb-4 text-purple-300 underline bg-black/30 px-3 py-1 rounded-md inline-block">Backend Skills</h3>
        {renderSkills(backend)}

        <h3 className="text-2xl font-bold mb-4 text-purple-300 underline bg-black/30 px-3 py-1 rounded-md inline-block">Development Tools</h3>
        {renderSkills(tools)}
      </section>

      {/* 🔹 Projects Section */}
      <section id="projects" className="py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-purple-400 mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* MediConnect */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-purple-500/40 transition">
            <h3 className="text-2xl font-bold text-purple-400 mb-2">MediConnect</h3>
            <p className="text-gray-300">
              A <strong>full-stack healthcare management platform</strong> where I actively worked on:
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-200">
                <li><strong>User Registration/Login</strong> with secure authentication</li>
                <li><strong>Location-based hospital search</strong> within a 50km radius</li>
                <li><strong>Hospital detail viewing</strong> with department & doctor information</li>
                <li><strong>Appointment booking system</strong> with date and time selection</li>
                <li>Developed using <strong>React, Django REST Framework, and MongoDB</strong></li>
                <li>Responsive UI with <strong>Tailwind CSS</strong> for seamless user experience</li>
              </ul>
            </p>
          </div>

          {/* QuickCart */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-purple-500/40 transition">
            <h3 className="text-2xl font-bold text-purple-400 mb-2">QuickCart</h3>
            <p className="text-gray-300">
              An <strong>e-commerce web app</strong> where I focused on:
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-200">
                <li><strong>Product browsing, filtering, and search functionality</strong></li>
                <li><strong>User authentication</strong> and secure login</li>
                <li>Cart management with <strong>add/remove items</strong></li>
                <li>Deployed live on <strong>Netlify</strong></li>
                <li>Built using <strong>React, Firebase, and CSS</strong></li>
              </ul>
            </p>
            <a
              href="https://quickcartonlineshopping.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="text-purple-400 hover:underline mt-2 block"
            >
              🚀 Visit Project
            </a>
          </div>
        </div>
      </section>

      {/* 🔹 Education Section */}
      <section id="education" className="py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-purple-400 mb-10 text-center">Education</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {/* B.Tech */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-purple-500/40 transition flex items-center space-x-6">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqugbX1bi7VLceyM1W3jpaDKJkcXJuHgSuPg&s" alt="B.Tech Icon" className="w-28 h-28"/>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">B.Tech in CSE-(Artificial Intelligence & Machine Learning)</h3>
              <p className="text-gray-300 mb-1">Bonam Venkata Chalamayya Institute of Technology and Science (BVCITS)</p>
              <p className="text-gray-400">2022 - 2026 <h1>7.25 CGPA</h1></p>
            </div>
          </div>

          {/* Intermediate */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-purple-500/40 transition flex items-center space-x-6">
            <img src="https://content.jdmagicbox.com/v2/comp/amalapuram/w5/9999p8856.8856.230906121138.s5w5/catalogue/sri-chaitanya-college-vanacharla-vari-street-amalapuram-colleges-KFxYMAm2qF.jpg" alt="Intermediate Icon" className="w-28 h-28"/>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Intermediate (MPC)</h3>
              <p className="text-gray-300 mb-1">Sri Chaitanya Junior College, Amalapuram</p>
              <p className="text-gray-400">2020 - 2022<h1>63%</h1> </p>
            </div>
          </div>

          {/* SSC */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-purple-500/40 transition flex items-center space-x-6">
            <img src="https://images.jdmagicbox.com/v2/comp/east-godavari/s3/9999px883.x883.180302113222.s2s3/catalogue/pragnya-school-kothapeta-east-godavari-schools-gzh3uuywrs.jpg" alt="SSC Icon" className="w-28 h-28"/>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">SSC</h3>
              <p className="text-gray-300 mb-1">Pragnya School, Kothapeta</p>
              <p className="text-gray-400">2019 - 2020 <h1>8.6 CGPA</h1></p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-purple-400 mb-10">Contact</h2>
        <p className="text-gray-300 mb-4">
          I’m open to internships and entry-level full-stack developer roles. Let’s connect and collaborate!
        </p>

        {/* Email and Phone */}
        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-400 mb-8">
          📧 lakshmisravanthi02@gmail.com <br />
          📞 +91 7286973114
        </p>

        {/* GitHub and LinkedIn */}
        <div className="max-w-md mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a
            href="https://www.linkedin.com/in/lakshmi-sravanthi-mushini-115aa6294/"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 p-8 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition transform flex flex-col items-center justify-center text-white font-semibold text-lg"
          >
            <svg className="w-12 h-12 mb-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 5.15 3.7 6.44 2 6.44S-.98 5.15-.98 3.5 0 0 2 0s2.98 1.29 2.98 3.5zM.02 8h4v12h-4V8zm7 0h3.6v1.71h.05c.5-.95 1.72-1.96 3.54-1.96 3.78 0 4.48 2.49 4.48 5.73V20h-4v-5.73c0-1.37-.03-3.13-1.91-3.13-1.92 0-2.21 1.5-2.21 3.03V20h-4V8z"/>
            </svg>
            LinkedIn
          </a>

          <a
            href="https://github.com/Sravanthi908"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition transform flex flex-col items-center justify-center text-white font-semibold text-lg"
          >
            <svg className="w-12 h-12 mb-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.123-.303-.535-1.527.117-3.176 0 0 1.008-.322 3.285 1.23C8.065 6.53 9 6 12 6c3 0 3.935.53 3.935.53 2.277-1.552 3.285-1.23 3.285-1.23.652 1.649.24 2.873.117 3.176.77.838 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.815 1.104.815 2.225v3.293c0 .32.215.694.825.576C20.565 21.795 24 17.297 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
      </section>

      {/* 🔹 Footer */}
      <footer className="text-center py-6 bg-black/30">
        © {new Date().getFullYear()} Mushini Lakshmi Sravanthi • Built with React & Tailwind
      </footer>
    </div>
  );
}
