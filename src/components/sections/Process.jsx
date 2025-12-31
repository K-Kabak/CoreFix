import React from 'react';
import Container from '../ui/Container';
import AnimatedSection from '../ui/AnimatedSection';
import content from '../../data/content.json';

const Process = () => {
  const { process } = content;

  return (
    <section className="section-padding bg-white overflow-hidden">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {process.title}
            </h2>
            <p className="text-lg text-gray-600">
              Prosty i przejrzysty proces naprawy. Od pierwszego kontaktu do pełnej sprawności Twojego sprzętu.
            </p>
          </AnimatedSection>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
            {process.steps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-primary flex items-center justify-center text-2xl font-bold text-primary mb-6 shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Process;
