import Link from 'next/link';

// Component name
export default function InfernoMlaasPage() {
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
            🤖 Inferno MLaaS - ML as a Service Platform
          </h1>
          <p className="text-lg text-gray-300">
            A production-grade, auto-deploying platform for serving ML models,
            built on AWS with a complete CI/CD pipeline.
          </p>
        </header>

        {/* Technology Badges */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">
            🚀 Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              // Project's stack
              { name: 'Python (FastAPI)', color: 'bg-blue-900 text-blue-200' },
              {
                name: 'Terraform (IaC)',
                color: 'bg-purple-900 text-purple-200',
              },
              {
                name: 'AWS ECS Fargate',
                color: 'bg-orange-800 text-orange-200',
              },
              { name: 'Docker', color: 'bg-cyan-900 text-cyan-200' },
              {
                name: 'GitHub Actions (CI/CD)',
                color: 'bg-gray-700 text-gray-200',
              },
              { name: 'AWS S3', color: 'bg-red-900 text-red-200' },
              { name: 'AWS ECR', color: 'bg-blue-800 text-blue-200' },
              { name: 'Scikit-learn', color: 'bg-yellow-800 text-yellow-200' },
              { name: 'Poetry', color: 'bg-teal-900 text-teal-200' },
              { name: 'Pytest', color: 'bg-green-900 text-green-200' },
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

        {/* Features */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            ✨ Core Features
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <strong>High-performance ML inference API:</strong> Built with
              FastAPI for asynchronous, high-concurrency requests.
            </li>
            <li>
              <strong>Fully Automated CI/CD Pipeline:</strong> `git push` to
              `master` automatically builds, tests, and deploys to production.
            </li>
            <li>
              <strong>Zero-Downtime Deployments:</strong> Uses ECS rolling
              updates (force new deployment) to update the service.
            </li>
            <li>
              <strong>Infrastructure as Code (IaC):</strong> All AWS resources
              (ECS, S3, ALB, IAM Roles) are managed declaratively with
              Terraform.
            </li>
            <li>
              <strong>Serverless & Scalable Containers:</strong> AWS Fargate
              provides serverless compute that scales automatically.
            </li>
            <li>
              <strong>Decoupled Model Artifacts:</strong> The application loads
              the `model.pkl` from S3 on startup, not from the container.
            </li>
          </ul>
        </section>

        {/* Technical Differentials */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            🎯 Key Architectural Highlights
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <strong>GitOps Deployment Strategy:</strong> The `master` branch
              is the single source of truth for the production environment.
            </li>
            <li>
              <strong>Immutable Infrastructure:</strong> New Docker images are
              built for every change; containers are never modified in-place.
            </li>
            <li>
              <strong>Automated API Documentation:</strong> FastAPI
              auto-generates OpenAPI (`/docs`) and ReDoc (`/redoc`) UIs.
            </li>
            <li>
              <strong>Centralized Logging:</strong> All container output is
              streamed directly to AWS CloudWatch for easy debugging.
            </li>
            <li>
              <strong>Reproducible Builds:</strong> Poetry and Docker ensure
              that the local and CI environments are identical.
            </li>
          </ul>
        </section>

        {/* Updated Technical Results */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            📊 Project Outcomes
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li>A fully deployed, live MLaaS platform on a public AWS URL.</li>
            <li>
              A complete CI/CD pipeline that builds and deploys code changes in
              minutes.
            </li>
            <li>
              A scalable, load-balanced API (`/predict`) capable of handling
              production-level traffic.
            </li>
            <li>
              An automated testing suite (`pytest`) integrated into the CI
              pipeline to prevent regressions.
            </li>
            <li>
              Fully version-controlled and reproducible infrastructure using
              Terraform.
            </li>
          </ul>
        </section>

        {/* Updated Links */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            📘 Project Links
          </h2>
          <p className="text-gray-300 mb-6">
            Access the GitHub repository and the comprehensive README file which
            serves as the project's technical documentation.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">
                View technical documentation (README)
              </p>
              <Link
                href="https://github.com/Pissaia92/inferno-mlaas/blob/master/README.md"
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
                href="https://github.com/Pissaia92/inferno-mlaas"
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
