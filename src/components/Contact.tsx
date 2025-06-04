import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // evita reload da página
    setSubmitted(false);
    setError(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/ronaldogouveiajr@gmail.com',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          },
          body: formData,
        }
      );

      if (response.ok) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        setError(true);
        setTimeout(() => setError(false), 3000);
      }
    } catch (err) {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Toast Sucesso */}
      {submitted && (
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-2"
        >
          <Check className="w-5 h-5" />
          Mensagem enviada com sucesso!
        </motion.div>
      )}

      {/* Toast Erro */}
      {error && (
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-red-600 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-2"
        >
          <X className="w-5 h-5" />
          Erro ao enviar a mensagem. Tente novamente.
        </motion.div>
      )}

      <form
        onSubmit={handleSubmit}
        className="lg:col-span-7 bg-white/5 backdrop-blur-xl rounded-2xl p-8 text-white border border-white/10 flex flex-col gap-6"
      >
        <input type="hidden" name="_captcha" value="false" />
        {/* pode usar _next para redirecionar, mas aqui não precisa pois usamos AJAX */}

        <label>
          Nome
          <input
            type="text"
            name="name"
            required
            className="w-full rounded-md bg-transparent border border-white/20 p-3 mt-2 text-white placeholder:text-white/50"
            placeholder="Seu nome"
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-md bg-transparent border border-white/20 p-3 mt-2 text-white placeholder:text-white/50"
            placeholder="email@exemplo.com"
          />
        </label>

        <label>
          Telefone
          <input
            type="tel"
            name="phone"
            className="w-full rounded-md bg-transparent border border-white/20 p-3 mt-2 text-white placeholder:text-white/50"
            placeholder="(xx) xxxx-xxxx"
          />
        </label>

        <label>
          Empresa
          <input
            type="text"
            name="company"
            className="w-full rounded-md bg-transparent border border-white/20 p-3 mt-2 text-white placeholder:text-white/50"
            placeholder="Nome da empresa"
          />
        </label>

        <label>
          Mensagem
          <textarea
            name="message"
            rows={5}
            className="w-full rounded-md bg-transparent border border-white/20 p-3 mt-2 text-white placeholder:text-white/50 resize-none"
            placeholder="Escreva sua mensagem"
          />
        </label>

        <button
          type="submit"
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};
