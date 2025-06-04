import React from 'react';
import { MessageSquare, Phone, Mail, Check, MapPin, Clock, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 to-blue-800/95"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Vamos Começar sua <span className="text-blue-300">Transformação Digital</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Estamos prontos para ajudar seu negócio a alcançar novos patamares com nossa solução de atendimento inteligente.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Contact Information */}
            <div className="lg:col-span-5 bg-white/5 backdrop-blur-xl rounded-2xl p-8 text-white border border-white/10">
              {/* ... (seu conteúdo de contato permanece igual) */}
            </div>

            {/* Formulário modificado para formsubmit.co */}
            <div className="lg:col-span-7 bg-white/5 backdrop-blur-xl rounded-2xl p-8 text-white border border-white/10">
              <form
                action="https://formsubmit.co/ronaldogouveiajr@gmail.com"
                method="POST"
                className="space-y-6"
              >
                {/* Anti-spam honeypot */}
                <input type="hidden" name="_honeypot" style={{ display: 'none' }} />
                {/* Redirecionamento após envio */}
                <input type="hidden" name="_next" value="https://seusite.com/obrigado" />
                {/* Desabilitar captcha, se quiser */}
                <input type="hidden" name="_captcha" value="false" />

                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-white">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-md border border-white/20 bg-transparent px-4 py-2 text-white placeholder:text-white/50 focus:border-blue-400 focus:outline-none"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-md border border-white/20 bg-transparent px-4 py-2 text-white placeholder:text-white/50 focus:border-blue-400 focus:outline-none"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium text-white">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full rounded-md border border-white/20 bg-transparent px-4 py-2 text-white placeholder:text-white/50 focus:border-blue-400 focus:outline-none"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block mb-2 font-medium text-white">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full rounded-md border border-white/20 bg-transparent px-4 py-2 text-white placeholder:text-white/50 focus:border-blue-400 focus:outline-none"
                    placeholder="Nome da empresa"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-medium text-white">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-md border border-white/20 bg-transparent px-4 py-2 text-white placeholder:text-white/50 focus:border-blue-400 focus:outline-none"
                    placeholder="Escreva sua mensagem aqui"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center space-x-2 rounded-md bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
