import React from 'react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Button from '../ui/Button';
import AnimatedSection from '../ui/AnimatedSection';
import content from '../../data/content.json';

const Pricing = () => {
  const { pricing } = content;

  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {pricing.title}
            </h2>
            <p className="text-lg text-gray-600">
              Wybierz pakiet dopasowany do Twoich potrzeb. Przejrzyste ceny, brak ukrytych kosztów.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricing.packages.map((pkg, index) => (
            <AnimatedSection key={index} delay={index * 0.1} direction={index === 1 ? 'up' : 'up'}>
              <Card 
                className={`h-full flex flex-col relative ${
                  pkg.featured ? 'border-primary ring-2 ring-primary ring-opacity-50 scale-105 z-10' : ''
                }`}
              >
                {pkg.featured && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold py-1 px-4 rounded-full uppercase tracking-wider">
                    Polecany
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-500 text-sm">{pkg.description}</p>
                </div>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="text-primary font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={pkg.featured ? 'primary' : 'outline'} 
                  className="w-full"
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  Wybierz pakiet
                </Button>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
