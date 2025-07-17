import OutputEmpty from "./OutputEmpty";
import OutputResults from "./OutputResults";

export default function FormOutputs() {
  return (
    <section className="bg-slate-900 text-white py-8 px-4">
      <OutputEmpty />
      <OutputResults />
    </section>
  );
}
