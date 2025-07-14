import { useState, useEffect } from 'react'
import './App.css'
import { motion} from 'framer-motion'
import { FaUser, FaGraduationCap, FaProjectDiagram, FaTools, FaEnvelope, FaPython, FaReact, FaNodeJs, FaDatabase, FaGithub, FaInstagram, FaArrowDown } from 'react-icons/fa'
import { SiCplusplus, SiFlask, SiOpenai } from 'react-icons/si'
import profileImg from './assets/profile.jpeg'
import leaf1 from './assets/leaf1.svg'
import leaf2 from './assets/leaf2.svg'
import leaf3 from './assets/leaf3.svg'
import leaf4 from './assets/leaf4.svg'

const leafImages = [leaf1, leaf2, leaf3, leaf4];

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut" as const
      }
    }),
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 }
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FFEAD8 0%, #F8D7C8 50%, #FFEAD8 100%)' }}>
      {/* Animated Background Leaves */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const leaf = leafImages[Math.floor(Math.random() * leafImages.length)];
          const size = 20 + Math.random() * 20;
          const rotate = Math.random() * 360;
          return (
            <motion.img
              key={i}
              src={leaf}
              alt="leaf"
              style={{
                width: size,
                height: size,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                position: 'absolute',
                opacity: 0.7 + Math.random() * 0.3,
                pointerEvents: 'none',
                zIndex: 0,
              }}
              animate={{
                y: [0, -100 - Math.random() * 100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                rotate: [rotate, rotate + 60, rotate - 60, rotate],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 6 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'easeInOut',
              }}
            />
          )
        })}
      </div>

      {/* Mouse Follower */}
      <motion.div
        className="fixed w-6 h-6 rounded-full pointer-events-none z-50"
        style={{
          background: 'radial-gradient(circle, rgba(155, 23, 126, 0.3) 0%, rgba(232, 152, 138, 0.1) 100%)',
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />

      {/* Top Navbar */}
      <motion.nav 
        className="w-full flex justify-center items-center px-8 py-4 fixed top-0 z-40"
        style={{ 
          background: 'rgba(155, 23, 126, 0.97)', 
          borderBottom: '2px solid #E8988A',
          boxShadow: '0 6px 24px 0 rgba(155, 23, 126, 0.10)',
          borderRadius: '0 0 1.5rem 1.5rem',
          left: 0,
          right: 0,
          margin: '0 auto',
          maxWidth: '100vw',
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <ul className="flex gap-8 text-lg font-medium w-full justify-center">
          {[
            { href: "#home", icon: <FaUser />, text: "Home" },
            { href: "#skills", icon: <FaTools />, text: "Skills" },
            { href: "#education", icon: <FaGraduationCap />, text: "Education" },
            { href: "#projects", icon: <FaProjectDiagram />, text: "Projects" },
            { href: "#contact", icon: <FaEnvelope />, text: "Contact" }
          ].map((item, index) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              <a 
                href={item.href} 
                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-pink-200/20 hover:shadow-md relative group"
                style={{ color: '#FFEAD8' }}
              >
                <span className="group-hover:rotate-12 transition-transform duration-300">{item.icon}</span>
                <span>{item.text}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.nav>

      {/* Main Content */}
      <div className="pt-24" style={{ color: '#2A1458' }}>
        {/* Hero Section */}
        <motion.section
          id="home"
          className="relative flex flex-col items-center justify-center py-20 overflow-hidden min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Animated Gradient Background */}
          <motion.div
            className="absolute inset-0 -z-10"
            style={{
              background: 'radial-gradient(circle at 30% 20%, rgba(232, 152, 138, 0.3) 0%, rgba(155, 23, 126, 0.1) 50%, transparent 100%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Profile Image with Enhanced Effects */}
          <motion.div 
            className="relative flex items-center justify-center mb-8"
            style={{ width: '280px', height: '280px' }}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Multiple Animated Rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border-2 border-dashed"
                style={{
                  width: `${280 + (i + 1) * 40}px`,
                  height: `${280 + (i + 1) * 40}px`,
                  borderColor: `rgba(155, 23, 126, ${0.3 - i * 0.1})`,
                }}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20 + i * 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
            
            {/* Glowing Background */}
            <motion.div
              className="absolute w-72 h-72 rounded-full blur-xl"
              style={{ 
                background: 'radial-gradient(circle, rgba(232, 152, 138, 0.6) 0%, rgba(155, 23, 126, 0.3) 50%, transparent 100%)' 
              }}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            
            <motion.img
              src={profileImg}
              alt="Profile"
              className="w-72 h-72 rounded-full border-4 z-10 shadow-2xl"
              style={{ 
                borderColor: '#E8988A',
                background: '#FFEAD8',
                boxShadow: '0 20px 40px rgba(155, 23, 126, 0.3)'
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 30px 60px rgba(155, 23, 126, 0.4)'
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Name with Typing Effect */}
          <motion.h1 
            className="text-6xl md:text-7xl font-extrabold mb-4 drop-shadow-lg"
            style={{ color: '#9B177E' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Jayant Chaudhary
            </span>
          </motion.h1>

          <motion.p 
            className="text-3xl md:text-4xl font-medium mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            style={{ color: '#2A1458' }}
          >
            Software Engineer
          </motion.p>

          <motion.p 
            className="max-w-2xl text-center text-xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            style={{ color: '#9B177E' }}
          >
            I am a passionate web developer  and a software engineer skilled in Python, C++, React, Flask, SQL, Node.js, and Generative AI. 
            I love building innovative, performant web applications and exploring the latest in technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <motion.a 
              href="#contact" 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg shadow-2xl transition-all duration-300 hover:scale-105"
              style={{ 
                background: 'linear-gradient(135deg, #E8988A 0%, #9B177E 100%)',
                color: '#FFEAD8'
              }}
              whileHover={{ 
                boxShadow: '0 20px 40px rgba(155, 23, 126, 0.4)',
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
              <FaArrowDown className="animate-bounce" />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaArrowDown className="text-2xl" style={{ color: '#9B177E' }} />
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="relative py-20 flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          style={{ background: 'linear-gradient(135deg, #FFEAD8 0%, #F8D7C8 100%)' }}
        >
          <motion.h2 
            className="text-5xl font-bold mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ color: '#9B177E' }}
          >
            Skills & Tech Stack
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 w-full max-w-6xl">
            {[
              { icon: <FaPython />, name: "Python" },
              { icon: <SiCplusplus />, name: "C++" },
              { icon: <FaReact />, name: "React" },
              { icon: <SiFlask />, name: "Flask" },
              { icon: <FaDatabase />, name: "SQL" },
              { icon: <FaNodeJs />, name: "Node.js" },
              { icon: <SiOpenai />, name: "Generative AI" }
            ].map((skill, i) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center group"
                custom={i}
                variants={skillVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
              >
                <motion.div
                  className="text-6xl mb-3 p-4 rounded-2xl transition-all duration-300"
                  style={{ 
                    color: '#E8988A',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(232, 152, 138, 0.2)'
                  }}
                  whileHover={{
                    background: 'rgba(232, 152, 138, 0.2)',
                    boxShadow: '0 10px 30px rgba(155, 23, 126, 0.3)'
                  }}
                >
                  {skill.icon}
                </motion.div>
                <span className="text-lg font-semibold" style={{ color: '#2A1458' }}>
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          id="education"
          className="relative py-20 flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          style={{ 
            background: 'linear-gradient(135deg, #E8988A 0%, #9B177E 100%)',
            position: 'relative'
          }}
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute w-96 h-96 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)' }}
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <motion.h2 
            className="text-5xl font-bold mb-12 relative z-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ color: '#FFEAD8' }}
          >
            Education
          </motion.h2>
          
          <motion.div 
            className="flex justify-center w-full max-w-4xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="rounded-2xl p-10 shadow-2xl flex items-center gap-8 hover:scale-105 transition-all duration-500"
              style={{ 
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.1)'
              }}
              whileHover={{
                boxShadow: '0 35px 70px rgba(0, 0, 0, 0.15)',
                y: -10
              }}
            >
              <motion.span 
                className="text-6xl"
                style={{ color: '#9B177E' }}
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <FaGraduationCap />
              </motion.span>
              <div>
                <h3 className="text-3xl font-bold mb-2" style={{ color: '#2A1458' }}>
                  B.Sc. (Hons) Computer Science
                </h3>
                <p className="text-xl" style={{ color: '#9B177E' }}>
                  Dyal Singh College, Delhi University
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="relative py-20 flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          style={{ 
            background: 'linear-gradient(135deg, #FFEAD8 0%, #F8D7C8 100%)',
            position: 'relative'
          }}
        >
          <motion.h2 
            className="text-5xl font-bold mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ color: '#9B177E' }}
          >
            Projects
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
            {[
              {
                title: "Heart Disease Prediction",
                description: "Built a multi-class classifier using Logistic Regression, Naive Bayes, SVM, and ANN on the UCI Cleveland dataset. Evaluated using F1-score, AUC, and confusion matrix.",
                link: "#"
              },
              {
                title: "ER to SQL Queries with AI",
                description: "A tool that converts Entity-Relationship diagrams into optimized SQL queries using artificial intelligence, streamlining database development.",
                link: "#"
              },
              {
                title: "Career Roadmap",
                description: "An interactive platform to help students and professionals plan and visualize their career paths with personalized recommendations.",
                link: "#"
              }
            ].map((project, i) => (
              <motion.div
                key={project.title}
                className="rounded-2xl p-8 shadow-2xl transition-all duration-500 border relative overflow-hidden group"
                style={{ 
                  background: 'rgba(232, 152, 138, 0.95)',
                  borderColor: '#9B177E',
                  backdropFilter: 'blur(10px)'
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 30px 60px rgba(155, 23, 126, 0.3)'
                }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
              >
                {/* Hover Background Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#2A1458' }}>
                    {project.title}
                  </h3>
                  <p className="mb-6 leading-relaxed" style={{ color: '#2A1458' }}>
                    {project.description}
                  </p>
                  <motion.a 
                    href={project.link} 
                    className="inline-flex items-center gap-2 hover:underline font-semibold transition-all duration-300"
                    style={{ color: '#9B177E' }}
                    whileHover={{ x: 5 }}
                  >
                    View Project
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="relative py-20 flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          style={{ 
            background: 'linear-gradient(135deg, #9B177E 0%, #7A1B5A 100%)',
            position: 'relative'
          }}
        >
          {/* Animated Background */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute w-full h-full"
              style={{
                background: 'radial-gradient(circle at 20% 80%, rgba(232, 152, 138, 0.3) 0%, transparent 50%)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <motion.h2 
            className="text-5xl font-bold mb-12 relative z-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ color: '#FFEAD8' }}
          >
            Contact
          </motion.h2>
          
          <motion.div 
            className="flex flex-col items-center gap-6 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.a 
              href="mailto:chaudharyjayant689@gmail.com" 
              className="flex items-center gap-3 text-xl hover:underline group transition-all duration-300"
              style={{ color: '#FFEAD8' }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaEnvelope />
              </motion.div>
              chaudharyjayant689@gmail.com
            </motion.a>
            
            <motion.div 
              className="flex gap-8 text-4xl mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {[
                { icon: <FaGithub />, href: "https://github.com/jayant132004" },
                { icon: <FaInstagram />, href: "https://instagram.com/jayantchaudhary850" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-all duration-300"
                  style={{ color: '#FFEAD8' }}
                  whileHover={{ 
                    y: -5,
                    rotate: 5,
                    scale: 1.2
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  )
}

export default App
