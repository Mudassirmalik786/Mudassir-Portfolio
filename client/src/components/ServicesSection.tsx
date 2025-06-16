import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ServicesSection = () => {
  const { isVisible, setElementRef } = useScrollAnimation();

  const services = [
    {
      icon: 'fas fa-robot',
      title: 'Machine Learning & Data Science',
      description: 'Develop predictive models and data analysis solutions using Python. Specialized in price prediction, data visualization, and statistical modeling with libraries like Pandas, NumPy, and Scikit-Learn.',
      features: ['Price Prediction Models', 'Data Visualization (Matplotlib, Seaborn)', 'Feature Engineering', 'Statistical Analysis'],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: 'fas fa-globe',
      title: 'Full-Stack Web Development',
      description: 'Complete web applications using React, Node.js, and Express. From e-commerce platforms to management systems with modern UI/UX and robust backend architecture.',
      features: ['React Frontend Development', 'Node.js & Express Backend', 'Drizzle ORM Database', 'React Query & Hook Form'],
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: 'fas fa-desktop',
      title: 'Desktop Application Development',
      description: 'Enterprise-level desktop applications using C# .NET Framework. University management systems, business applications with SQL Server integration and comprehensive user interfaces.',
      features: ['C# .NET Applications', 'SQL Server Integration', 'Enterprise Solutions', 'Database Management Systems'],
      gradient: 'from-orange-500 to-red-600'
    },
    {
      icon: 'fas fa-spider',
      title: 'Web Scraping & Data Extraction',
      description: 'Advanced Python web scraping solutions for data collection and automation. Extract structured data from websites with efficient algorithms and data processing capabilities.',
      features: ['Python Web Scraping', 'Data Processing & Cleaning', 'Automation Scripts', 'API Data Integration'],
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: 'fas fa-database',
      title: 'Database Design & Management',
      description: 'Comprehensive database solutions using SQL Server, MySQL, and MongoDB. Design efficient schemas, optimize queries, and implement data management systems.',
      features: ['SQL Server & MySQL', 'MongoDB NoSQL', 'Database Schema Design', 'Query Optimization'],
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      icon: 'fas fa-tools',
      title: 'Python Application Development',
      description: 'Custom Python applications with Qt Designer interfaces. Restaurant management systems, data processing tools, and desktop applications with modern GUI frameworks.',
      features: ['Python Qt Applications', 'GUI Development', 'Data Structures & Algorithms', 'System Architecture'],
      gradient: 'from-teal-500 to-green-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50" ref={setElementRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Services I Offer</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional development services to bring your ideas to life with modern technologies and best practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 group hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Icon with gradient background */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${service.icon} text-2xl text-white`}></i>
              </div>

              {/* Service title */}
              <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-gray-800 transition-colors">
                {service.title}
              </h3>

              {/* Service description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Service features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature}
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3 flex-shrink-0`}></div>
                    <span className="text-sm font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-white rounded-2xl p-8 card-shadow max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-dark mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how I can help bring your ideas to life with professional web development services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact"
                className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch
              </a>
              <a 
                href="#projects"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-primary hover:text-primary transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;