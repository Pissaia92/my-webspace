// src/app/dashboard/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ProductivityChart from '@/app/components/ProductivityChart';
import ExportButton from '@/app/components/ExportButton';
import GitHubLink from '@/app/components/GitHubLink';

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  created_at: string;
}

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  // Carregar tarefas do localStorage
  useEffect(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) {
      try {
        setTasks(JSON.parse(saved));
      } catch (e) {
        console.error('Erro ao carregar tarefas:', e);
      }
    }
  }, []);

  // Salvar no localStorage sempre que `tasks` mudar
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Adicionar ou editar tarefa
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const now = new Date().toISOString();

    if (editingTask) {
      setTasks(
        tasks.map(t =>
          t.id === editingTask.id
            ? { ...t, title, description, created_at: now }
            : t
        )
      );
    } else {
      const newTask: Task = {
        id: Date.now(), // ID único baseado no timestamp
        title,
        description,
        completed: false,
        created_at: now,
      };
      setTasks([newTask, ...tasks]);
    }

    setTitle('');
    setDescription('');
    setEditingTask(null);
  };

  // Deletar tarefa
  const deleteTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  // Iniciar edição
  const startEdit = (task: Task) => {
    setEditingTask(task);
    setTitle(task.title);
    setDescription(task.description || '');
  };

  // Alternar status
  const toggleComplete = (task: Task) => {
    setTasks(
      tasks.map(t => (t.id === task.id ? { ...t, completed: !t.completed } : t))
    );
  };

  // Filtrar tarefas
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
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
        </div>
      </header>

      {/* Conteúdo */}
      <main className="max-w-3xl mx-auto p-6 pt-8">
        <h1 className="text-2xl font-bold mb-4">My Tasks</h1>

        <ProductivityChart tasks={tasks} />

        {/* Filtros */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1 rounded ${
              filter === 'all' ? 'bg-blue-600' : 'bg-gray-700'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('active')}
            className={`px-3 py-1 rounded ${
              filter === 'active' ? 'bg-yellow-600' : 'bg-gray-700'
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-3 py-1 rounded ${
              filter === 'completed' ? 'bg-green-600' : 'bg-gray-700'
            }`}
          >
            Completed
          </button>
        </div>

        {/* Formulário */}
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

        {/* Exportação */}
        <ExportButton tasks={filteredTasks} />

        {/* Lista de tarefas */}
        <ul className="space-y-3">
          {filteredTasks.length === 0 ? (
            <p className="text-gray-400">No tasks found.</p>
          ) : (
            filteredTasks.map(task => (
              <li key={task.id} className="bg-gray-800 p-4 rounded">
                <div className="flex justify-between">
                  <h3
                    className={
                      task.completed ? 'line-through text-gray-400' : ''
                    }
                  >
                    {task.title}
                  </h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleComplete(task)}
                      className={`text-xs px-2 py-1 rounded ${
                        task.completed ? 'bg-yellow-600' : 'bg-green-600'
                      }`}
                    >
                      {task.completed ? 'Pending' : 'Done'}
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
                  <p className="text-sm text-gray-300 mt-1">
                    {task.description}
                  </p>
                )}
              </li>
            ))
          )}
        </ul>

        <GitHubLink />
      </main>
    </div>
  );
}
