import Link from 'next/link';
import React from 'react';

const AwsBedrockRag: React.FC = () => {
  const technologies = [
    { name: 'AWS Bedrock (Titan)', color: 'bg-orange-900 text-orange-200' },
    { name: 'LangChain LCEL', color: 'bg-green-900 text-green-200' },
    { name: 'FastAPI (Async)', color: 'bg-teal-900 text-teal-200' },
    { name: 'FAISS (Vector Store)', color: 'bg-blue-900 text-blue-200' },
    { name: 'Python 3.10+', color: 'bg-yellow-900 text-yellow-200' },
    { name: 'AWS SDK (Boto3)', color: 'bg-gray-700 text-gray-200' },
    { name: 'Pydantic v2', color: 'bg-red-900 text-red-200' },
    { name: 'Docker', color: 'bg-blue-800 text-blue-200' },
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
            🧠 AWS Bedrock Enterprise RAG
          </h1>
          <p className="text-lg text-gray-300">
            Reference architecture for enterprise Generative AI, utilizing AWS
            Bedrock (Titan), LangChain, and Vector Search for stable
            Retrieval-Augmented Generation.
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
              <strong>RAG Pattern Implementation:</strong> Retrieval-Augmented
              Generation architecture focusing on stability and control using
              local vector stores.
            </li>
            <li>
              <strong>Unified LLM Engine:</strong> Integration with AWS Bedrock
              using Amazon Titan Text Express for generation.
            </li>
            <li>
              <strong>Vector Embeddings:</strong> High-dimensional vectorization
              using Amazon Titan Embeddings paired with FAISS.
            </li>
            <li>
              <strong>Async API Layer:</strong> High-performance REST API built
              with FastAPI to handle non-blocking inference requests.
            </li>
            <li>
              <strong>Robust Orchestration:</strong> Implemented using LangChain
              LCEL and Pydantic v2 for structured data flows.
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
              <strong>Custom Titan Wrapper Strategy:</strong> Developed a custom
              'TitanLLM' class inheriting from LLM to resolve standard library
              JSON inconsistencies.
            </li>
            <li>
              <strong>Granular Payload Control:</strong> Direct injection of
              'textGenerationConfig' parameters via Boto3 SDK, bypassing default
              abstraction limitations.
            </li>
            <li>
              <strong>Vector ETL Pipeline:</strong> Automated Python scripts for
              seamless data ingestion and indexing into the FAISS vector store.
            </li>
            <li>
              <strong>Environment Security:</strong> Secure configuration
              management via .env files for AWS Credentials (us-east-1).
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
              successfully delivered a stable RAG implementation that mitigates
              AWS Bedrock early-stage integration issues.
            </li>
            <li>
              Established a reusable pattern for Custom LLM Wrappers to ensure
              correct Boto3 payload formatting.
            </li>
            <li>
              Implemented semantic version control (Git) with clear feature and
              fix documentation.
            </li>
            <li>
              Created comprehensive documentation for local replication,
              including Vector ETL and API setup.
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
            details the custom wrapper implementation and setup guide.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">
                View technical documentation (README)
              </p>
              <Link
                href="https://github.com/Pissaia92/AWS-Bedrock-Enterprise-RAG-Template/blob/main/README.md"
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
                href="https://github.com/Pissaia92/AWS-Bedrock-Enterprise-RAG-Template"
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

export default AwsBedrockRag;
