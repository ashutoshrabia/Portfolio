// components/ProjectCard.tsx
type Project = {
  title: string
  description: string
  link: string
  technologies: string[]
}

export default function ProjectCard({ title, description, link, technologies }: Project) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="block p-4 border rounded hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="text-xs bg-gray-200 px-2 py-1 rounded">{tech}</span>
        ))}
      </div>
    </a>
  )
}
