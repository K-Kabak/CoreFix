import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from '../ui/Container';
import Button from '../ui/Button';
import AnimatedSection from '../ui/AnimatedSection';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form Data:', data);
    toast.success('Wiadomość została wysłana! Skontaktujemy się z Tobą wkrótce.', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <Container>
        <div className="bg-gray-900 rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="p-12 md:p-20 bg-primary text-white">
              <AnimatedSection direction="right">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Masz problem z komputerem?
                </h2>
                <p className="text-primary-50 mb-12 text-lg leading-relaxed">
                  Nie czekaj, aż usterka się pogorszy. Napisz do nas lub zadzwoń - pomożemy Ci szybko i profesjonalnie.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl">
                      📞
                    </div>
                    <div>
                      <p className="text-primary-100 text-sm mb-1">Zadzwoń do nas</p>
                      <p className="text-xl font-bold">+48 22 123 45 67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl">
                      ✉️
                    </div>
                    <div>
                      <p className="text-primary-100 text-sm mb-1">Napisz email</p>
                      <p className="text-xl font-bold">kontakt@corefix.pl</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl">
                      📍
                    </div>
                    <div>
                      <p className="text-primary-100 text-sm mb-1">Odwiedź nas</p>
                      <p className="text-xl font-bold">ul. Marszałkowska 1, Warszawa</p>
                    </div>
                  </div>
                </div>

                <div className="mt-16 pt-16 border-t border-white/10">
                  <p className="text-sm text-primary-100 mb-4">Godziny otwarcia:</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-bold">Poniedziałek - Piątek</p>
                      <p>09:00 - 18:00</p>
                    </div>
                    <div>
                      <p className="font-bold">Sobota</p>
                      <p>10:00 - 14:00</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="p-12 md:p-20 bg-white">
              <AnimatedSection direction="left">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Wyślij wiadomość</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Imię i nazwisko</label>
                      <input
                        {...register("name", { required: "To pole jest wymagane" })}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all`}
                        placeholder="Jan Kowalski"
                      />
                      {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        {...register("email", { 
                          required: "To pole jest wymagane",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Niepoprawny adres email"
                          }
                        })}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all`}
                        placeholder="jan@przyklad.pl"
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Temat</label>
                    <select
                      {...register("subject")}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    >
                      <option value="naprawa">Naprawa laptopa/PC</option>
                      <option value="dane">Odzyskiwanie danych</option>
                      <option value="firma">Obsługa firm</option>
                      <option value="inne">Inne</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Wiadomość</label>
                    <textarea
                      {...register("message", { required: "To pole jest wymagane" })}
                      rows={4}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none`}
                      placeholder="Opisz swój problem..."
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
                  </div>
                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="w-full py-4"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Wysyłanie...' : 'Wyślij zgłoszenie'}
                  </Button>
                </form>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </Container>
      <ToastContainer />
    </section>
  );
};

export default Contact;
