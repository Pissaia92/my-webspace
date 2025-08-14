import Link from 'next/link';
export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">My Projects</h1>
        <p className="text-gray-400 mb-12 text-center">
          Discover some of my work.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Project: TaskFlow */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-white mb-3">
              🧩 TaskFlow
            </h2>
            <p className="text-gray-300 mb-4 text-sm">
              Full stack dashboard with authentication, productivity charts,
              offline tasks, and PDF export.
            </p>
            <Link
              href="/projects/taskflow"
              className="text-blue-400 hover:underline text-sm"
            >
              → See details
            </Link>
          </div>

          {/* Project: Hugging Face */}
          <a
            href="/projects/custom-segmentation"
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-white mb-3">
              🧠 RFM Analysis dashboard
            </h2>
            <p className="text-gray-300 mb-4 text-sm">
              A clean, interactive dashboard built to segment e-commerce
              customers based on purchasing behavior using the RFM model
              (Recency, Frequency, Monetary).
            </p>
            <p className="text-blue-400 text-sm">→ See details</p>
          </a>

          {/* Project: CitySense */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-white mb-3">
              🌆 CitySense
            </h2>
            <p className="text-gray-300 mb-4 text-sm">
              Aplicação full-stack que analisa e prevê qualidade de vida urbana
              usando Machine Learning, com dashboards interativos e comparação
              entre cidades.
            </p>
            <Link
              href="/projects/citysense"
              className="text-blue-400 hover:underline text-sm"
            >
              → Mais detalhes
            </Link>
          </div>
        </div>

        {/* Back button */}
        <div className="text-center mt-10">
          <Link href="/" className="text-gray-400 hover:text-white text-sm">
            ← Back to home page
          </Link>
        </div>
      </div>
    </div>
  );
}
