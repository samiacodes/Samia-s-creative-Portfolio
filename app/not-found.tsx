import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black-100">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h2>
        <p className="text-white-100 mb-6">
          Could not find the requested resource
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-purple hover:bg-purple/80 text-white rounded-lg transition-colors inline-block"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
