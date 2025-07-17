export default function InputHeader() {
  return (
    <header className="flex flex-col items-start gap-3 mb-7">
      <h1 className="text-[2rem] text-slate-900 font-bold leading-tight">
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
