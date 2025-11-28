import Link from 'next/link';
import React from 'react';

const FraudMonitor: React.FC = () => {
  const technologies = [
    { name: 'Python (Producer)', color: 'bg-blue-900 text-blue-200' },
    { name: 'InfluxDB (Time-Series)', color: 'bg-purple-900 text-purple-200' },
    { name: 'Grafana (Observability)', color: 'bg-orange-800 text-orange-200' },
    { name: 'Docker', color: 'bg-cyan-900 text-cyan-200' },
    { name: 'Docker Compose (IaC)', color: 'bg-gray-700 text-gray-200' },
    { name: 'Flux Lang', color: 'bg-teal-900 text-teal-200' },
    { name: 'Event-Driven', color: 'bg-green-900 text-green-200' },
    { name: 'Faker Library', color: 'bg-yellow-800 text-yellow-200' },
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
            🚨 Real-Time Financial Fraud Monitor
          </h1>
          <p className="text-lg text-gray-300">
            A High-Frequency Trading (HFT) simulation environment detecting
            fraud in sub-second latency using Event-Driven Architecture and
            Time-Series analysis.
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
              <strong>Event-Driven Architecture:</strong> Moves away from
              traditional Batch processing (D+1) to real-time streaming
              ingestion.
            </li>
            <li>
              <strong>Command Center Dashboard:</strong> Custom Grafana panels
              providing immediate observability into financial KPIs and Risk
              Levels.
            </li>
            <li>
              <strong>Infrastructure as Code (IaC):</strong> Fully containerized
              environment using `docker-compose` for reproducible deployments.
            </li>
            <li>
              <strong>High-Throughput Storage:</strong> Utilizes InfluxDB 2.x to
              handle massive write loads typical of financial transaction
              streams.
            </li>
            <li>
              <strong>Synthetic Data Generation:</strong> Python-based Risk
              Engine simulating complex fraud patterns and user behaviors.
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
              <strong>Decoupled Services:</strong> Clear separation between Data
              Production (Python), Storage (InfluxDB), and Visualization
              (Grafana).
            </li>
            <li>
              <strong>Optimized Flux Queries:</strong> leverages `pivot()` and
              `group()` functions to perform efficient aggregation on
              high-cardinality data.
            </li>
            <li>
              <strong>Time-Series First:</strong> Data modeling optimized for
              time-based queries, essential for trend analysis and anomaly
              detection.
            </li>
            <li>
              <strong>Alerting Logic:</strong> Real-time thresholds
              (Green/Yellow/Red) implemented directly in the visualization layer
              for immediate decision making.
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
              Drastically reduced fraud detection latency from{' '}
              <strong>24 hours to sub-second</strong>.
            </li>
            <li>
              Established a centralized <strong>Observability Platform</strong>{' '}
              for monitoring financial risk in real-time.
            </li>
            <li>
              Demonstrated capability to handle high-velocity data streams using
              modern open-source tools.
            </li>
            <li>
              Created a portable, &quot;run-anywhere&quot; solution via Docker
              containers.
            </li>
          </ul>
        </section>

        {/* Project Links */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            📘 Project Links
          </h2>
          <p className="text-gray-300 mb-6">
            Access the GitHub repository and the comprehensive README file
            (featuring the live dashboard demo) which serves as the technical
            documentation.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">
                View technical documentation (README)
              </p>
              <Link
                href="https://github.com/Pissaia92/fraud-monitor/blob/main/README.md"
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
                href="https://github.com/Pissaia92/fraud-monitor"
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

export default FraudMonitor;
