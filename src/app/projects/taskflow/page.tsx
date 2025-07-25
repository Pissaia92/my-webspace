// src/app/projects/taskflow/page.tsx
import Link from 'next/link';

export default function TaskFlowPage() {
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
            🧩 TaskFlow – Full Stack Productivity System
          </h1>
          <p className="text-lg text-gray-300">
            Secure authentication, real-time collaboration, and productivity
            analytics.
          </p>
        </header>

        {/* Tecnologias com Badges */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">
            🚀 Technologies
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              {
                name: 'Next.js',
                color: 'bg-black text-white border border-gray-600',
              },
              { name: 'Supabase', color: 'bg-green-900 text-green-200' },
              { name: 'Tailwind CSS', color: 'bg-cyan-900 text-cyan-200' },
              { name: 'Socket.IO', color: 'bg-red-900 text-red-200' },
              { name: 'OAuth', color: 'bg-yellow-900 text-yellow-200' },
              { name: 'JWT', color: 'bg-indigo-900 text-indigo-200' },
              { name: 'IndexedDB', color: 'bg-gray-800 text-gray-200' },
              { name: 'Recharts', color: 'bg-teal-900 text-teal-200' },
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

        {/* Diferenciais Técnicos */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            ✨ Technical Differentiators
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <strong>Real-time collaboration:</strong> Simultaneous editing
              with WebSockets.
            </li>
            <li>
              <strong>Offline Support:</strong> Local data saved and synced when
              back online.
            </li>
            <li>
              <strong>Dashboard analytics:</strong> Productivity charts with
              Recharts.
            </li>
            <li>
              <strong>Role-based access:</strong> Admins manage tasks of other
              users.
            </li>
          </ul>
        </section>

        {/* Resultados Técnicos */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            🎯 Technical Results
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li>40% reduction in response time with SWR caching.</li>
            <li>
              60% increase in usability with responsive design and animations.
            </li>
            <li>Secure authentication with JWT and refresh tokens.</li>
          </ul>
        </section>

        {/* Botão de acesso ao projeto */}
        <div className="text-center mt-10">
          <p className="text-gray-400 text-sm mb-4">Login required.</p>
          <Link
            href="/dashboard"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition transform hover:scale-105"
          >
            🔐 TaskFlow Access (Dashboard)
          </Link>
        </div>
      </div>
    </div>
  );
}
