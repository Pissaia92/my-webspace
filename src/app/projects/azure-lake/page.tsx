import Link from 'next/link';
import React from 'react'; // Import React for explicit typing

// Define the component type explicitly
const AzureLakehousePage: React.FC = () => {
  // Define the tech stack as a typed array
  const technologies = [
    {
      name: 'PySpark (Batch/Streaming)',
      color: 'bg-yellow-900 text-yellow-200',
    },
    { name: 'Delta Lake', color: 'bg-cyan-900 text-cyan-200' },
    { name: 'Databricks (Runtime)', color: 'bg-red-900 text-red-200' },
    { name: 'MLflow (MLOps)', color: 'bg-blue-900 text-blue-200' },
    { name: 'dbt (Governance)', color: 'bg-orange-900 text-orange-200' },
    { name: 'Apache Spark', color: 'bg-orange-700 text-orange-200' },
    { name: 'Docker', color: 'bg-blue-800 text-blue-200' },
    { name: 'SQL', color: 'bg-gray-700 text-gray-200' },
    { name: 'Scikit-learn', color: 'bg-teal-900 text-teal-200' },
    { name: 'Azure Stack (Simulated)', color: 'bg-blue-700 text-blue-100' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/projects"
          className="text-blue-400 hover:underline mb-8 inline-block"
        >
          ← Go back
        </Link>

        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            🌊 Unified Lakehouse & MLOps Platform
          </h1>
          <p className="text-lg text-gray-300">
            A high-scale Unified Data Platform simulating the Azure stack,
            integrating Data Engineering (Batch/Streaming) and MLOps with Delta
            Lake.
          </p>
        </header>

        {/* Technology Badges */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">
            🚀 Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map(tech => (
              <span
                key={tech.name}
                className={`px-3 py-1.5 text-sm rounded-full font-medium ${tech.color} transition hover:shadow-md hover:scale-105`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </section>

        {/* Core Features */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            ✨ Core Features
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <strong>Medallion Architecture (ETL):</strong> Implementation of
              Bronze (Raw), Silver (Clean/Deduplicated), and Gold (Aggregated)
              layers using Delta Lake.
            </li>
            <li>
              <strong>Unified Ingestion:</strong> Hybrid pipeline handling both
              Micro-Batch ingestion (simulating Streaming) and standard Batch
              processing.
            </li>
            <li>
              <strong>End-to-End MLOps:</strong> Full integration with MLflow
              for experiment tracking, model registry, and artifact versioning.
            </li>
            <li>
              <strong>Distributed Inference:</strong> Deployment of ML models as
              Spark UDFs (User Defined Functions) to perform predictions at Big
              Data scale.
            </li>
            <li>
              <strong>Data Quality & Governance:</strong> Automated schema
              enforcement and business rule validation (e.g., removing negative
              transactions) in the Silver layer.
            </li>
          </ul>
        </section>

        {/* Key Architectural Highlights */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            🎯 Key Architectural Highlights
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <strong>Shadow Architecture Strategy:</strong> Designed using
              open-source tools (Airflow logic, Spark, Delta) to mirror the
              enterprise Azure Stack (ADF, Databricks, ADLS).
            </li>
            <li>
              <strong>ACID Compliance:</strong> Leveraged Delta Lake transaction
              logs to ensure data integrity and enable Time Travel for
              debugging.
            </li>
            <li>
              <strong>Feature Store Implementation:</strong> The Gold layer
              serves as a centralized source of truth for Customer 360 features
              (LTV, Recency).
            </li>
            <li>
              <strong>Schema Enforcement:</strong> Strict type validation
              between Data Engineering pipelines and ML Models to prevent
              production inference failures.
            </li>
            <li>
              <strong>Cost-Optimized Compute:</strong> Architecture designed for
              Ephemeral Clusters (Job Clusters) rather than always-on resources.
            </li>
          </ul>
        </section>

        {/* Project Outcomes */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            📊 Project Outcomes
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              Built a fully functional end-to-end pipeline from raw ingestion to
              LTV prediction.
            </li>
            <li>
              Demonstrated capability to handle schema drift and deduplication
              in distributed systems.
            </li>
            <li>
              Successfully integrated Data Engineering workflows with Data
              Science requirements.
            </li>
            <li>
              Produced comprehensive documentation and evidence of execution
              (Logs, UI Tracking).
            </li>
          </ul>
        </section>

        {/* Project Links */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            📘 Project Links
          </h2>
          <p className="text-gray-300 mb-6">
            Access the GitHub repository and the comprehensive README file which
            serves as the project&apos;s technical documentation and evidence.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">
                View technical documentation (README)
              </p>
              <Link
                href="https://github.com/Pissaia92/azure-lakehouse-customer-platform/blob/main/README.md"
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
                href="https://github.com/Pissaia92/azure-lakehouse-customer-platform"
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
};

export default AzureLakehousePage;
