import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Sidebar />
      
      <main className="md:ml-64 pt-16">
        <section id="home" className="relative">
          <Carousel />
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Rony Inside Code</h1>
              <p className="text-xl md:text-2xl">Transforming Ideas into Digital Reality</p>
            </div>
          </div>
        </section>

        <section id="projects" className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Project cards will go here */}
            </div>
          </div>
        </section>

        <section id="services" className="bg-white py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service cards will go here */}
            </div>
          </div>
        </section>

        <section id="about" className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">About Us</h2>
            {/* About content will go here */}
          </div>
        </section>

        <section id="contact" className="bg-white py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            {/* Contact form will go here */}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

export default App;