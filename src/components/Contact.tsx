import React, { useState } from 'react';
import { Send } from 'lucide-react';

export const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    submitted: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    setFormState((prev) => ({ ...prev, submitted: true }));

    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        submitted: false,
      });
    }, 3000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 text-white border border-white/10 max-w-md mx-auto"
      aria-label="Formulário de contato"
    >
      <h3 className="text-2xl font-semibold mb-6">Contato</h3>

      <label htmlFor="name" className="block mb-2 font-medium">
        Nome
      </label>
      <input
        id="name"
        type="text"
        name="name"
        value={formState.name}
        onChange={handleChange}
        required
        className="w-full mb-4 px-4 py-2 rounded bg-white/20 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Seu nome"
      />

      <label htmlFor="email" className="block mb-2 font-medium">
        Email
      </label>
      <input
        id="email"
        type="email"
        name="email"
        value={formState.email}
        onChange={handleChange}
        required
        className="w-full mb-4 px-4 py-2 rounded bg-white/20 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="seu@email.com"
      />

      <label htmlFor="phone" className="block mb-2 font-medium">
        Telefone
      </label>
      <input
        id="phone"
        type="tel"
        name="phone"
        value={formState.phone}
        onChange={handleChange}
        className="w-full mb-4 px-4 py-2 rounded bg-white/20 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="(XX) XXXXX-XXXX"
      />

      <label htmlFor="company" className="block mb-2 font-medium">
        Empresa
      </label>
      <input
        id="company"
        type="text"
        name="company"
        value={formState.company}
        onChange={handleChange}
        className="w-full mb-4 px-4 py-2 rounded bg-white/20 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Nome da sua empresa"
      />

      <label htmlFor="message" className="block mb-2 font-medium">
        Mensagem
      </label>
      <textarea
        id="message"
        name="message"
        value={formState.message}
        onChange={handleChange}
        rows={4}
        className="w-full mb-6 px-4 py-2 rounded bg-white/20 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Digite sua mensagem"
      />

      <button
        type="submit"
        disabled={formState.submitted}
        className={`flex items-center justify-center w-full py-3 rounded bg-blue-600 hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {formState.submitted ? (
          <span className="flex items-center space-x-2">
            <Check className="w-5 h-5" /> <span>Enviado!</span>
          </span>
        ) : (
          <>
            Enviar <Send className="w-5 h-5 ml-2" />
          </>
        )}
      </button>
    </form>
  );
};
