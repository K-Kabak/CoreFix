import React from 'react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Icon from '../ui/Icon';
import Button from '../ui/Button';
import AnimatedSection from '../ui/AnimatedSection';
import content from '../../data/content.json';

const Services = () => {
  const { services } = content;

  return (
    <section id="services" className="section-padding bg-gray-50">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <AnimatedSection direction="right">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nasze Usługi
              </h2>
              <p className="text-lg text-gray-600">
                Oferujemy szeroki zakres usług serwisowych dla klientów indywidualnych oraz firm. Każde zlecenie traktujemy priorytetowo.
              </p>
            </AnimatedSection>
          </div>
          <AnimatedSection direction="left">
            <Button variant="outline" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Wszystkie usługi
            </Button>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 0.1}>
              <Card className="group h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon name={service.icon} className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-bold text-primary bg-primary/10 py-1 px-3 rounded-full">
                    {service.price}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-8 flex-grow">
                  {service.description}
                </p>
                <button 
                  className="text-sm font-bold text-gray-900 flex items-center gap-2 group-hover:gap-3 transition-all"
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  Dowiedz się więcej <span>→</span>
                </button>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
