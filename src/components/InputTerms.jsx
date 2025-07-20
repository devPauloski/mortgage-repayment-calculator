export default function InputTerms() {
  return (
    <div>
      <label className="block mb-2" htmlFor="mortgage-term">
        Mortgage Term
      </label>
      <div>
        <input
          className="peer w-full h-12.5 border-0 rounded-sm pl-2 outline outline-slate-500 focus-visible:outline-2 focus-visible:outline-lime text-slate-900 font-semibold cursor-pointer"
          type="text"
          id="mortgage-term"
          name="term"
        />
        <span className="relative block bg-slate-100 before:bg-inherit before:absolute before:w-19.5 before:h-12.5 before:content-['years'] before:right-0 before:bottom-0 before:grid before:place-items-center before:rounded-r-sm before:font-bold before:text-slate-700 peer-focus-visible:[&::before]:bg-lime peer-focus-visible:[&::before]:text-slate-900"></span>
      </div>
    </div>
  );
}
