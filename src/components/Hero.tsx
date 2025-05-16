import React from 'react';
import { MessageCircle, Calendar, ShoppingBag, Bot, Check } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="pt-28 pb-20 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left content */}
          <div className="md:w-5/12 mb-10 md:mb-0">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-4">
                Atendimento <span className="text-blue-600">Inteligente</span> e{" "}
                <span className="bg-gradient-to-r from-green-500 via-green-400 to-orange-500 inline-block text-transparent bg-clip-text">
                  Humanizado
                </span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Transforme o atendimento do seu negócio com agentes de IA que conversam de forma natural via WhatsApp, enviam ofertas e gerenciam agendamentos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Começar Agora
                </a>
                <a 
                  href="#features" 
                  className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Saiba Mais
                </a>
              </div>
            </div>
          </div>
          
          {/* Chat Interface */}
          <div className="md:w-6/12 relative animate-fade-in">
            <div className="relative md:translate-x-12 lg:translate-x-24">
              {/* WhatsApp-style chat container */}
              <div className="max-w-sm mx-auto bg-[#F5F1EE] rounded-2xl shadow-2xl overflow-hidden">
                {/* Chat header */}
                <div className="bg-[#075E54] text-white p-4 flex items-center gap-3">
                  <div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center">
                    <Bot className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium">Assistente Virtual</h3>
                    <p className="text-xs opacity-80">online</p>
                  </div>
                </div>

                {/* Chat messages */}
                <div className="p-4 space-y-4 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-opacity-30">
                  {/* Assistant message */}
                  <div className="flex items-start gap-2 max-w-[80%]">
                    <div className="bg-white rounded-lg p-3 shadow-md relative">
                      <div className="absolute left-0 top-0 w-2 h-2 bg-white transform -translate-x-1/2 rotate-45"></div>
                      <p className="text-sm text-gray-800">Olá! Como posso ajudar você hoje?</p>
                      <div className="flex items-center justify-end gap-1 mt-1">
                        <span className="text-[10px] text-gray-400">10:30</span>
                        <Check className="w-3 h-3 text-[#34B7F1]" />
                        <Check className="w-3 h-3 text-[#34B7F1] -ml-2" />
                      </div>
                    </div>
                  </div>

                  {/* User message */}
                  <div className="flex items-start justify-end gap-2">
                    <div className="bg-[#DCF8C6] rounded-lg p-3 shadow-md relative max-w-[80%]">
                      <div className="absolute right-0 top-0 w-2 h-2 bg-[#DCF8C6] transform translate-x-1/2 rotate-45"></div>
                      <p className="text-sm text-gray-800">Preciso marcar uma consulta.</p>
                      <div className="flex items-center justify-end gap-1 mt-1">
                        <span className="text-[10px] text-gray-400">10:31</span>
                        <Check className="w-3 h-3 text-[#34B7F1]" />
                        <Check className="w-3 h-3 text-[#34B7F1] -ml-2" />
                      </div>
                    </div>
                  </div>

                  {/* Assistant response with options */}
                  <div className="flex items-start gap-2 max-w-[80%]">
                    <div className="bg-white rounded-lg p-3 shadow-md relative">
                      <div className="absolute left-0 top-0 w-2 h-2 bg-white transform -translate-x-1/2 rotate-45"></div>
                      <p className="text-sm text-gray-800">Claro! Temos os seguintes horários disponíveis:</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <button className="bg-[#25D366] hover:bg-[#1ea952] text-white px-4 py-1.5 rounded-full text-xs transition-colors shadow-sm">
                          14h
                        </button>
                        <button className="bg-[#25D366] hover:bg-[#1ea952] text-white px-4 py-1.5 rounded-full text-xs transition-colors shadow-sm">
                          15h30
                        </button>
                        <button className="bg-[#25D366] hover:bg-[#1ea952] text-white px-4 py-1.5 rounded-full text-xs transition-colors shadow-sm">
                          17h
                        </button>
                      </div>
                      <div className="flex items-center justify-end gap-1 mt-2">
                        <span className="text-[10px] text-gray-400">10:32</span>
                        <Check className="w-3 h-3 text-[#34B7F1]" />
                        <Check className="w-3 h-3 text-[#34B7F1] -ml-2" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat input */}
                <div className="bg-[#F0F2F5] p-4">
                  <div className="bg-white rounded-full px-4 py-2.5 text-sm text-gray-400 shadow-sm">
                    Digite uma mensagem...
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 h-32 w-32 bg-orange-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 h-24 w-24 bg-green-400/20 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 -right-4 h-16 w-16 bg-blue-400/20 rounded-full blur-2xl"></div>
            </div>
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