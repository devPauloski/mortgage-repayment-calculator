import calculatorIcon from "/src/assets/images/icon-calculator.svg";
import illustrationEmptyImage from "/src/assets/images/illustration-empty.svg";

export default function App() {
  return (
    <main class="max-w-[30rem] mx-auto bg-white md:max-w-[63.125rem]">
      <form className="grid md:grid-cols-2">
        <section className="px-5.5 py-8">
          <div className="flex flex-col items-start gap-3 mb-7">
            <h1 className="text-[2rem] text-slate-900 font-bold leading-tight">
              Mortgage Calculator
            </h1>
            <button
              className="underline decoration-1 decoration-solid cursor-pointer"
              type="reset"
            >
              Clear All
            </button>
          </div>
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
          <div className="flex flex-col gap-5.5">
            <div>
              <label htmlFor="mortgage-term">Mortgage Term</label>
              <div>
                <input type="text" id="mortgage-term" name="term" />
                <span></span>
              </div>
            </div>
            <div>
              <label htmlFor="interest-rate">Interest Rate</label>
              <div>
                <input type="text" id="Interest-rate" name="rate" />
                <span></span>
              </div>
            </div>
          </div>
          <fieldset>
            <legend>Mortgage Type</legend>
            <div>
              <label htmlFor="repayment">
                <input type="radio" id="repayment" name="mortgageType" />
                Repayment
              </label>
              <label htmlFor="interest-only">
                <input type="radio" id="interest-only" name="mortgageType" />
                Interest Only
              </label>
            </div>
          </fieldset>
          <button type="submit">
            <img src={calculatorIcon} alt="" />
            <span>Calculate Repayments</span>
          </button>
        </section>
        <section className="bg-slate-900 text-white">
          <div>
            <img src={illustrationEmptyImage} alt="Empty illustration" />
            <h2>Results shown here</h2>
            <p>
              Complete the form and click “calculate repayments” to see what
              your monthly repayments would be.
            </p>
          </div>
          <div className="hidden">
            <h2>Your results</h2>
            <p>
              Your results are shown below based on the information you
              provided. To adjust the results, edit the form and click
              “calculate repayments” again.
            </p>
            <p>
              <span>Your monthly repayments</span>
              <output></output>
            </p>
            <p>
              <span>Total you'll repay over the term</span>
              <output></output>
            </p>
          </div>
        </section>
      </form>
    </main>
  );
}
