// src/app/projects/custom-segmentation/page.tsx
import Link from 'next/link';

export default function CustomSegmentationPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Back */}
        <Link
          href="/projects"
          className="text-blue-400 hover:underline mb-8 inline-block"
        >
          ← Back to Projects
        </Link>

        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            🧠 RFM Analysis
          </h1>
          <p className="text-lg text-gray-300">
            A deep learning customer segmentation application, trained with
            PyTorch.
          </p>
        </header>

        {/* Description */}
        <section className="mb-10">
          <p className="text-gray-300 leading-relaxed">
            This dashboard presents a complete customer segmentation analysis
            using the RFM model (Recency, Frequency, Monetary) to identify
            high-value customers, detect churn risks, and support data-driven
            marketing strategies. Developed with <strong>PyTorch</strong> and
            hosted on
            <strong> Hugging Face Spaces</strong>, it allows interactive testing
            without installation.
          </p>
        </section>

        {/* Features */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            ✨ Features
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <strong>Accurate segmentation:</strong> Separates background
              objects with detailed masks
            </li>
            <li>
              <strong>Interactive interface:</strong> Upload images and view
              results in real time
            </li>
            <li>
              <strong>Customized model:</strong> Trained on a specific dataset
            </li>
            <li>
              <strong>Free hosting:</strong> Available 24/7 on Hugging Face
            </li>
          </ul>
        </section>

        {/* Technologies */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            🛠️ Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              'PyTorch',
              'Hugging Face',
              'Streamlit',
              'Python',
              'Deep Learning',
            ].map(tech => (
              <span
                key={tech}
                className="bg-indigo-900 text-indigo-200 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Access Button */}
        <div className="text-center mt-10">
          <a
            href="https://huggingface.co/spaces/Pissaia92/Custom-segm-db"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition hover:scale-105"
          >
            🔗 Access Project on Hugging Face
          </a>
          <p className="text-gray-400 text-sm mt-2">
            (Sometimes require a space restart)
          </p>
        </div>
      </div>
    </div>
  );
}
