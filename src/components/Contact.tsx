import React, { useState } from 'react';
import { MessageSquare, Phone, Mail, Check, MapPin, Clock, ArrowRight } from 'lucide-react';

export const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    submitted: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    setFormState(prev => ({ ...prev, submitted: true }));
    
    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        submitted: false
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Telefone",
      lines: ["(11) 9999-9999", "(11) 9999-9998"]
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      lines: ["contato@automatiza.ai", "suporte@automatiza.ai"]
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "WhatsApp",
      lines: ["(11) 9999-9999", "24/7"]
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Endereço",
      lines: ["Av. Paulista, 1000", "SP"]
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Horário",
      lines: ["Seg a Sex", "9h-18h"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50/50 via-white to-blue-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pronto para <span className="text-blue-600">Transformar</span> seu Atendimento?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Entre em contato conosco para uma demonstração gratuita de como nossos agentes de IA podem revolucionar seu negócio.
            </p>
          </div>
          
          <div className="grid gap-8">
            {/* Contact Information Cards */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="bg-white/80 backdrop-blur-lg rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-lg text-white group-hover:scale-110 transition-transform mb-3">
                      {info.icon}
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">{info.title}</h3>
                    {info.lines.map((line, i) => (
                      <p key={i} className="text-xs text-gray-700">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
              {formState.submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="bg-green-100 rounded-full p-4 mb-6">
                    <Check className="h-12 w-12 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Mensagem Enviada!</h3>
                  <p className="text-gray-700 text-lg">
                    Agradecemos seu contato. Nossa equipe entrará em contato em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie sua Mensagem</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Digite seu nome"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="seu@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Nome da empresa"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Como podemos ajudar?"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center group shadow-lg hover:shadow-xl"
                  >
                    <span>Enviar Mensagem</span>
                    <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};