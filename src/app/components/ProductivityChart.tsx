'use client';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

// Define a interface com os dados que você usa
interface Task {
  created_at: string;
}

interface ProductivityChartProps {
  tasks?: Task[];
}

export default function ProductivityChart({
  tasks = [],
}: ProductivityChartProps) {
  const today = new Date();
  const lastWeek = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    return d;
  }).reverse();

  const data = lastWeek.map(date => {
    const dateStr = date.toISOString().split('T')[0];
    const count = tasks.filter(
      (t: Task) => t.created_at?.split('T')[0] === dateStr
    ).length;
    return { name: days[date.getDay()], tarefas: count };
  });

  return (
    <div className="h-40 mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <Tooltip />
          <Bar dataKey="tarefas" fill="#4ade80" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
