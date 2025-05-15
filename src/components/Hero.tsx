import React from 'react';
import { MessageCircle, Calendar, ShoppingBag, Bot } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="pt-28 pb-20 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-4">
                Atendimento <span className="text-blue-600">Inteligente</span> e <span className="text-green-500">Humanizado</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Transforme o atendimento do seu negócio com agentes de IA que conversam de forma natural via WhatsApp, enviam ofertas e gerenciam agendamentos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors text-center"
                >
                  Começar Agora
                </a>
                <a 
                  href="#features" 
                  className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-200 font-medium px-6 py-3 rounded-lg transition-colors text-center"
                >
                  Saiba Mais
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative animate-fade-in">
            <div className="relative bg-white p-6 rounded-2xl shadow-xl max-w-md mx-auto">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-gray-900">Assistente Automatiza</h3>
                  <p className="text-sm text-gray-500">Online agora</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none max-w-xs">
                  <p className="text-gray-800">Olá! Sou o assistente virtual da Clínica Saúde Total. Como posso ajudar você hoje?</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg rounded-tr-none ml-auto max-w-xs">
                  <p className="text-gray-800">Preciso marcar uma consulta para amanhã à tarde.</p>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none max-w-xs">
                  <p className="text-gray-800">Claro! Temos horários disponíveis às 14h, 15h30 e 17h. Qual seria melhor para você?</p>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none max-w-xs">
                  <div className="flex space-x-2">
                    <button className="bg-white px-3 py-1 rounded border border-gray-200 text-sm hover:bg-green-50 transition-colors">
                      14h
                    </button>
                    <button className="bg-white px-3 py-1 rounded border border-gray-200 text-sm hover:bg-green-50 transition-colors">
                      15h30
                    </button>
                    <button className="bg-white px-3 py-1 rounded border border-gray-200 text-sm hover:bg-green-50 transition-colors">
                      17h
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 h-20 w-20 bg-orange-400 opacity-20 rounded-full"></div>
            <div className="absolute -bottom-8 -left-8 h-16 w-16 bg-green-400 opacity-20 rounded-full"></div>
            <div className="absolute top-1/2 -right-4 h-8 w-8 bg-blue-400 opacity-20 rounded-full"></div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-20 flex flex-wrap justify-center gap-8 md:gap-12">
          <div className="flex items-center">
            <MessageCircle className="h-6 w-6 text-blue-600 mr-2" />
            <span className="text-gray-700">Atendimento 24/7</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-6 w-6 text-green-500 mr-2" />
            <span className="text-gray-700">Agendamentos Automatizados</span>
          </div>
          <div className="flex items-center">
            <ShoppingBag className="h-6 w-6 text-orange-500 mr-2" />
            <span className="text-gray-700">Ofertas Personalizadas</span>
          </div>
        </div>
      </div>
    </section>
  );
};