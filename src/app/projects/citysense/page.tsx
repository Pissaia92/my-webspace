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
            🌆 CitySense - Urban Quality of Life Index
          </h1>
          <p className="text-lg text-gray-300">
            A web application that analyzes and compares the quality of life in
            different cities.
          </p>
        </header>

        {/* Tecnologias com Badges */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">
            🚀 Technologies Used
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
            ✨ Features
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <strong>Detailed analysis of the UQL by city:</strong>{' '}
              Comprehensive metrics on climate and climate trends.
            </li>
            <li>
              <strong>Comparison between cities:</strong> Comparative
              visualization of quality of life between different locations.
            </li>
            <li>
              <strong>QoF prediction with machine learning:</strong>{' '}
              Scikit-learn models for predicting urban quality of life.
            </li>
            <li>
              <strong>Interactive comparison charts:</strong> Dynamic
              visualizations with Recharts.
            </li>
            <li>
              <strong>Light/Dark mode:</strong> Interface adaptable to user
              preference.
            </li>
          </ul>
        </section>

        {/* Diferenciais Técnicos */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            🎯 Technical Differentials
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <strong>Scalable REST API:</strong> FastAPI with optional JWT
              authentication.
            </li>
            <li>
              <strong>Complete ML Integration:</strong> Machine learning models
              for advanced predictions.
            </li>
            <li>
              <strong>Robust data validation:</strong> Pydantic for type-safe
              schemas.
            </li>
            <li>
              <strong>Automated deployment:</strong> CI/CD pipelines on Render.
            </li>
          </ul>
        </section>

        {/* Resultados Técnicos */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            📊 Technical Results
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              Complete integration between frontend and backend in real-time.
            </li>
            <li>Interactive data visualization with responsive charts.</li>
            <li>
              ML models with accurate predictions of urban quality of life.
            </li>
            <li>Modern interface with support for light/dark mode.</li>
          </ul>
        </section>

        {/* Botão de acesso ao projeto */}
        <div className="text-center mt-10">
          <p className="text-gray-400 text-sm mb-4">Access the project</p>
          <Link
            href="https://city-sense.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition transform hover:scale-105"
          >
            🌐 Access CitySense
          </Link>
        </div>
      </div>
    </div>
  );
}
