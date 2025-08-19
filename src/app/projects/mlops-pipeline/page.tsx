import Link from 'next/link';
import Image from 'next/image';

export default function MLOpsPipelinePage() {
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
            🚀 MLOps Pipeline - Real Estate Price Prediction
          </h1>
          <p className="text-lg text-gray-300">
            End-to-end MLOps project featuring Airflow, dbt, MLflow, FastAPI,
            and Streamlit.
          </p>
        </header>

        {/* Tecnologias com Badges */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">
            🛠️ Technologies
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { name: 'Python', color: 'bg-yellow-900 text-yellow-200' },
              { name: 'Docker', color: 'bg-blue-900 text-blue-200' },
              { name: 'Apache Airflow', color: 'bg-red-900 text-red-200' },
              { name: 'dbt', color: 'bg-purple-900 text-purple-200' },
              { name: 'PostgreSQL', color: 'bg-teal-900 text-teal-200' },
              { name: 'Scikit-learn', color: 'bg-green-900 text-green-200' },
              { name: 'MLflow', color: 'bg-orange-900 text-orange-200' },
              { name: 'FastAPI', color: 'bg-cyan-900 text-cyan-200' },
              { name: 'Streamlit', color: 'bg-pink-900 text-pink-200' },
              { name: 'Evidently AI', color: 'bg-indigo-900 text-indigo-200' },
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

        {/* Arquitetura do Projeto */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            🧱 Project Architecture
          </h2>
          <p className="text-gray-300 mb-4">
            This project demonstrates a complete MLOps pipeline:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>
              <strong>Data Ingestion & Orchestration:</strong> Apache Airflow
              manages the ETL process, loading simulated real estate data.
            </li>
            <li>
              <strong>Data Transformation:</strong> dbt is used for data
              modeling and creating analytical datasets.
            </li>
            <li>
              <strong>Model Training & Tracking:</strong> Scikit-learn trains a
              linear regression model, with MLflow tracking experiments and
              versioning the model.
            </li>
            <li>
              <strong>Model Serving:</strong> A REST API is built with FastAPI
              to serve predictions.
            </li>
            <li>
              <strong>Monitoring:</strong> Evidently AI is used to generate data
              drift reports.
            </li>
            <li>
              <strong>Visualization:</strong> Streamlit provides an interactive
              dashboard.
            </li>
          </ol>
        </section>

        {/* Diferenciais Técnicos */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            ✨ Technical Differentiators
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <strong>Full MLOps Lifecycle:</strong> Covers data pipeline, model
              training, deployment, and monitoring in a single project.
            </li>
            <li>
              <strong>Containerization:</strong> Uses Docker and Docker Compose
              for easy setup and reproducibility.
            </li>
            <li>
              <strong>Industry Tools:</strong> Leverages key tools like Airflow,
              dbt, and MLflow, which are widely used in production environments.
            </li>
            <li>
              <strong>Separation of Concerns:</strong> Clear separation between
              data engineering (dbt), orchestration (Airflow), ML (Scikit-learn,
              MLflow), and serving (FastAPI).
            </li>
          </ul>
        </section>

        {/* Resultados Técnicos */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            🎯 Key Outcomes
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              Successfully built and orchestrated a complex data and ML
              pipeline.
            </li>
            <li>Implemented model versioning and experiment tracking.</li>
            <li>Created a functional API for real-time predictions.</li>
            <li>Developed monitoring capabilities for model performance.</li>
            <li>
              Demonstrated proficiency in a wide range of MLOps technologies.
            </li>
          </ul>
        </section>

        {/* Screenshots */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">
            📸 Screenshots
          </h2>

          <div className="space-y-10">
            {' '}
            {/* Container para os itens */}
            {/* Imagem 1: Arquitetura */}
            <div>
              <h3 className="text-xl font-medium text-gray-200 mb-2">
                Project Architecture
              </h3>
              <div className="rounded-lg overflow-hidden border border-gray-700">
                <Image
                  src="/images/mlops/arquitetura.png"
                  alt="Diagrama da arquitetura do projeto MLOps"
                  width={800}
                  height={400}
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="text-gray-400 text-sm mt-2 text-center">
                Diagram showing the data flow between Airflow, PostgreSQL, dbt,
                Scikit-learn, FastAPI, and Streamlit.
              </p>
            </div>
            {/* Imagem 2: Airflow UI */}
            <div>
              <h3 className="text-xl font-medium text-gray-200 mb-2">
                Apache Airflow UI
              </h3>
              <div className="rounded-lg overflow-hidden border border-gray-700">
                <Image
                  src="/images/mlops/airflow01.png"
                  alt="Interface do usuário do Apache Airflow mostrando o DAG etl_imoveis"
                  width={800}
                  height={400}
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="text-gray-400 text-sm mt-2 text-center">
                Airflow interface displaying the DAG responsible for the ETL
                process.
              </p>
            </div>
            {/* Imagem 3: FastAPI Docs */}
            <div>
              <h3 className="text-xl font-medium text-gray-200 mb-2">
                FastAPI Documentation (Swagger UI)
              </h3>
              <div className="rounded-lg overflow-hidden border border-gray-700">
                <Image
                  src="/images/mlops/airflow02.png"
                  alt="Interface de documentação da API FastAPI (/docs)"
                  width={800}
                  height={400}
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="text-gray-400 text-sm mt-2 text-center">
                Interactive API documentation, showing the{' '}
                <code className="bg-gray-700 px-1 rounded">POST /predict</code>{' '}
                endpoint.
              </p>
            </div>
          </div>
        </section>

        {/* Botão de acesso ao código */}
        <div className="text-center mt-10">
          <p className="text-gray-400 text-sm mb-4">
            View the source code and detailed documentation on GitHub.
          </p>
          <a
            href="https://github.com/Pissaia92/MLOPS" // Substitua pela URL correta
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium transition transform hover:scale-105 border border-gray-600"
          >
            🐙 View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
