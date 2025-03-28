import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
        >
          <div>
            <div className="flex items-center space-x-3 mb-6">
            
              <span className="text-2xl font-bold">CitySlicka</span>
            </div>
            <p className="text-gray-400">
              Empowering teams with intelligent user management solutions.
            </p>
          </div>

          {['Product', 'Company', 'Resources', 'Legal'].map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section}</h4>
              <ul className="space-y-3">
                {['Features', 'Pricing', 'Documentation', 'Status'].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 CitySlicka. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;