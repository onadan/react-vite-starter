export function Main() {
  return (
    <div className="container mx-auto flex min-h-screen flex-col items-center justify-center space-y-8 px-4 py-16">
      {/* <h1 className="text-center text-4xl font-bold text-neutral-200">
        Welcome to Your Vite React Template!
      </h1> */}
      <p className="mb-2 text-center text-lg text-gray-400">
        This is a starting point for your amazing React projects built with
        Vite.
      </p>
      <a
        href="https://github.com/onadan/react-vite-starter"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-md bg-green-700 px-4 py-2 font-bold text-neutral-300 hover:bg-green-800"
      >
        Get the template on GitHub
      </a>

      <a
        className="pt-10 text-sm font-bold text-green-500 hover:underline"
        href="https://github.com/onadan"
      >
        Made with 🤍 by onadan
      </a>
    </div>
  );
}
