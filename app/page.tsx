import { prisma } from "./lib/prisma";

export default async function Home() {
  const words = await prisma.word.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 p-8 dark:bg-black">
      <main className="w-full max-w-3xl rounded-xl bg-white p-8 shadow dark:bg-zinc-900">
        <h1 className="mb-6 text-3xl font-bold">Chinese Vocab</h1>

        <div className="space-y-4">
          {words.length === 0 ? (
            <p className="text-zinc-500">No words added yet.</p>
          ) : (
            words.map((word) => (
              <div
                key={word.id}
                className="rounded-lg border p-4 shadow-sm dark:border-zinc-700"
              >
                <h2 className="text-xl font-semibold">{word.characters}</h2>
                <p className="text-zinc-600 dark:text-zinc-300">
                  {word.pinyin}
                </p>
                <p>{word.english}</p>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
