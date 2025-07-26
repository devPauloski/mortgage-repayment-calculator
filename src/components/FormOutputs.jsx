import OutputEmpty from "./OutputEmpty";
import OutputResults from "./OutputResults";

export default function FormOutputs({ results }) {
  return (
    <section className="grid bg-slate-900 px-4 py-8 text-slate-300 md:rounded-tr-2xl md:rounded-br-2xl md:rounded-bl-[4rem] md:px-8">
      {!results ? <OutputEmpty /> : <OutputResults results={results} />}
    </section>
  );
}
