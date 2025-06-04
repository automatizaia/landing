"use client";

import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Whatsapp,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [mensagem, setMensagem] = useState("");

  return (
    <section
      id="contact"
      className="relative min-h-[580px] bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/assets/bg-contact.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90" />
      <div className="container relative z-10 mx-auto flex min-h-[580px] flex-col justify-center gap-12 px-6 py-20 text-white md:flex-row md:items-center md:justify-between">
        {/* Informações de contato */}
        <div className="max-w-[400px] space-y-6">
          <h2 className="text-3xl font-bold">Contato</h2>
          <p className="max-w-[300px] text-sm leading-relaxed text-white/80">
            Fale com a gente por qualquer um desses canais.
          </p>
          <div className="space-y-4 text-sm">
            <p className="flex items-center gap-2">
              <Phone size={20} />
              <span>(81) 99999-9999</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail size={20} />
              <span>contato@supermercadoamerica.com</span>
            </p>
            <p className="flex items-center gap-2">
              <Whatsapp size={20} />
              <span>(81) 99999-9999</span>
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={20} />
              <span>Rua das Laranjeiras, 123 - Recife, PE</span>
            </p>
            <p className="flex items-center gap-2">
              <Clock size={20} />
              <span>Seg a Sáb - 7h às 22h</span>
            </p>
          </div>
        </div>

        {/* Formulário */}
        <form
          className="flex w-full max-w-[430px] flex-col gap-4 rounded-md bg-white/10 p-6 backdrop-blur-sm"
          action="https://formsubmit.co/ronaldogouveijr@gmail.com"
          method="POST"
        >
          {/* Input hidden para redirecionar após o envio (opcional) */}
          <input type="hidden" name="_next" value="https://seusite.com/obrigado" />
          {/* Desabilita CAPTCHA */}
          <input type="hidden" name="_captcha" value="false" />

          <input
            required
            type="text"
            name="nome"
            placeholder="Nome completo"
            className="rounded bg-white/20 px-3 py-2 text-white placeholder:text-white/60"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            className="rounded bg-white/20 px-3 py-2 text-white placeholder:text-white/60"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            name="telefone"
            placeholder="Telefone"
            className="rounded bg-white/20 px-3 py-2 text-white placeholder:text-white/60"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
          <input
            type="text"
            name="empresa"
            placeholder="Empresa (opcional)"
            className="rounded bg-white/20 px-3 py-2 text-white placeholder:text-white/60"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
          />
          <textarea
            required
            name="mensagem"
            placeholder="Mensagem"
            className="h-24 resize-none rounded bg-white/20 px-3 py-2 text-white placeholder:text-white/60"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          />

          <button
            type="submit"
            className="mt-3 rounded bg-green-600 px-4 py-2 font-bold text-white transition-colors hover:bg-green-700"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
}
