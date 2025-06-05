export default function Contato() {
  return (
    <main className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Formulário */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Fale com a gente</h2>
          <form
            action="https://formsubmit.co/SEU_EMAIL_AQUI"
            method="POST"
            className="space-y-4"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://SEUDOMINIO.com/obrigado" />

            <div>
              <label className="block text-gray-700 font-medium">Nome</label>
              <input
                type="text"
                name="nome"
                required
                className="w-full border border-gray-300 rounded-xl p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Telefone</label>
              <input
                type="tel"
                name="telefone"
                required
                className="w-full border border-gray-300 rounded-xl p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Mensagem</label>
              <textarea
                name="mensagem"
                rows="5"
                required
                className="w-full border border-gray-300 rounded-xl p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Enviar mensagem
            </button>
          </form>
        </div>

        {/* Informações da empresa */}
        <div className="bg-blue-50 p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-blue-800 mb-4">Informações de Contato</h3>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>Endereço:</strong><br />
                Rua Exemplo, 123<br />
                Bairro Centro<br />
                Cidade/UF - CEP 12345-678
              </li>
              <li>
                <strong>Telefone:</strong> (00) 0000-0000
              </li>
              <li>
                <strong>WhatsApp:</strong> (00) 90000-0000
              </li>
              <li>
                <strong>Horário de atendimento:</strong><br />
                Segunda a sexta: 08h às 18h<br />
                Sábados: 08h às 12h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
