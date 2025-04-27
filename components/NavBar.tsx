// components/NavBar.tsx
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="w-full p-4 bg-white shadow">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Ashutosh Rabia</Link>
        <div className="space-x-4">
          <Link href="#projects" className="hover:underline">Projects</Link>
          <Link href="#blog"     className="hover:underline">Blog</Link>
          <Link href="#contact"  className="hover:underline">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
