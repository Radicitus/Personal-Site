import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-black px-6 py-24 sm:py-32 lg:px-8 lg:min-h-[80vh]">
      <div className="text-center">
        <p className="font-semibold text-white text-xl">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-200 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 leading-7 text-gray-300">
          Sorry, I couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="px-3.5 py-2.5 text-sm font-semibold text-white hover:text-slate-300"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
}
