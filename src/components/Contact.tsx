"use client";

import { useState } from "react";
import { Send, MapPin, Phone, Clock } from "lucide-react";

export default function ContatoPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("https://formsubmit.co/ronaldogouveiajr@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      form.reset();
      setSubmitted(true);
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 text-white py-10 px-4">
      {/* Cabeçalho */}
      <header className="max-w-5xl mx-auto mb-10 text-center">
        <h1 className="text-4xl font-bold mb-2">Automatiza</h1>
        <p className="text-white/70">Automatizando processos inteligentes para o seu negócio</p>
      </header>

      {/* Informações de contato */}
      <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Entre em contato</h2>
          <p className="text-white/70">
            Se você tem dúvidas ou quer implementar automações inteligentes, fale conosco!
          </p>

          <div className="flex items-start gap-3">
            <MapPin className="mt-1 text-blue-400" />
            <span>
              Av. das Soluções, 123<br />
              São Paulo – SP
            </span>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="mt-1 text-blue-400" />
            <span>
              <a href="tel:+5511999999999" className="hover:underline">
                (11) 99999-9999
              </a>{" "}
              <br />
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                WhatsApp
              </a>
            </span>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="mt-1 text-blue-400" />
            <span>
              Atendimento de segunda a sexta<br />
              das 09h às 18h
            </span>
          </div>
        </div>

        {/* Formulário */}
        <section className="bg-white/5 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-center">Envie sua mensagem</h2>

          {submitted ? (
            <div className="bg-green-600/20 border border-green-500 rounded-xl p-4 text-center text-green-300 font-semibold">
              ✅ Mensagem enviada com sucesso! Entraremos em contato em breve.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <input
                type="hidden"
                name="_autoresponse"
                value="Recebemos sua mensagem! Em breve retornaremos."
              />

              <input
                type="text"
                name="name"
                placeholder="Seu nome"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Seu email"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Seu telefone"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                name="company"
                placeholder="Empresa (opcional)"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                name="message"
                placeholder="Escreva sua mensagem..."
                rows={4}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>

              <button
                type="submit"
                className="w-full inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                Enviar
              </button>
            </form>
          )}
        </section>
      </section>
    </main>
  );
}
