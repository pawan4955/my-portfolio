import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-6xl font-bold font-mono text-indigo-500/30 mb-4">404</p>
        <h1 className="text-2xl font-bold text-slate-50 mb-3">Page not found</h1>
        <p className="text-slate-400 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors duration-200"
          >
            <Home size={15} aria-hidden="true" />
            Home
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium border border-slate-700 transition-colors duration-200"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
