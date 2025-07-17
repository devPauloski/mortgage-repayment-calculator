export default function InputHeader() {
  return (
    <header className="flex flex-col items-start gap-3 mb-7 md:flex-row md:items-center md:justify-between">
      <h1 className="text-2xl lg:text-[1.625rem] text-slate-900 font-bold leading-tight">
        Mortgage Calculator
      </h1>
      <button
        className="underline decoration-1 decoration-solid cursor-pointer"
        type="reset"
      >
        Clear All
      </button>
    </header>
  );
}
