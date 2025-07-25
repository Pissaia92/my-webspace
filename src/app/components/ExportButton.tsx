// src/app/components/ExportButton.tsx
'use client';
import jsPDF from 'jspdf';

export default function ExportButton({ tasks = [] }) {
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Minhas Tarefas', 20, 20);

    let y = 40;
    tasks.forEach(task => {
      doc.setFontSize(12);
      doc.text(
        `${task.title} - ${task.completed ? 'Concluída' : 'Pendente'}`,
        20,
        y
      );
      y += 10;
      if (y > 270) {
        doc.addPage();
        y = 20;
      }
    });

    doc.save('tarefas.pdf');
  };

  return (
    <button
      onClick={exportToPDF}
      className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm mt-4"
    >
      Export to PDF
    </button>
  );
}
