import React, { useState } from 'react';
import { MessageSquare, Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
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
            {/* Informações de Contato */}
            <div className="lg:col-span-5 bg-white/5 backdrop-blur-xl rounded-2xl p-8 text-white border border-white/10">
              {/* ... conteúdo mantido ... */}
            </div>

            {/* Formulário */}
            <div className="lg:col-span-7 bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Fale com a gente</h3>

              <form 
                action="https://formsubmit.co/ronaldogouveiajr@gmail.com"
                method="POST"
                className="space-y-6"
              >
                {/* Desativa o CAPTCHA do FormSubmit */}
                <input type="hidden" name="_captcha" value="false" />

  {/* Redireciona após o envio */}
  <input type="hidden" name="_next" value="https://sua-url.com/obrigado" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 rounded-lg px-4 py-3 w-full"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Seu email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 rounded-lg px-4 py-3 w-full"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Seu telefone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg px-4 py-3 w-full"
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Nome da empresa"
                    value={formState.company}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg px-4 py-3 w-full"
                  />
                </div>

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Sua mensagem"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 rounded-lg px-4 py-3 w-full"
                />

                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
