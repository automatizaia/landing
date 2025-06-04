import { Send } from "lucide-react";

export function FormSubmitCo() {
  return (
    <form
      action="https://formsubmit.co/ronaldogouveiajr@gmail.com"
      method="POST"
      className="space-y-6"
    >
      {/* Desativa o CAPTCHA (opcional) */}
      <input type="hidden" name="_captcha" value="false" />
      {/* Redireciona para uma página de obrigado após o envio */}
      <input type="hidden" name="_next" value="https://sua-url.com/obrigado" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          name="name"
          placeholder="Seu nome"
          required
          className="bg-white/10 text-white px-4 py-3 rounded-xl w-full outline-none placeholder-blue-200"
        />
        <input
          type="email"
          name="email"
          placeholder="Seu email"
          required
          className="bg-white/10 text-white px-4 py-3 rounded-xl w-full outline-none placeholder-blue-200"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Seu telefone"
          required
          className="bg-white/10 text-white px-4 py-3 rounded-xl w-full outline-none placeholder-blue-200"
        />
        <input
          type="text"
          name="company"
          placeholder="Sua empresa"
          className="bg-white/10 text-white px-4 py-3 rounded-xl w-full outline-none placeholder-blue-200"
        />
      </div>

      <textarea
        name="message"
        placeholder="Mensagem"
        rows={5}
        required
        className="bg-white/10 text-white px-4 py-3 rounded-xl w-full outline-none placeholder-blue-200"
      ></textarea>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-medium px-6 py-3 rounded-xl flex items-center space-x-2"
      >
        <Send className="w-5 h-5" />
        <span>Enviar Mensagem</span>
      </button>
    </form>
  );
}

