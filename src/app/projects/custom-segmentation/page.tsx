import Link from 'next/link';
import React from 'react';
export default function RFMSegmentationPage() {
  // Technologies list
  const technologies = ['Python', 'Pandas', 'Plotly', 'Streamlit'];

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

        {/* --- HEADER --- */}
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            🛍️ Customer Segmentation Dashboard
          </h1>
          <p className="text-lg text-gray-300">
            RFM Analysis of an e-commerce retailer based in the UK.
          </p>
          {/* data details */}
          <p className="text-sm text-gray-400 mt-4">
            📅 Data Period: 2010–2011 | 📊 Transactions: ~540,000 | 👥
            Customers: ~4,300
          </p>
        </header>

        {/* --- DESCRIPTION --- */}
        <section className="mb-10">
          <p className="text-gray-300 leading-relaxed">
            This dashboard presents a complete customer segmentation analysis
            using the RFM model (Recency, Frequency, Monetary) to identify
            high-value customers, detect churn risks, and support data-driven
            marketing strategies. Developed with{' '}
            <strong>Python, Pandas, Plotly,</strong> and
            <strong> Streamlit</strong>.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            Despite the limited data, I found it interesting to build the model
            with the aim of demonstrating technical capacity for data
            manipulation and creating visual content through coding.
          </p>
        </section>

        {/* --- FEATURES --- */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            ✨ Key Contributions
          </h2>
          {/* RFM features */}
          <ul className="space-y-2 text-gray-300">
            <li>
              <strong>Statistical heterogeneity:</strong> Segmentation accounts
              for skewness in monetary values.
            </li>
            <li>
              <strong>Retention ROI:</strong> Quantified impact of recovering
              &quot;At Risk&quot; customers.
            </li>
            <li>
              <strong>Dynamic RFM scoring:</strong> Users can adjust scoring
              thresholds interactively.
            </li>
            <li>
              <strong>Logarithmic scale:</strong> Visualizes revenue
              distribution without distortion.
            </li>
          </ul>
        </section>

        {/* --- TECHNOLOGIES --- */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            🛠️ Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {technologies.map(tech => (
              <span
                key={tech}
                className="bg-indigo-900 text-indigo-200 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* --- ACCESS BUTTON --- */}
        <div className="text-center mt-10">
          <a
            href="https://huggingface.co/spaces/Pissaia92/Custom-segm-db"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition hover:scale-105"
          >
            🔗 Access Live Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}
