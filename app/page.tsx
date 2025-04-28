// app/page.tsx
'use client'

import NavBar from '../components/NavBar'
import ProjectCard from '../components/ProjectCard'


import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  Download,
  Sun,
  Moon,
} from 'lucide-react'

const contacts = [
  { icon: <Mail size={20} />, href: 'mailto:arabia22@iitk.ac.in' },
  { icon: <Github size={20} />, href: 'https://github.com/ashutoshrabia' },
  { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/ashutosh-rabia-265b32253/' },
  { icon: <Instagram size={20} />, href: 'https://www.instagram.com/ashutosh_rabia/' },
  { icon: <Download size={20} />, href: '/resume.pdf', download: true },
]

const projects = [
  { title: 'P300 Classification - EEGNet', href: 'https://github.com/ashutoshrabia/EEGNet' },
  { title: 'Market Regime Detection', href: 'https://github.com/ashutoshrabia/Regime-detection-using-unsupervised-learning' },
  { title: 'FED Appliance Recognition', href: 'https://github.com/ashutoshrabia/FedAR' },
  { title: 'News Similarity API', href: 'https://github.com/ashutoshrabia/News-Similarity-API' },
]

export default function Home() {
  const [theme, setTheme] = useState<'light'|'dark'>('light')

  const nextTheme = {
    light: 'dark',
    dark:  'light',
  }[theme]

  const themeClasses = {
    light: 'bg-gradient-to-br from-indigo-200 via-pink-200 to-yellow-200 text-gray-900',
    dark:  'bg-gray-900 text-gray-100',
  }[theme]

  return (
    <div className={`${themeClasses} min-h-screen p-8 transition-colors duration-500 font-serif`}>
      {/* THEME TOGGLE */}
      <button
        onClick={() => setTheme(nextTheme)}
        className="fixed top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
      >
        {theme === 'light' ? <Moon size={18}/> : <Sun size={18}/>}        
      </button>

      {/* HEADER */}
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-40 h-40 rounded-full overflow-hidden shadow-xl ring-4 ring-white">
          <Image
            src="/profile.jpg"
            alt="Ashutosh Rabia"
            width={160}
            height={160}
            className="object-cover"
          />
        </div>

        <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold">Hi, I’m Ashutosh </h1>
        <p className="mt-2 text-center max-w-xl">
        Junior undergraduate majoring in Mathematics and Computing at the Indian Institute of Technology Kanpur and a passionate Machine Learning & AI enthusiast. 
        </p>

        {/* ICON LINKS */}
        <div className="mt-6 flex gap-4">
          {contacts.map((c, i) => (
            <motion.a
              key={i}
              href={c.href}
              {...(c.download ? { download: true } : {})}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/30 rounded-full hover:bg-white/40 transition"
              whileHover={{ scale: 1.2 }}
            >
              {c.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* PROJECTS GRID */}
      <section className="mt-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center underline decoration-pink-500 underline-offset-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-lg bg-white/80 text-gray-900 shadow hover:shadow-xl transition"
              whileHover={{ y: -4 }}
            >
              <h3 className="text-lg font-bold mb-2">{p.title}</h3>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  )
}
