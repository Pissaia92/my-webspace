// app/contact/page.tsx

export default function Contact() {
  return (
    <section className="bg-gray-900 text-gray-100 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Talk to me!</h1>
        <form className="space-y-4">
          <div>
            <label className="block mb-2 text-gray-300">Your name</label>
            <input
              type="text"
              className="w-full bg-gray-800 text-gray-100 p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-300">Email</label>
            <input
              type="email"
              className="w-full bg-gray-800 text-gray-100 p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-300">Message</label>
            <textarea
              className="w-full bg-gray-800 text-gray-100 p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Escreva sua mensagem"
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
}