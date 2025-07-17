export default function InputRate() {
  return (
    <div className="mb-5.5">
      <label htmlFor="interest-rate">Interest Rate</label>
      <div>
        <input
          className="w-full h-12.5 border-1 decoration-solid decoration-slate-500 rounded-sm"
          type="text"
          id="Interest-rate"
          name="rate"
        />
        <span></span>
      </div>
    </div>
  );
}
