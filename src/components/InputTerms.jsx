export default function InputTerms() {
  return (
    <div>
      <label className="mb-2 block" htmlFor="mortgage-term">
        Mortgage Term
      </label>
      <div>
        <input
          className="peer h-12.5 w-full cursor-pointer rounded-sm border-0 pl-2 font-semibold text-slate-900 outline outline-slate-500 focus-visible:outline-2 focus-visible:outline-lime"
          type="text"
          id="mortgage-term"
          name="term"
        />
        <span className="relative block bg-slate-100 before:absolute before:right-0 before:bottom-0 before:grid before:h-12.5 before:w-19.5 before:place-items-center before:rounded-r-sm before:bg-inherit before:font-bold before:text-slate-700 before:content-['years'] peer-focus-visible:[&::before]:bg-lime peer-focus-visible:[&::before]:text-slate-900"></span>
      </div>
    </div>
  );
}
