import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';
import content from '../../data/content.json';

const Hero = () => {
  const { hero } = content;

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gray-50">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform origin-top-right hidden lg:block" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              #1 Serwis Komputerowy w Warszawie
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6 text-balance">
              {hero.headline.split(' ').map((word, i) => (
                <span key={i} className={word === 'CoreFix' ? 'text-primary' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
              {hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                {hero.cta.primary}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
              >
                {hero.cta.secondary}
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 flex items-center gap-8"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${i}`} alt="User" />
                </div>
              ))}
            </div>
            <div>
              <div className="flex text-yellow-400 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-sm text-gray-500 font-medium">
                Zaufało nam ponad <span className="text-gray-900">500+ klientów</span>
              </p>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Hero Image / Illustration */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 hidden lg:block"
      >
        <div className="relative">
          <img 
            src="/src/assets/icons/laptop.svg" 
            alt="Laptop Repair" 
            className="w-full max-w-lg drop-shadow-2xl"
          />
          <div className="absolute -top-10 -left-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              ✓
            </div>
            <div>
              <p className="text-xs text-gray-500">Status naprawy</p>
              <p className="text-sm font-bold">Ukończono</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
