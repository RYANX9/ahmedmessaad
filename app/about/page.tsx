import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold mb-4">About This App</h1>
        <p className="text-white/80 mb-8">
          This simple demo shows how modern Next.js with Tailwind and Turbopack
          works perfectly out of the box.
        </p>
        <Link
          href="/"
          className="bg-indigo-500 hover:bg-indigo-400 px-6 py-3 rounded-xl font-medium transition"
        >
          ← Back Home
        </Link>
      </div>
    </main>
  );
}
