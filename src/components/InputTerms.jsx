export default function InputTerms() {
  return (
    <div>
      <label htmlFor="mortgage-term">Mortgage Term</label>
      <div>
        <input
          className="w-full h-12.5 border-1 decoration-solid decoration-slate-500 rounded-sm"
          type="text"
          id="mortgage-term"
          name="term"
        />
        <span></span>
      </div>
    </div>
  );
}
