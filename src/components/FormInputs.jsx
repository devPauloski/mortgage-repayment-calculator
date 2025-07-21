import InputHeader from "./InputHeader.jsx";
import InputAmount from "./InputAmount.jsx";
import InputTerms from "./InputTerms.jsx";
import InputRate from "./InputRate.jsx";
import MortgageOptions from "./MortgageOptions.jsx";
import SubmitButton from "./SubmitButton.jsx";

export default function FormInputs() {
  return (
    <section className="px-[5%] py-8">
      <InputHeader />
      <InputAmount />
      <div className="flex flex-col gap-5.5 md:flex-1 md:flex-row">
        <InputTerms />
        <InputRate />
      </div>
      <MortgageOptions />
      <SubmitButton />
    </section>
  );
}
