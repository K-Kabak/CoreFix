import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Container from '../ui/Container';
import Card from '../ui/Card';
import AnimatedSection from '../ui/AnimatedSection';
import content from '../../data/content.json';

const Testimonials = () => {
  const { testimonials } = content;

  return (
    <section className="section-padding bg-gray-50 overflow-hidden">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Opinie Naszych Klientów
            </h2>
            <p className="text-lg text-gray-600">
              Zaufanie to podstawa naszej pracy. Zobacz, co mówią o nas osoby, które powierzyły nam swój sprzęt.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <Card className="h-full flex flex-col p-8">
                  <div className="flex text-yellow-400 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-8 flex-grow leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-xs text-gray-500">Klient zweryfikowany</p>
                    </div>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default Testimonials;
