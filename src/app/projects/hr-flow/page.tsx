import Link from 'next/link';

export default function HRFlowPage() {
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
            👥 HR-Flow - HR Request Management System
          </h1>
          <p className="text-lg text-gray-300">
            A full-stack web application for managing and tracking HR requests
            with role-based access and real-time analytics.
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
                name: 'Next.js 14',
                color: 'bg-black text-white border border-gray-600',
              },
              { name: 'TypeScript', color: 'bg-blue-900 text-blue-200' },
              { name: 'Tailwind CSS', color: 'bg-cyan-900 text-cyan-200' },
              { name: 'Recharts', color: 'bg-teal-900 text-teal-200' },
              {
                name: 'Node.js + Express',
                color: 'bg-green-900 text-green-200',
              },
              {
                name: 'JWT Authentication',
                color: 'bg-purple-900 text-purple-200',
              },
              {
                name: 'Supabase (PostgreSQL)',
                color: 'bg-indigo-900 text-indigo-200',
              },
              { name: 'Nodemailer', color: 'bg-red-900 text-red-200' },
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
              <strong>Secure user registration and login:</strong> JWT-based
              authentication with role-based access control.
            </li>
            <li>
              <strong>Role-based access for HR and employees:</strong> Different
              permissions and views based on user roles.
            </li>
            <li>
              <strong>Real-time KPI dashboard:</strong> Interactive analytics
              with Recharts for data visualization.
            </li>
            <li>
              <strong>Request filtering and prioritization:</strong> Advanced
              filtering options and priority status tracking.
            </li>
            <li>
              <strong>Email alerts for urgent demands:</strong> Automated
              notifications using Nodemailer.
            </li>
            <li>
              <strong>Responsive design with dark mode:</strong> Interface
              adaptable to different devices and user preferences.
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
              <strong>Scalable REST API:</strong> Express.js with JWT
              authentication and secure endpoints.
            </li>
            <li>
              <strong>Comprehensive API documentation:</strong> Swagger UI for
              easy API exploration.
            </li>
            <li>
              <strong>Robust database architecture:</strong> PostgreSQL with
              Supabase for reliable data storage.
            </li>
            <li>
              <strong>Automated email system:</strong> Integrated Nodemailer for
              notifications and alerts.
            </li>
            <li>
              <strong>Environment-based configuration:</strong> Secure
              management of sensitive data.
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
              Complete full-stack integration with secure authentication flow.
            </li>
            <li>Responsive dashboard with real-time data visualization.</li>
            <li>Efficient role-based access control system.</li>
            <li>Automated email notification system for urgent requests.</li>
            <li>Comprehensive testing suite with CI/CD integration.</li>
          </ul>
        </section>

        {/* Documentação Técnica e Acesso ao Projeto */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            📘 Technical Documentation
          </h2>
          <p className="text-gray-300 mb-6">
            Access the complete technical documentation with detailed
            architecture, API specifications, and implementation guides.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">
                View technical documentation
              </p>
              <Link
                href="https://rb.gy/gal6sx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition transform hover:scale-105"
              >
                📖 View Documentation
              </Link>
            </div>

            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">
                Access the project repository
              </p>
              <Link
                href="https://github.com/Pissaia92/hr-flow"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition transform hover:scale-105"
              >
                🌐 Access Repository
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
