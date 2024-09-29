export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col gap-2">
        <p className="text-6xl font-bold">Postman</p>
        <p>
          A simple app to send emails using a Next.js backend by{" "}
          <a
            href="https://developerjaskaran.netlify.app/"
            target="_blank"
            className="underline"
          >
            Jaskaran Singh
          </a>
          .
        </p>
      </div>
    </main>
  );
}
