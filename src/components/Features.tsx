import React from 'react';
import { 
  MessageSquare, 
  Calendar, 
  ShoppingBag, 
  Brain, 
  Repeat, 
  BarChart3 
} from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
      title: "Atendimento Humanizado",
      description: "Nossos agentes de IA conversam de forma natural e humanizada, proporcionando uma experiência personalizada para seus clientes."
    },
    {
      icon: <Calendar className="h-8 w-8 text-green-500" />,
      title: "Agendamentos Automáticos",
      description: "Automatize o processo de agendamento, permitindo que clientes marquem horários diretamente pelo WhatsApp."
    },
    {
      icon: <ShoppingBag className="h-8 w-8 text-orange-500" />,
      title: "Ofertas Personalizadas",
      description: "Envie promoções e ofertas direcionadas com base no perfil e histórico de cada cliente."
    },
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "IA Avançada",
      description: "Utilizamos tecnologia de ponta em inteligência artificial para entender contextos e responder de forma relevante."
    },
    {
      icon: <Repeat className="h-8 w-8 text-green-500" />,
      title: "Integração Completa",
      description: "Integre facilmente com seus sistemas existentes para uma operação sem interrupções."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-orange-500" />,
      title: "Análise de Desempenho",
      description: "Acompanhe métricas e resultados para otimizar suas estratégias de atendimento e vendas."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recursos <span className="text-blue-600">Poderosos</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Nossos agentes de IA transformam a maneira como você se comunica com seus clientes, 
            automatizando tarefas e mantendo o toque humano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};