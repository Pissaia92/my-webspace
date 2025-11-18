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
          {/* Project: HR-Flow - NEW */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-white mb-3">
              👥 HR-Flow - HR Request Management System
            </h2>
            <p className="text-gray-300 mb-4 text-sm">
              Enterprise-grade HR platform engineered with [Tech Stack],
              focusing on RBAC security compliance and scalable database design.
            </p>
            <Link
              href="/projects/hr-flow"
              className="text-blue-400 hover:underline text-sm"
            >
              → See details
            </Link>
          </div>

          {/* Project: Inferno MLaaS - NEW */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-white mb-3">
              🤖 Inferno MLaaS - ML as a Service Platform
            </h2>
            <p className="text-gray-300 mb-4 text-sm">
              A production-grade platform for serving ML models via a FastAPI
              API. Features a full CI/CD pipeline with Terraform for automated
              deployments to AWS ECS Fargate.
            </p>
            <Link
              href="/projects/inferno-mlaas"
              className="text-blue-400 hover:underline text-sm"
            >
              → See details
            </Link>
          </div>

          {/* Project: CitySense */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-white mb-3">
              🌆 CitySense
            </h2>
            <p className="text-gray-300 mb-4 text-sm">
              Geospatial Data Aggregation & Prediction System. End-to-end data
              platform that aggregates multi-source urban datasets to feed a
              predictive model. Features an optimized data processing layer for
              real-time comparison metrics and interactive visualization.
            </p>
            <Link
              href="/projects/citysense"
              className="text-blue-400 hover:underline text-sm"
            >
              → See details
            </Link>
          </div>

          {/* Project: Hugging Face / RFM */}
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

          {/* Project: MLOps Pipeline - NEW */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-white mb-3">
              🚀 Distributed Data Pipeline for Property Pricing
            </h2>
            <p className="text-gray-300 mb-4 text-sm">
              End-to-end MLOps project featuring Airflow, dbt, MLflow, FastAPI,
              and Streamlit to predict real estate prices.
            </p>
            <Link
              href="/projects/mlops-pipeline"
              className="text-blue-400 hover:underline text-sm"
            >
              → See details
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
