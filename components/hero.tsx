import NapthaLogo from "./naptha-logo";

export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="flex gap-8 justify-center items-center">
        <a
          href="https://naptha.ai"
          target="_blank"
          rel="noreferrer"
        >
          <NapthaLogo />
        </a>
      </div>
      <h1 className="sr-only">Naptha Hub</h1>
      <p className="text-2xl lg:text-3xl !leading-tight mx-auto max-w-xl text-center">
        Read the{" "}
        <a
          href="https://docs.naptha.ai"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          docs
        </a>{" "}
        and watch this{" "}
        <a
          href="https://www.youtube.com/watch?v=nzV04zOA0f0"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          demo
        </a>!
      </p>
    </div>
  );
}
