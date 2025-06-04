import React, { useState } from 'react';
import { MessageSquare, Phone, Mail, Check, MapPin, Clock, Send } from 'lucide-react';

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
            {/* Contato */}
            <div className="lg:col-span-5 bg-white/5 backdrop-blur-xl rounded-2xl p-8 text-white border border-white/10">
              <h3 className="text-2xl font-semibold mb-8">Informações de Contato</h3>
              <div className="space-y-8">
                {/* Telefone */}
                <div className="flex items-start space-x-4 group">
                  <div className="bg-blue-500/20 p-3 rounded-xl group-hover:bg-blue-500/30 transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Telefone</h4>
                    <p className="text-blue-200">(11) 9999-9999</p>
                    <p className="text-blue-200">(11) 9999-9998</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 group">
                  <div className="bg-blue-500/20 p-3 rounded-xl group-hover:bg-blue-500/30 transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Email</h4>
                    <p className="text-blue-200">contato@automatiza.ai</p>
                    <p className="text-blue-200">suporte@automatiza.ai</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-4 group">
                  <div className="bg-blue-500/20 p-3 rounded-xl group-hover:bg-blue-500/30 transition-colors">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">WhatsApp</h4>
                    <p className="text-blue-200">(11) 9999-9999</p>
                    <p className="text-blue-200">Atendimento 24/7</p>
                  </div>
                </div>

                {/* Endereço */}
                <div className="flex items-start space-x-4 group">
                  <div className="bg-blue-500/20 p-3 rounded-xl group-hover:bg-blue-500/30 transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Endereço</h4>
                    <p className="text-blue-200">Av. Paulista, 1000</p>
                    <p className="text-blue-200">São Paulo - SP</p>
                  </div>
                </div>

                {/* Horário */}
                <div className="flex items-start space-x-4 group">
                  <div className="bg-blue-500/20 p-3 rounded-xl group-hover:bg-blue-500/30 transition-colors">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Horário</h4>
                    <p className="text-blue-200">Segunda a Sexta</p>
                    <p className="text-blue-200">9h às 18h</p>
                  </div>
                </div>
              </div>

              {/* Redes sociais */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <h4 className="font-medium text-lg mb-4">Redes Sociais</h4>
                <div className="flex space-x-4">
                  {/* Facebook, Twitter, Instagram - apenas exemplo */}
                  <a href="#" className="bg-blue-500/20 p-3 rounded-xl hover:bg-blue-500/30 transition-all duration-300 hover:scale-110">
                    {/* Ícone Facebook */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477...Z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="bg-blue-500/20 p-3 rounded-xl hover:bg-blue-500/30 transition-all duration-300 hover:scale-110">
                    {/* Ícone Twitter */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253..." />
                    </svg>
                  </a>
                  <a href="#" className="bg-blue-500/20 p-3 rounded-xl hover:bg-blue-500/30 transition-all duration-300 hover:scale-110">
                    {/* Ícone Instagram */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013..." clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Formulário de contato */}
            <div className="lg:col-span-7 bg-white/10 backdrop-blur-xl rounded-2xl p-8 text-white border border-white/10">
              <h3 className="text-2xl font-semibold mb-8">Entre em Contato</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    value={formState.name}
                    onChange={handleChange}
                    className="bg-white/5 border border-white/10 rounded-xl p-3 w-full placeholder-white focus:outline-none"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formState.email}
                    onChange={handleChange}
                    className="bg-white/5 border border-white/10 rounded-xl p-3 w-full placeholder-white focus:outline-none"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Telefone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="bg-white/5 border border-white/10 rounded-xl p-3 w-full placeholder-white focus:outline-none"
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Empresa"
                    value={formState.company}
                    onChange={handleChange}
                    className="bg-white/5 border border-white/10 rounded-xl p-3 w-full placeholder-white focus:outline-none"
                  />
                </div>

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Sua mensagem"
                  value={formState.message}
                  onChange={handleChange}
                  className="bg-white/5 border border-white/10 rounded-xl p-3 w-full placeholder-white focus:outline-none"
                  required
                />

                <button
                  type="submit"
                  className={`flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    formState.submitted ? 'bg-green-600 hover:bg-green-700' : ''
                  }`}
                  disabled={formState.submitted}
                >
                  {formState.submitted ? (
                    <>
                      <Check className="w-5 h-5" />
                      Mensagem enviada com sucesso!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
