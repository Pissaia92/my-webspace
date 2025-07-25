// src/app/components/TForm.tsx
'use client'

import { useState } from 'react'

interface TaskFormProps {
  onSubmit: (title: string) => void
}

export default function TForm({ onSubmit }: TaskFormProps) {
  const [title, setTitle] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!title.trim()) return
    
    setLoading(true)
    try {
      await onSubmit(title)
      setTitle('')
    } catch (error) {
      console.error('Erro ao criar tarefa:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Write your new task here..."
          className="flex-1 bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !title.trim()}
          className="bg-green-700 hover:bg-green-600 disabled:bg-green-500 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-medium transition"
        >
          {loading ? 'Adding...' : 'Add'}
        </button>
      </div>
    </form>
  )
}