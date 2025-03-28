import { motion } from 'framer-motion';
import BlurText from '../ReactBits/BlurText';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CountUp from 'react-countup';
import InfiniteScroll from '../ReactBits/InfiniteScroll';

// Tech logos with various images
const techLogos = [
  { img: "https://img.freepik.com/premium-vector/business-people-meeting-flat-character-illustration_648489-465.jpg?semt=ais_hybrid", alt: 'Before Enhancement' },
  { img: "https://static.vecteezy.com/system/resources/thumbnails/024/689/019/small_2x/programming-code-coding-or-hacker-background-programming-code-icon-made-with-binary-code-virtual-tunnel-warp-made-with-digital-code-data-flow-illustration-vector.jpg", alt: 'Before Enhancement' },
  { img: "https://www.21kschool.com/us/wp-content/uploads/sites/37/2023/06/Coding-influences-your-students-self-esteem.png", alt: 'Before Enhancement' },
  { img: "https://www.qodo.ai/wp-content/uploads/2024/09/15-Best-AI-Coding-Assistant-Tools-in-2025-1.png", alt: 'Before Enhancement' },
  { img: "https://www.tabnine.com/wp-content/uploads/2024/04/llm_post-1.png", alt: 'Before Enhancement' },
  { img: "https://www.tabnine.com/wp-content/uploads/2024/04/llm_post-1.png", alt: 'Before Enhancement' },
];

// Animation configurations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 120 },
  },
};

const hoverEffect = {
  whileHover: {
    scale: 1.05,
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  },
  whileTap: { scale: 0.95 },
};

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <Header />

      {/* Hero Section with Infinite Scroll */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[80vh] flex items-center">
        {/* Infinite Scroll Background */}
        <div className="absolute inset-0 z-0">
          <InfiniteScroll
            items={techLogos}
            isTilted={true}
            tiltDirection="left"
            autoplay={true}
            autoplaySpeed={0.25}
            autoplayDirection="down"
            pauseOnHover={true}
            className="pointer-events-none"
            renderItem={(item) => (
              <div className="p-8 animate-random">
                <img 
                  src={item.img} 
                  alt={item.alt}
                  className="w-300 h-50 opacity-50 transition-opacity duration-300 rounded-2xl"
                />
              </div>
            )}
          />
          {/* Lighter overlay for styling */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/20 to-purple-50/20" />
        </div>

        {/* Main Hero Content */}
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-6xl font-bold mb-8"
            >
              <BlurText
                text="Next-Gen User Management"
                delay={100}
                animateBy="letters"
                direction="bottom"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-purple-600 mx-auto inline-block"
              />
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-3xl text-gray-600 max-w-3xl mx-auto mb-12"
            >
              Revolutionize your user management with AI-powered insights and real-time collaboration.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex justify-center space-x-6"
            >
              <a href="/login" className="relative overflow-hidden">
                <motion.div
                  {...hoverEffect}
                  className="bg-gradient-to-r from-purple-400 to-indigo-600 px-8 py-4 rounded-xl text-2xl"
                >
                  <span className="font-bold text-white">Get Started</span>
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Image + Text Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            {/* Text Content */}
            <motion.div 
              variants={itemVariants}
              className="order-2 md:order-1"
            >
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                Visualize User Interactions
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our intuitive interface provides real-time visualization of user activities and system health. 
                Monitor key metrics through beautiful, data-rich dashboards that adapt to your needs.
              </p>
              <ul className="space-y-4">
                {['Real-time analytics', 'Customizable widgets', 'Role-based views', 'Historical trend analysis'].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <svg 
                      className="w-6 h-6 text-purple-600 mr-3" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Image Container */}
            <motion.div 
              variants={itemVariants}
              className="order-1 md:order-2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-white/30 bg-white">
                <img 
                  src="https://illustrations.popsy.co/purple/designer.svg"
                  alt="Analytics dashboard"
                  className="w-full h-auto p-4 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50/20 to-indigo-50/20" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-16"
            >
              Powerful Capabilities
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                {
                  title: "Smart User Insights",
                  description: "AI-driven analytics for user behavior patterns",
                  icon: "🧠",
                  color: "bg-purple-100"
                },
                {
                  title: "Secure Ecosystem",
                  description: "Military-grade encryption & role-based access",
                  icon: "🛡️",
                  color: "bg-indigo-100"
                },
                {
                  title: "Real-time Sync",
                  description: "Instant updates across all platforms",
                  icon: "⚡",
                  color: "bg-pink-100"
                },
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  {...hoverEffect}
                  className={`p-8 rounded-2xl ${feature.color} relative overflow-hidden group`}
                >
                  <div className="absolute inset-0 bg-white/50 backdrop-blur-sm group-hover:opacity-0 transition-opacity" />
                  <div className="relative z-10">
                    <motion.div 
                      animate={{ rotate: [0, -10, 10, 0] }}
                      transition={{ repeat: Infinity, duration: 4 }}
                      className="text-5xl mb-6"
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-400 to-indigo-800 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute w-64 h-64 bg-purple-500/30 rounded-full -top-32 -left-32 mix-blend-screen blur-xl" />
          <div className="absolute w-64 h-64 bg-indigo-500/30 rounded-full -bottom-32 -right-32 mix-blend-screen blur-xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {[
              { 
                number: 99.8, 
                label: "Uptime",
                icon: "⏱️",
                description: "Guaranteed reliability",
                progress: 99.8,
                suffix: "%"
              },
              { 
                number: 1, 
                label: "Users",
                icon: "👥",
                description: "Active accounts",
                trend: "12% this month",
                suffix: "+"
              },
              { 
                number: 15, 
                label: "Countries",
                icon: "🌍",
                description: "Global coverage",
                progress: 15,
                suffix: "%"
              },
              { 
                number: 24, 
                label: "Support",
                icon: "🛎️",
                description: "Response time <5m",
                suffix: "+"
              },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all min-h-[220px] flex flex-col"
                whileHover={{ y: -3 }}
              >
                {/* Progress ring */}
                {stat.progress && (
                  <div className="absolute top-6 right-6 w-14 h-14">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="40%"
                        className="fill-none stroke-white/10"
                        strokeWidth="4"
                      />
                      <circle
                        cx="50%"
                        cy="50%"
                        r="40%"
                        className="fill-none stroke-purple-300 stroke-width-4"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - stat.progress/100)}`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-purple-200 text-xs font-semibold">
                      {stat.progress}%
                    </span>
                  </div>
                )}

                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl p-2 bg-white/10 rounded-lg text-purple-200">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-white mb-1">
                        <CountUp
                          end={stat.number}
                          duration={2.5}
                          decimals={stat.suffix === "%" ? 1 : 0}
                          suffix={stat.suffix}
                          className="font-mono"
                        />
                      </div>
                      <div className="text-purple-100 font-medium text-md">
                        {stat.label}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-3 mt-auto">
                    <p className="text-white/80 text-sm">{stat.description}</p>
                    {stat.trend && (
                      <div className="mt-2 flex items-center gap-2 text-green-300">
                        <svg 
                          className="w-4 h-4" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                        <span className="text-xs font-medium">↑{stat.trend}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 shadow-xl"
          >
            <h2 className="text-4xl font-bold text-white mb-8">
              Ready to Transform Your User Management?
            </h2>
            <motion.div {...hoverEffect} className="inline-block">
              <a
                href="/login"
                className="bg-white text-purple-600 px-12 py-4 rounded-xl text-lg font-bold inline-block"
              >
                Start Free Trial
              </a>
            </motion.div>
            <p className="mt-6 text-purple-200">
              14-day free trial • No credit card required
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes randomMove {
          0% { transform: translate(0, 0); }
          25% { transform: translate(10px, -10px); }
          50% { transform: translate(-10px, 10px); }
          75% { transform: translate(5px, 15px); }
          100% { transform: translate(0, 0); }
        }
        .animate-random {
          animation: randomMove 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
