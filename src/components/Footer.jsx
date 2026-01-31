import React from 'react';
import { Linkedin, Github, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/leticia-castro-jacob-marques/',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/leticiamaca',
      hoverColor: 'hover:bg-gray-700'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/hinaichan/',
      hoverColor: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600'
    }
  ];

  return (
    <footer className="border-t border-[#002b5860]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="{backdrop-blur-sm border border-[#002b5860] p-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#002b58] ${social.hoverColor} group}"
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} <span className="text-gray-400 font-medium"> Letícia de Castro</span>. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;