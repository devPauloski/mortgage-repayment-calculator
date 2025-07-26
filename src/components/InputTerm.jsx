export default function InputTerm({ term, handleTerm, errors }) {
  return (
    <div className="md:flex-1">
      <label className="mb-2 block" htmlFor="mortgage-term">
        Mortgage Term
      </label>
      <input
        style={{
          outline: (errors.term) && "1px solid hsl(4, 69%, 50%)",
        }}
        type="text"
        inputMode="decimal"
        value={term}
        onChange={(event) => handleTerm(event)}
        autoComplete="off"
        id="mortgage-term"
        placeholder="1 - 30"
        name="term"
        className="peer h-12.5 w-full cursor-pointer rounded-sm border-0 pl-2 font-semibold text-slate-900 outline outline-slate-500 hover:outline-1 hover:outline-slate-900 focus-visible:outline-1 focus-visible:outline-lime"
      />
      <span
        style={{
          backgroundColor: errors.term && "hsl(4, 69%, 50%)",
          color: errors.term && "hsl(0, 0%, 100%)",
        }}
        className="relative block bg-slate-100 text-slate-700 before:absolute before:right-0 before:bottom-0 before:grid before:h-12.5 before:w-19.5 before:place-items-center before:rounded-r-sm before:bg-inherit before:font-bold before:text-inherit before:content-['years'] peer-focus-visible:[&::before]:bg-lime peer-focus-visible:[&::before]:text-slate-900"
      ></span>
      {errors.term && (
        <span
          aria-live="polite"
          className="mt-1 inline-block text-[.8125rem] text-red"
        >
          {errors.term}
        </span>
      )}
    </div>
  );
}
