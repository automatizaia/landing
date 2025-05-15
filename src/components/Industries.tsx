import React from 'react';
import { Stethoscope, Sheet as Teeth, Sparkles, ShoppingCart, Dog, Dumbbell, Store } from 'lucide-react';

export const Industries = () => {
  const industries = [
    {
      icon: <Stethoscope className="h-8 w-8 text-blue-600" />,
      title: "Clínicas Médicas",
      description: "Automatize agendamentos, lembretes de consultas e forneça informações sobre procedimentos médicos.",
      image: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg"
    },
    {
      icon: <Teeth className="h-8 w-8 text-blue-600" />,
      title: "Clínicas Odontológicas",
      description: "Gerencie consultas, envie lembretes pré e pós-tratamento e tire dúvidas dos pacientes.",
      image: "https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg"
    },
    {
      icon: <Sparkles className="h-8 w-8 text-green-500" />,
      title: "Clínicas de Estética",
      description: "Promova tratamentos, gerencie agendamentos e mantenha relacionamento contínuo com clientes.",
      image: "https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg"
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-orange-500" />,
      title: "Supermercados",
      description: "Envie ofertas personalizadas, receba pedidos e forneça informações sobre produtos e disponibilidade.",
      image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg"
    },
    {
      icon: <Dog className="h-8 w-8 text-green-500" />,
      title: "Pet Shops",
      description: "Agende serviços de banho e tosa, envie lembretes de vacinação e ofereça produtos específicos.",
      image: "https://images.pexels.com/photos/6568943/pexels-photo-6568943.jpeg"
    },
    {
      icon: <Dumbbell className="h-8 w-8 text-orange-500" />,
      title: "Academias",
      description: "Gerencie matrículas, envie dicas de treino e promova aulas e atividades especiais.",
      image: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg"
    },
    {
      icon: <Store className="h-8 w-8 text-blue-600" />,
      title: "Comércio em Geral",
      description: "Atenda clientes, responda dúvidas sobre produtos e processe pedidos de forma automatizada.",
      image: "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg"
    }
  ];

  return (
    <section id="industries" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Segmentos que <span className="text-green-500">Atendemos</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Nossa solução se adapta às necessidades específicas de diferentes tipos de negócio, 
            proporcionando atendimento personalizado para cada segmento.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={industry.image} 
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {industry.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-2">
                    {industry.title}
                  </h3>
                </div>
                <p className="text-gray-700">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};