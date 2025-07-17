export default function InputRate() {
  return (
    <div className="mb-5.5">
      <label className="block mb-2" htmlFor="interest-rate">Interest Rate</label>
      <div>
        <input
          className="w-full h-12.5 border-1 decoration-solid decoration-slate-500 rounded-sm pl-2"
          type="text"
          id="interest-rate"
          name="rate"
        />
        <span className="relative block before:bg-slate-100 before:absolute before:w-13 before:h-12 before:content-['%'] before:right-[1px] before:bottom-[1px] before:grid before:place-items-center before:rounded-r-[.1875rem] before:font-bold"></span>
      </div>
    </div>
  );
}
