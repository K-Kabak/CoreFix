import React from 'react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Icon from '../ui/Icon';
import AnimatedSection from '../ui/AnimatedSection';
import content from '../../data/content.json';

const About = () => {
  const { about } = content;

  return (
    <section id="about" className="section-padding bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {about.title}
            </h2>
            <p className="text-lg text-gray-600">
              CoreFix to zespół pasjonatów technologii, którzy od lat pomagają przywracać sprawność urządzeniom elektronicznym. Stawiamy na jakość, uczciwość i szybkość działania.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {about.values.map((value, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card className="h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name={value.icon} className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default About;
