import Link from 'next/link';
export default function CitySensePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/projects"
          className="text-blue-400 hover:underline mb-8 inline-block"
        >
          ← Go back
        </Link>

        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            🌆 CitySense - Índice de Qualidade de Vida Urbana
          </h1>
          <p className="text-lg text-gray-300">
            Aplicação web que analisa e compara a qualidade de vida em
            diferentes cidades.
          </p>
        </header>

        {/* Tecnologias com Badges */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">
            🚀 Tecnologias Utilizadas
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              {
                name: 'React + TypeScript',
                color: 'bg-black text-white border border-gray-600',
              },
              { name: 'Vite', color: 'bg-blue-900 text-blue-200' },
              { name: 'Recharts', color: 'bg-teal-900 text-teal-200' },
              { name: 'Tailwind CSS', color: 'bg-cyan-900 text-cyan-200' },
              { name: 'Luxon', color: 'bg-purple-900 text-purple-200' },
              { name: 'FastAPI', color: 'bg-green-900 text-green-200' },
              { name: 'Scikit-learn', color: 'bg-orange-900 text-orange-200' },
              { name: 'Pydantic', color: 'bg-red-900 text-red-200' },
            ].map(tech => (
              <span
                key={tech.name}
                className={`px-3 py-1.5 text-sm rounded-full font-medium ${tech.color} transition hover:shadow-md hover:scale-105`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </section>

        {/* Funcionalidades */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            ✨ Funcionalidades
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <strong>Análise detalhada do IQV por cidade:</strong> Métricas
              completas sobre clima e tendências climáticas.
            </li>
            <li>
              <strong>Comparação entre cidades:</strong> Visualização
              comparativa de qualidade de vida entre diferentes localidades.
            </li>
            <li>
              <strong>Previsão de IQV com machine learning:</strong> Modelos
              scikit-learn para previsão de qualidade de vida urbana.
            </li>
            <li>
              <strong>Gráficos interativos de comparação:</strong> Visualizações
              dinâmicas com Recharts.
            </li>
            <li>
              <strong>Modo claro/escuro:</strong> Interface adaptável ao modo
              preferencial do usuário.
            </li>
          </ul>
        </section>

        {/* Diferenciais Técnicos */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            🎯 Diferenciais Técnicos
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <strong>API REST escalável:</strong> FastAPI com autenticação JWT
              opcional.
            </li>
            <li>
              <strong>Integração ML completa:</strong> Modelos de machine
              learning para previsões avançadas.
            </li>
            <li>
              <strong>Validação de dados robusta:</strong> Pydantic para schemas
              type-safe.
            </li>
            <li>
              <strong>Deploy automatizado:</strong> Pipelines CI/CD no Render.
            </li>
          </ul>
        </section>

        {/* Resultados Técnicos */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            📊 Resultados Técnicos
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li>Integração completa entre frontend e backend em tempo real.</li>
            <li>Visualização de dados interativa com gráficos responsivos.</li>
            <li>
              Modelos ML com previsões precisas de qualidade de vida urbana.
            </li>
            <li>Interface moderna com suporte a modo claro/escuro.</li>
          </ul>
        </section>

        {/* Botão de acesso ao projeto */}
        <div className="text-center mt-10">
          <p className="text-gray-400 text-sm mb-4">
            Acesse o projeto completo
          </p>
          <Link
            href="https://city-sense.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition transform hover:scale-105"
          >
            🌐 Acessar CitySense
          </Link>
        </div>
      </div>
    </div>
  );
}
