import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../ui/Container';
import AnimatedSection from '../ui/AnimatedSection';
import content from '../../data/content.json';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-primary' : 'text-gray-900 group-hover:text-primary'}`}>
          {question}
        </span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-gray-400'}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const { faq } = content;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-padding bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <AnimatedSection direction="right">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Często Zadawane Pytania
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Masz pytania dotyczące naszych usług? Zebraliśmy najczęstsze wątpliwości naszych klientów w jednym miejscu.
              </p>
              <div className="p-8 bg-primary/5 rounded-2xl border border-primary/10">
                <h4 className="font-bold text-gray-900 mb-2">Nie znalazłeś odpowiedzi?</h4>
                <p className="text-sm text-gray-600 mb-6">Nasz zespół jest gotowy, aby pomóc Ci w każdej sprawie.</p>
                <button 
                  className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all"
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  Skontaktuj się z nami <span>→</span>
                </button>
              </div>
            </AnimatedSection>
          </div>
          <div className="lg:col-span-7">
            <AnimatedSection direction="left">
              <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
                {faq.map((item, index) => (
                  <FAQItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
