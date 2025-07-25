// src/app/components/GitHubProjects.tsx
'use client'

import { useEffect, useState } from 'react'

interface Repo {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
}

export default function GitHubProjects() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch('https://api.github.com/users/cj-nord/repos')
        const data = await res.json()
        if (Array.isArray(data)) setRepos(data.slice(0, 3))
      } catch (error) {
        console.error('Erro ao carregar GitHub:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchRepos()
  }, [])

  if (loading) return <p className="text-gray-400">Carregando projetos...</p>

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4">Projetos no GitHub</h3>
      <div className="space-y-4">
        {repos.map(repo => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-gray-800 rounded hover:bg-gray-700"
          >
            <div className="flex justify-between">
              <h4 className="font-semibold text-green-400">{repo.name}</h4>
              <span className="text-yellow-400">{repo.stargazers_count} ⭐</span>
            </div>
            <p className="text-gray-300 text-sm mt-1">{repo.description}</p>
          </a>
        ))}
      </div>
    </div>
  )
}