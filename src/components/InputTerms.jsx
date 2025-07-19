export default function InputTerms() {
  return (
    <div>
      <label className="block mb-2" htmlFor="mortgage-term">
        Mortgage Term
      </label>
      <div>
        <input
          className="w-full h-12.5 border-1 decoration-solid decoration-slate-500 rounded-sm pl-2"
          type="text"
          id="mortgage-term"
          name="term"
        />
        <span className="relative block before:bg-slate-100 before:absolute before:w-19.5 before:h-12 before:content-['years'] before:right-[1px] before:bottom-[1px] before:grid before:place-items-center before:rounded-r-[.1875rem] before:font-bold before:text-slate-700"></span>
      </div>
    </div>
  );
}
