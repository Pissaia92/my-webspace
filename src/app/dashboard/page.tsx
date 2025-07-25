'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import useSWR from 'swr';
import AuthButton from '@/app/components/AuthButton';
import ExportButton from '@/app/components/ExportButton';
import ProductivityChart from '@/app/components/ProductivityChart';
import GitHubLink from '@/app/components/GitHubLink';

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  created_at: string;
}

const fetcher = async (key: string) => {
  const { supabase } = await import('@/lib/supabase/supabase');
  const { data, error } = await supabase.from(key).select('*');
  if (error) throw error;
  return data;
};

export default function Dashboard() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const router = useRouter();

  const { data: tasks = [], mutate } = useSWR<Task[]>('tasks', fetcher);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const { supabase } = await import('@/lib/supabase/supabase');
    const newTask = {
      title,
      description,
      completed: false,
      created_at: new Date().toISOString(),
    };

    editingTask
      ? await supabase.from('tasks').update(newTask).eq('id', editingTask.id)
      : await supabase.from('tasks').insert(newTask);

    mutate();
    setTitle('');
    setDescription('');
    setEditingTask(null);
  };

  const deleteTask = async (id: number) => {
    const { supabase } = await import('@/lib/supabase/supabase');
    await supabase.from('tasks').delete().eq('id', id);
    mutate();
  };

  const startEdit = (task: Task) => {
    setEditingTask(task);
    setTitle(task.title);
    setDescription(task.description || '');
  };

  const toggleComplete = async (task: Task) => {
    const { supabase } = await import('@/lib/supabase/supabase');
    await supabase
      .from('tasks')
      .update({ completed: !task.completed })
      .eq('id', task.id);
    mutate();
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <nav className="flex space-x-6">
            <Link href="/" className="hover:text-green-400">
              Home
            </Link>
            <Link href="/projects" className="hover:text-green-400">
              Projects
            </Link>
            <Link href="/blog" className="hover:text-green-400">
              Blog
            </Link>
            <Link href="/dashboard" className="hover:text-green-400">
              Dashboard
            </Link>
          </nav>
          <AuthButton />
        </div>
      </header>

      <main className="max-w-3xl mx-auto p-6 pt-8">
        <h1 className="text-2xl font-bold mb-4">My Tasks</h1>

        <ProductivityChart tasks={tasks} />

        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1 rounded ${filter === 'all' ? 'bg-blue-600' : 'bg-gray-700'}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('active')}
            className={`px-3 py-1 rounded ${filter === 'active' ? 'bg-yellow-600' : 'bg-gray-700'}`}
          >
            Pending
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-3 py-1 rounded ${filter === 'completed' ? 'bg-green-600' : 'bg-gray-700'}`}
          >
            Completed
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-5 rounded-lg mb-6"
        >
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Task Title"
            className="w-full bg-gray-700 px-3 py-2 rounded mb-3 text-white"
          />
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Description (optional)"
            className="w-full bg-gray-700 px-3 py-2 rounded mb-3 text-white"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm"
          >
            {editingTask ? 'Save' : 'Add'}
          </button>
        </form>

        <ExportButton tasks={filteredTasks} />

        <ul className="space-y-3">
          {filteredTasks.map(task => (
            <li key={task.id} className="bg-gray-800 p-4 rounded">
              <div className="flex justify-between">
                <h3
                  className={task.completed ? 'line-through text-gray-400' : ''}
                >
                  {task.title}
                </h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleComplete(task)}
                    className={`text-xs px-2 py-1 rounded ${task.completed ? 'bg-yellow-600' : 'bg-green-600'}`}
                  >
                    {task.completed ? 'Pendente' : 'Concluída'}
                  </button>
                  <button
                    onClick={() => startEdit(task)}
                    className="text-blue-400 text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-red-400 text-sm"
                  >
                    ✕
                  </button>
                </div>
              </div>
              {task.description && (
                <p className="text-sm text-gray-300 mt-1">{task.description}</p>
              )}
            </li>
          ))}
        </ul>

        <GitHubLink />
      </main>
    </div>
  );
}
