import React from 'react';
import { Home, Briefcase, Code, User, Mail } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-16 h-screen w-64 bg-gray-900 text-white hidden md:block">
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <a href="#home" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#projects" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800">
              <Briefcase className="h-5 w-5" />
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a href="#services" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800">
              <Code className="h-5 w-5" />
              <span>Services</span>
            </a>
          </li>
          <li>
            <a href="#about" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800">
              <User className="h-5 w-5" />
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#contact" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800">
              <Mail className="h-5 w-5" />
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}