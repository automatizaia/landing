import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";

export function FormSubmitCo() {
  return (
    <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto px-6 py-12 text-white">
      
      {/* Coluna lateral com informações */}
      <div className="flex flex-col gap-8 md:w-1/3">
        <div className="flex items-center gap-4">
          <Phone className="w-6 h-6 text-blue-400" />
          <span className="text-lg">+55 (11) 98765-4321</span>
        </div>
        <div className="flex items-center gap-4">
          <Mail className="w-6 h-6 text-blue-400" />
          <span className="text-lg">contato@exemplo.com</span>
        </div>
        <div className="flex items-center gap-4">
          <MapPin className="w-6 h-6 text-blue-400" />
          <span className="text-lg">Rua Exemplo, 123 - São Paulo, SP</span>
        </div>
        <div className="flex items-center gap-4">
          <Clock className="w-6 h-6 text-blue-400" />
          <span className="text-lg">Seg a Sex: 8h - 18h</span>
        </div>
      </div>

      {/* Formulário */}
      <form
        action="https://formsubmit.co/ronaldogouveiajr@gmail.com"
        method="POST"
        className="flex flex-col gap-6 md:w-2/3"
      >
        {/* Desativa o CAPTCHA (opcional) */}
        <input type="hidden" name="_captcha" value="false" />
        {/* Redireciona após o envio */}
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
          className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-medium px-6 py-3 rounded-xl flex items-center justify-center space-x-2"
        >
          <Send className="w-5 h-5" />
          <span>Enviar Mensagem</span>
        </button>
      </form>
    </div>
  );
}
