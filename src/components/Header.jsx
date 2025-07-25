export default function Header({ handleReset }) {
  return (
    <div className="mb-4 flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
      <h1 className="text-2xl leading-tight font-bold text-slate-900 lg:text-[1.625rem]">
        Mortgage Calculator
      </h1>
      <button
        className="cursor-pointer underline decoration-solid decoration-1"
        type="reset"
        onClick={() => handleReset()}
      >
        Clear All
      </button>
    </div>
  );
}
