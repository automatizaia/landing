import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Dra. Carla Mendes",
      role: "Diretora Clínica Odontológica",
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=256",
      text: "Desde que implementamos o atendente virtual da Automatiza, conseguimos reduzir em 30% o tempo que nossa equipe gastava respondendo a perguntas básicas. Os pacientes adoram a rapidez do agendamento e os lembretes automáticos diminuíram significativamente as faltas."
    },
    {
      name: "João Silva",
      role: "Gerente de Supermercado",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=256",
      text: "O agente da Automatiza revolucionou nossa forma de interagir com os clientes. Agora enviamos ofertas personalizadas e recebemos pedidos diretamente pelo WhatsApp. Nossa taxa de conversão aumentou em 40% desde a implementação."
    },
    {
      name: "Amanda Costa",
      role: "Proprietária de Pet Shop",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=256",
      text: "Os clientes ficam impressionados com a naturalidade das conversas com nosso assistente virtual. Conseguimos automatizar os agendamentos de banho e tosa, além de enviar lembretes de vacinação. A experiência tem sido fantástica!"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que Nossos <span className="text-orange-500">Clientes</span> Dizem
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Empresas de diversos segmentos já transformaram seu atendimento com a Automatiza.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-white p-8 md:p-10 shadow-lg animate-fade-in">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3 flex-shrink-0">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full mx-auto border-4 border-white shadow-md"
                  />
                </div>
                <div className="md:w-2/3">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4 leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonials[currentIndex].name}</h4>
                    <p className="text-sm text-gray-600">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};