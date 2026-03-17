"use client";

export default function ErrorBoundary({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-16">
      <h1 className="text-5xl max-sm:text-3xl">Something went wrong.</h1>
      <button
        onClick={reset}
        className="underline decoration-sky-600 underline-offset-4"
      >
        Try again
      </button>
    </div>
  );
}
