export default function InputTerm({ term, setTerm }) {
  return (
    <div>
      <label className="mb-2 block" htmlFor="mortgage-term">
        Mortgage Term
      </label>
      <div>
        <input
          type="text"
          inputMode="numeric"
          value={term}
          onChange={(event) => setTerm(event.target.value)}
          id="mortgage-term"
          name="term"
          className="peer h-12.5 w-full cursor-pointer rounded-sm border-0 pl-2 font-semibold text-slate-900 outline outline-slate-500 hover:outline-1 hover:outline-slate-900 focus-visible:outline-1 focus-visible:outline-lime"
        />
        <span className="relative block bg-slate-100 before:absolute before:right-0 before:bottom-0 before:grid before:h-12.5 before:w-19.5 before:place-items-center before:rounded-r-sm before:bg-inherit before:font-bold before:text-slate-700 before:content-['years'] peer-focus-visible:[&::before]:bg-lime peer-focus-visible:[&::before]:text-slate-900"></span>
        <span className="mt-1 hidden">This field is require</span>
      </div>
    </div>
  );
}
