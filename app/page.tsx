export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen md:w-[60%] w-[90%] mx-auto">
      <div className="flex flex-col gap-2">
        <p className="text-6xl font-bold">Muxmail</p>
        <p>
          A simple app to send emails using a Next.js backend made by{" "}
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
