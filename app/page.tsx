// app/page.tsx
'use client'   // enables client-side features (framer-motion, events, etc)

import NavBar      from '../components/NavBar'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  const projects = [
    {
      title: 'Hangman Optimizer',
      description: 'A smart Hangman guesser that improves success rate to 45%',
      link: 'https://github.com/username/hangman-optimizer',
      technologies: ['Python', 'API', 'Algorithms'],
    },
    {
      title: 'Yeast Protein Clustering',
      description: 'Clustering analysis for protein localization using K-Means',
      link: 'https://github.com/username/yeast-protein-clustering',
      technologies: ['Python', 'scikit-learn', 'Data Science'],
    },
    {
      title: 'Portfol Website',
      description: 'This very site—built with Next.js and Tailwind CSS',
      link: 'https://github.com/username/portfolio-site',
      technologies: ['Next.js', 'Tailwind', 'TypeScript'],
    },
  ]

  return (
    <>
      <NavBar />

      <header className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Hi, I’m Ashutosh 👋</h1>
          <p className="text-xl">I build efficient algorithms and full-stack applications.</p>
        </div>
      </header>

      <main id="projects" className="max-w-5xl mx-auto py-16">
        <h2 className="text-3xl font-semibold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(p => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </main>

      <footer className="bg-gray-100 py-8 text-center">
        <p>© {new Date().getFullYear()} Ashutosh Rabia. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </>
  )
}
