import React from 'react';
import { Github, Linkedin, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Rony Inside Code</h3>
            <p className="text-gray-400">
              Transforming ideas into exceptional digital experiences through innovative development solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:rony@InsideCode.com" className="flex items-center space-x-2 text-gray-400 hover:text-white">
                <Mail className="h-5 w-5" />
                <span>ronyinsidecode@outlook.com</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-5 w-5" />
                <span>(55) 21 97007-9469</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-5 w-5" />
                <span>Rio de janeiro, Brazil</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white">Projects</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/RonyAgentSpp" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/ronaldo-lima-dos-santos-5013322aa/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://www.facebook.com/ronyinsidecode" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/ronyinsidecode/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Rony Inside Code 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}