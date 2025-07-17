export default function InputAmount() {
  return (
    <div>
      <label className="block mb-2" htmlFor="mortgage-amount">
        Mortgage Amount
      </label>
      <div>
        <input
          className="w-full h-12.5 border-1 decoration-solid decoration-slate-500 rounded-sm"
          type="text"
          id="mortgage-amount"
          name="amount"
        />
        <span></span>
      </div>
    </div>
  );
}
